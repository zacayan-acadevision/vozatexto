// audioDownloader.js
import { onRecordingFinished } from '../audioRecorder.js';

// Función para generar un nombre de archivo basado en la fecha y hora actuales
function generateFileName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `grabacion_${year}-${month}-${day}_${hours}-${minutes}-${seconds}.webm`;
}

// Función para crear un enlace de descarga
function createDownloadLink(audioBlob, fileName) {
  const audioUrl = URL.createObjectURL(audioBlob);

  // Crear el enlace de descarga
  const downloadLink = document.createElement('a');
  downloadLink.href = audioUrl;
  downloadLink.download = fileName;
  downloadLink.innerText = `Descargar ${fileName}`;
  downloadLink.style.display = 'block';
  downloadLink.style.marginTop = '10px';
  downloadLink.style.color = '#007bff';
  downloadLink.style.textDecoration = 'none';

  // Añadir el enlace al final de la página
  document.body.appendChild(downloadLink);
}

// Registrar un callback para generar el enlace de descarga cuando la grabación termine
onRecordingFinished((audioBlob) => {
  const fileName = generateFileName();
  createDownloadLink(audioBlob, fileName);
  console.log(`Enlace de descarga generado para: ${fileName}`);
});