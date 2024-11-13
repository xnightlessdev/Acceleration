const audioPlayers = [
  { player: document.getElementById('audioPlayer1'), progressBar: document.getElementById('progress-bar1'), playButton: document.getElementById('playPauseButton1'), currentTime: document.getElementById('currentTime1') },
  { player: document.getElementById('audioPlayer2'), progressBar: document.getElementById('progress-bar2'), playButton: document.getElementById('playPauseButton2'), currentTime: document.getElementById('currentTime2') },
  { player: document.getElementById('audioPlayer3'), progressBar: document.getElementById('progress-bar3'), playButton: document.getElementById('playPauseButton3'), currentTime: document.getElementById('currentTime3') }
];

const volumeSliders = document.querySelectorAll('#volumeSlider');

audioPlayers.forEach((audioData, index) => {
  const { player, progressBar, playButton, currentTime } = audioData;

  player.addEventListener('timeupdate', () => {
    const current = player.currentTime;
    const duration = player.duration;
    if (duration) {
      progressBar.querySelector('.progress').style.width = `${(current / duration) * 100}%`;
      currentTime.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
    }
  });

  playButton.addEventListener('click', () => {
    if (player.paused) {
      audioPlayers.forEach(({ player: otherPlayer, playButton: otherPlayButton }) => {
        otherPlayer.pause();
        otherPlayButton.textContent = '▶';
      });
      player.play();
      playButton.textContent = '⏸';
    } else {
      player.pause();
      playButton.textContent = '▶';
    }
  });

  volumeSliders[index].addEventListener('input', (e) => {
    player.volume = e.target.value / 100;
  });
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}
