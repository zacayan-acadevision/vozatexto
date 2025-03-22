// popup.js

import { addMessage } from './popupLogic.js';
import { updatePopup } from './popupUI.js';

// Función principal que se exporta
export default function popup(message) {
  // Añade el mensaje al array de mensajes
  addMessage(message);
  // Actualiza el popup en el DOM
  updatePopup();
}