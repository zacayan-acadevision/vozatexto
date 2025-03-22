// popupLogic.js

// Array para almacenar los mensajes temporalmente
let messagesQueue = [];

// Añade un mensaje al array
export function addMessage(message) {
  messagesQueue.push(message);
}

// Obtiene todos los mensajes
export function getMessages() {
  return messagesQueue;
}

// Vacía el array de mensajes
export function clearMessages() {
  messagesQueue = [];
}