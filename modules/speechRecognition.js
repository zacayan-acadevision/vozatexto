// speechRecognition.js
import { addMessage } from './messageHandler.js';
import { initializeNetworkMonitor } from './networkMonitor.js';
import { startRecording, stopRecording } from './audioRecorder.js'; // Importa el nuevo módulo
import popup from './popup/popup.js';

let recognition;
let isListening = false;

export function initializeSpeechRecognition() {
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'es-ES';

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      addMessage(transcript);
    };

    recognition.onstart = () => {
      popup("Reconocimiento de voz iniciado.");
      startRecording(); // Inicia la grabación de audio
    };

    recognition.onend = () => {
      popup("Reconocimiento de voz detenido.");
      stopRecording(); // Detiene la grabación de audio
      if (isListening) recognition.start();
    };

    // Inicializar el monitor de red
    initializeNetworkMonitor((isOnline) => {
      if (isOnline && isListening) {
        recognition.start();
      } else if (!isOnline) {
        recognition.stop();
      }
    });
  } else {
    alert("Tu navegador no soporta el reconocimiento de voz.");
  }
}

export function toggleListening() {
  if (!isListening) {
    recognition.start();
    isListening = true;
  } else {
    recognition.stop();
    isListening = false;
  }
  return isListening;
}