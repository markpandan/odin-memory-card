const API_KEY = "aIm55ZPoC8bOAPqojUPRZUdV4Ys3cS8r"; // This API key was free, so there is no need to keep this private
const API_KEY_2 = "3J3rCu0hYoD6RdtPWreWJQO4qP4OVL0M";

async function fetchImageData(imageId, controller) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/${imageId}?api_key=${API_KEY_2}&rating=g`,
    { signal: controller.signal }
  );
  return await response.json();
}

async function fetchImageDataArray(imageIds, controller) {
  // imageIds = imageIds.join("%2C");
  imageIds = encodeURIComponent(imageIds.join(","));

  const response = await fetch(
    `https://api.giphy.com/v1/gifs?api_key=${API_KEY_2}&ids=${imageIds}&rating=g`,
    { signal: controller.signal }
  );

  return response.json();
}

export { fetchImageData, fetchImageDataArray };
