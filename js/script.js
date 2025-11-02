console.log("script.js loaded");
// STEP 1: Variables
const button = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");
const searchInput = document.querySelector("#search-input"); // for extra credit

// Your Giphy API key
const API_KEY = "YOUR_API_KEY_HERE";

// STEP 2: Fetch function
async function fetchGifs(query = "funny") {
  try {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`;
    const response = await fetch(endpoint);
    const data = await response.json();

    // Clear previous gifs
    gifContainer.innerHTML = "";

    // STEP 3: Display each GIF
    const images = data.data; // array of gifs
    images.forEach(gif => {
      const imgUrl = gif.images.original.url;
      gifContainer.innerHTML += `<img src="${imgUrl}" class="col-3 mb-3">`;
    });
  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
}

// STEP 4: Event Listener
button.addEventListener("click", () => {
  // For extra credit — use search input
  const searchTerm = searchInput ? searchInput.value : "funny";
  fetchGifs(searchTerm);
});
