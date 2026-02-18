import FetchWorker from './fetcher.worker?worker&inline';
import { FetcherOptions, FetcherResult } from "../../fetcher";

export interface FetchWorkerOptions extends FetcherOptions { }

/**
 * Performs an HTTP request using a Web Worker to avoid blocking the main thread.
 * This is particularly useful for long-running requests or when keeping the UI responsive is crucial.
 *
 * @template T - The expected type of the response data.
 * @param options - Configuration options for the request, including URL, method, headers, etc.
 * @returns A promise resolving to the FetcherResult object containing the response or error details.
 */
export const fetchWorker = <T = unknown>(options: FetchWorkerOptions): Promise<FetcherResult<T>> => {
  return new Promise((resolve, reject) => {

    try {
      const worker = new FetchWorker()

      worker.onmessage = (event: MessageEvent<FetcherResult<T>>) => {
        const result = event.data;
        worker.terminate();

        if (result.success) {
          resolve(result);
        } else {
          reject({
            error: result.error || 'An unknown error occurred in the worker.',
            reason: result.reason,
            status: result.status,
            statusText: result.statusText,
            headers: result.headers,
            id: result.id
          });
        }
      };

      // Handle errors originating from the worker itself (e.g., script loading errors, runtime errors within the worker script)
      worker.onerror = (errorEvent: ErrorEvent) => {
        console.error("Web Worker error:", errorEvent);
        worker.terminate();
        reject(new Error(`Web Worker failed: ${errorEvent.message}`));
      };

      worker.postMessage(options);

    } catch (creationError) {
      // Catch errors that might occur during Worker instantiation
      // e.g., if Web Workers are not supported in the environment, or the worker script URL is invalid
      console.error("Failed to create Web Worker:", creationError);
      reject(new Error(`Failed to initialize Web Worker: ${creationError instanceof Error ? creationError.message : 'Unknown error'}`));
    }
  });
};
