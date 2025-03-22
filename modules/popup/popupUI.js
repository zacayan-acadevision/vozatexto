// popupUI.js

import { getMessages, clearMessages } from './popupLogic.js';

// Crea o actualiza el popup en el DOM
export function updatePopup() {
  // Selecciona el popup existente o crea uno nuevo
  let popupElement = document.getElementById('custom-popup');
  if (!popupElement) {
    // Crea el elemento del popup
    popupElement = document.createElement('div');
    popupElement.id = 'custom-popup';
    popupElement.style.position = 'fixed';
    popupElement.style.top = '50%';
    popupElement.style.left = '50%';
    popupElement.style.transform = 'translate(-50%, -50%)';
    popupElement.style.backgroundColor = 'white';
    popupElement.style.padding = '20px';
    popupElement.style.border = '1px solid #ccc';
    popupElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popupElement.style.zIndex = '1000';
    popupElement.style.borderRadius = '8px';
    popupElement.style.textAlign = 'center';

    // Crea el contenedor de mensajes
    const messageContainer = document.createElement('div');
    messageContainer.id = 'popup-messages';
    popupElement.appendChild(messageContainer);

    // Crea el botón de aceptar
    const acceptButton = document.createElement('button');
    acceptButton.innerText = 'Aceptar';
    acceptButton.style.marginTop = '10px';
    acceptButton.style.padding = '10px 20px';
    acceptButton.style.backgroundColor = '#007bff';
    acceptButton.style.color = 'white';
    acceptButton.style.border = 'none';
    acceptButton.style.borderRadius = '4px';
    acceptButton.style.cursor = 'pointer';

    // Añade el evento para cerrar el popup
    acceptButton.addEventListener('click', () => {
      // Vacía el array de mensajes
      clearMessages();
      // Elimina el popup del DOM
      document.body.removeChild(popupElement);
    });

    popupElement.appendChild(acceptButton);

    // Añade el popup al body
    document.body.appendChild(popupElement);
  }

  // Actualiza el contenido del contenedor de mensajes
  const messageContainer = document.getElementById('popup-messages');
  messageContainer.innerHTML = ''; // Limpia los mensajes anteriores

  // Obtiene todos los mensajes del módulo de lógica
  const messages = getMessages();

  // Añade todos los mensajes al contenedor
  messages.forEach(msg => {
    const messageElement = document.createElement('div');
    messageElement.innerText = msg;
    messageContainer.appendChild(messageElement);
  });
}