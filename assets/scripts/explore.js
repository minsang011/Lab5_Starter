// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("#voice-select");
const textToSpeak = document.querySelector("#text-to-speak");
const speakButton = document.querySelector("#explore button");

function init() {
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  speakButton.addEventListener('click', speak);
}

function populateVoiceList() {
  voices = synth.getVoices();
  voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speak() {
  const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
      break;
    }
  }
  synth.speak(utterance);
}