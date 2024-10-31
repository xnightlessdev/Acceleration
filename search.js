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

const gameCodes = {
    "Request a Game!": "G001",
    "Vex 7": "G002",
    "2048": "G003",
    "Fortnite": "G004",
    "EmulatorJS": "G005",
    "Hole.io": "G006",
    "Cookie Clicker": "G007",
    "GBA Games": "G008",
    "Paper.io": "G009",
    "2D Rocket League": "G010",
    "Bitlife": "G011",
    "Clicker Heroes": "G012",
    "Drift Hunters": "G013",
    "justfall.lol": "G014",
    "Geometry Dash": "G015",
    "Tunnel Rush": "G016",
    "Big Foot's Game Shack": "G017",
    "Rocketbot Royale": "G018",
    "Timeshooter 2": "G019",
    "Crossy Road": "G020",
    "Snorlax vs. FNF": "G021",
    "8 Ball Pool": "G022",
    "MOTO X3M+": "G023",
    "Red Ball 4": "G024",
    "Subway Surfers": "G025",
    "Rocket League": "G026",
    "Tomb of the Mask": "G027",
    "Smash Karts": "G028",
    "Nitro Type": "G029",
    "1v1.lol": "G030",
    "Zombie Royale": "G031",
    "Math Heaven": "G032",
    "Retro Bowl": "G033",
    "Call of Duty": "G034",
    "Doge Miner 1": "G035",
    "Doge Miner 2": "G036",
    "Poki": "G037",
    "Rooftop Snipers": "G038",
    "Vex 5": "G039",
    "Pokemon": "G040",
    "Among Us": "G041",
    "Happy Wheels": "G042",
    "Slope": "G043",
    "Basketball Legends": "G044",
    "Shell Shockers": "G045",
    "Krunker": "G046",
    "Evade": "G047",
    "Now.gg": "G048"
};

const searchInput = document.getElementById('searchApps');
const cards = document.querySelectorAll('.app-card, .card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const gameName = card.querySelector('a').textContent.trim().toLowerCase();
        
        // Show or hide card based on search match
        if (gameName.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
