import { toggleListening } from './speechRecognition.js';
import { resetStorage } from './storageManager.js';
import { exportMessages, speakMessages } from './utils.js';

const statusIndicator = document.getElementById('status');



function handleToggle() {
    const isListening = toggleListening();
    this.innerText = isListening ? 'Desactivar Voz' : 'Activar Voz';
    statusIndicator.innerText = isListening ? 'Escuchando...' : 'Micrófono apagado';
    statusIndicator.classList.toggle('listening', isListening);
}

export function setupEventListeners() {
    document.getElementById('toggleBtn').addEventListener('click', handleToggle);
    document.getElementById('exportBtn').addEventListener('click', exportMessages);
    document.getElementById('speakBtn').addEventListener('click', speakMessages);
    document.getElementById('resetBtn').addEventListener('click', resetStorage);
}