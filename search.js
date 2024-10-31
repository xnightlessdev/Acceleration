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

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchApps');
  const appCards = document.querySelectorAll('.app-card'); // Ensure this class matches your HTML structure

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    appCards.forEach(card => {
      const appName = card.textContent.toLowerCase();
      card.style.display = appName.includes(searchTerm) ? 'block' : 'none';
    });
  });
});
