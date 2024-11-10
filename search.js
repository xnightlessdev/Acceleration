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

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
  }

  if (template) {
    return `${template}${encodeURIComponent(input)}`;
  }
  return "";
}
document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const query = document.getElementById('searchApps').value.toLowerCase();
      
      searchGames(query);
    });

    function searchGames(query) {
      if (query) {
        console.log("Searching for games with:", query);
      } else {
        console.log("Please enter a search term.");
      }
    }
