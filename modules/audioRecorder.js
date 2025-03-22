// audioRecorder.js

let mediaRecorder;
let audioChunks = [];
const recordingCallbacks = []; // Array para almacenar los callbacks

// Función para registrar un callback
export function onRecordingFinished(callback) {
  if (typeof callback === 'function') {
    recordingCallbacks.push(callback);
  } else {
    console.error("El callback proporcionado no es una función.");
  }
}

// Función para iniciar la grabación de audio
export function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });

        // Ejecutar todos los callbacks registrados
        recordingCallbacks.forEach((callback) => {
          callback(audioBlob);
        });
      };

      mediaRecorder.start();
      console.log("Grabación de audio iniciada.");
    })
    .catch((error) => {
      console.error("Error al acceder al micrófono:", error);
    });
}

// Función para detener la grabación de audio
export function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    console.log("Grabación de audio detenida.");
  }
}