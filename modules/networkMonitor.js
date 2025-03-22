// networkMonitor.js
import popup from './popup/popup.js'; // Importa el módulo popup

// Función para inicializar el monitor de red
export function initializeNetworkMonitor() {
  // Función que se ejecuta cuando cambia el estado de la conexión
  const onConnectionChange = (isOnline) => {
    if (isOnline) {
      popup("La conexión a internet se ha restablecido.");
    } else {
      popup("La conexión a internet se ha perdido.");
    }
  };

  // Escucha el evento "online" (cuando la conexión se restablece)
  window.addEventListener('online', () => onConnectionChange(true));

  // Escucha el evento "offline" (cuando la conexión se pierde)
  window.addEventListener('offline', () => onConnectionChange(false));
}