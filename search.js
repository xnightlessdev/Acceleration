"use strict";
/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
}
const searchInput = document.getElementById('searchApps');
searchInput.addEventListener('input', handleSearch);
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const gameLinks = document.querySelectorAll('.card');

  gameLinks.forEach((link) => {
    const gameName = link.textContent.toLowerCase();
    if (gameName.includes(searchTerm)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchApps');
  const appCards = document.querySelectorAll('.app-card');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    appCards.forEach(card => {
      const appName = card.textContent.toLowerCase();
      if (appName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});




