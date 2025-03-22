// audioPlayer.js
import { onRecordingFinished } from '../audioRecorder.js';

// Función para crear un reproductor de audio
export function initializeAudioPlayer() {
  const audioPlayer = document.createElement('audio');
  audioPlayer.id = 'audio-player';
  audioPlayer.controls = true; // Añade controles de reproducción (play, pause, volumen, etc.)
  document.body.appendChild(audioPlayer);

  // Registrar un callback para reproducir la grabación cuando termine
  onRecordingFinished((audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    audioPlayer.src = audioUrl;
    audioPlayer.play();
    console.log("Reproduciendo la grabación recién realizada.");
  });
}