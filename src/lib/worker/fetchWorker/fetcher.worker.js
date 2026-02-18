import { fetcher } from "../../fetcher"

self.onmessage = async (event) => {
  const options = event.data;

  try {
    const response = await fetcher(options)

    self.postMessage(response);
  } catch (error) {
    const errorMessage = error instanceof Error
      ? error.message
      : 'Unknown error occurred';

    self.postMessage({
      success: false,
      error: errorMessage,
    });
  }
};
