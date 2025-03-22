import { addMessage } from './messageHandler.js';
let messageId = parseInt(localStorage.getItem('messageId')) || 0;

export function saveToLocalStorage() {
    const messages = document.querySelectorAll('.message');
    const jsonData = Array.from(messages).map(msg => ({
        id: parseInt(msg.getAttribute('data-id')),
        text: msg.querySelector('span').innerText,
        disabled: !msg.querySelector('input').checked,
    }));

    // Cargar los mensajes existentes del localStorage
    const existingMessages = JSON.parse(localStorage.getItem('savedMessages')) || [];

    // Combinar los mensajes existentes con los nuevos
    const combinedMessages = [...existingMessages, ...jsonData];

    // Eliminar duplicados basados en el id
    const uniqueMessages = combinedMessages.reduce((acc, current) => {
        const x = acc.find(item => item.id === current.id);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    // Ordenar los mensajes por id
    uniqueMessages.sort((a, b) => a.id - b.id);

    // Guardar la lista combinada y sin duplicados en el localStorage
    localStorage.setItem('savedMessages', JSON.stringify(uniqueMessages));
    localStorage.setItem('messageId', messageId);
}

export function loadMessages() {
    const savedMessages = JSON.parse(localStorage.getItem('savedMessages')) || [];
    savedMessages.forEach(msg => {
        addMessage(msg.text, !msg.disabled, false);
    });
}

export function getNextMessageId() {
    return messageId++;
}

export function resetStorage() {
    localStorage.removeItem('savedMessages');
    localStorage.removeItem('messageId');
    messageId = 0;
}