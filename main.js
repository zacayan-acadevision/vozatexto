import { initializeSpeechRecognition } from './modules/speechRecognition.js';
import { setupEventListeners } from './modules/uiManager.js';
import { loadMessages } from './modules/storageManager.js';
import { initializeAudioPlayer } from './modules/audio/audioPlayer.js';
import './modules/audio/audioDownloader.js'; 
document.addEventListener('DOMContentLoaded', () => {
    initializeSpeechRecognition();
    setupEventListeners();
    
    // initializeAudioPlayer();
    // loadMessages();
});