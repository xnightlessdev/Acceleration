"use strict";

/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    return new URL(input).toString();
  } catch (err) {
  }

// Define a list of games in the proxy
const games = [
  { name: "Fortnite", url: "https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a" },
  { name: "Minecraft", url: "https://emulatorjs.org" },
  { name: "Roblox", url: "https://hole-io.com/" },
  { name: "PlayerUnknown's Battlegrounds", url: "https://cyrillbrito.github.io/cookieclicker/" },
  { name: "Apex Legends", url: "https://cattn.github.io/gba/" },
  { name: "2048", url: "https://e/1/2048/index.html" },
  { name: "Cookie Clicker", url: "https://cyrillbrito.github.io/cookieclicker/" },
  { name: "Paper.io", url: "https://paper-io.com/" },
  { name: "Bitlife", url: "https://bitlifeonline.io/" },
  { name: "Clicker Heroes", url: "https://www.clickerheroes.com/" },
  { name: "Drift Hunters", url: "https://drift-hunters.io" },
  { name: "Just Fall LOL", url: "https://justfall.lol/" },
  { name: "Geometry Dash", url: "https://geometrydash.io" },
  { name: "Tunnel Rush", url: "https://tunnelrush.app" },
  { name: "Big Feet", url: "https://bigfeet.pages.dev/" },
  { name: "Rocket Bot Royale", url: "https://rocketbotroyale2.winterpixel.io" },
  { name: "Crossy Road", url: "https://www.crossyroad.com" },
  { name: "FNF", url: "https://fnf.kdata1.com/snorlax/1/" },
  { name: "8 Ball Pool", url: "https://8ballpool.com" },
  { name: "Moto X3M", url: "https://www.coolmathgames.com/0-moto-x3m" },
  { name: "Red Ball 4", url: "https://red-ball4.com" },
  { name: "Subway Surfers", url: "https://subwaysurfers.com" },
  { name: "Rocket Soccer Derby", url: "https://rocketsoccerderby.com" },
  { name: "Tomb of the Mask", url: "https://tombofthemask.github.io" },
  { name: "Smash Karts", url: "https://smashkarts.io" },
  { name: "Nitrotype", url: "https://www.nitrotype.com/" },
  { name: "1v1 LOL", url: "https://1v1.lol" },
];

// Get the search input and results elements
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Function to handle search input
function handleSearchInput() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const results = [];

  // Filter games based on search term
  games.forEach(game => {
    if (game.name.toLowerCase().includes(searchTerm)) {
      results.push(game);
    }
  });

  // Display search results
  displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
  searchResults.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = result.url;
      a.textContent = result.name;
      li.appendChild(a);
      searchResults.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = 'No results found';
    searchResults.appendChild(li);
  }
}

// Add event listener to search input
searchInput.addEventListener('input', handleSearchInput);
