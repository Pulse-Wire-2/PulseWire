const FetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const isJson = (response.headers.get('content-type') || '').includes('application/json');
    const data = isJson ? await response.json() : await response.text();

    return data; // Return data directly without wrapping in an array
  } catch (error) {
    console.error(error.message);
    throw error; // Rethrow error so it can be caught where the function is called
  }
};

export default FetchData