import { fetchFn } from "./_fetchFn"

self.onmessage = async (event) => {
  const options = event.data;

  try {
    const response = await fetchFn(options)

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
