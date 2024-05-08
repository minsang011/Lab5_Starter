// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const volumeImage = document.querySelector('#volume-controls img');
  const volumeSlider = document.querySelector('#volume-controls input');
  const hornSelect = document.querySelector('#horn-select');
  const playButton = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    switch (hornSelect.value) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        audioElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        break;
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    audioElement.volume = volume / 100;

    if (volume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}