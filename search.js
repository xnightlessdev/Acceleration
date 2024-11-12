// Create the HTML elements
document.body.innerHTML = `
  <div id="search-container">
    <input id="search-input" type="text" placeholder="Search for games...">
    <ul id="search-results"></ul>
  </div>
`;

// Array of game titles
let games = [
  "Roblox",
  "Among Us"
];


// Function to search for games
function searchGames() {
  let searchInputValue = document.getElementById("search-input").value.toLowerCase();
  let searchResults = document.getElementById("search-results");

  // Filter the games array based on the search input
  let filteredGames = games.filter(game => game.toLowerCase().includes(searchInputValue));

  // Display the search results
  searchResults.innerHTML = "";
  filteredGames.forEach(game => {
    let gameElement = document.createElement("li");
    gameElement.textContent = game;
    searchResults.appendChild(gameElement);
  });
}

// Add event listener to the search input field
document.getElementById("search-input").addEventListener("input", searchGames);
