import { saveToLocalStorage, getNextMessageId } from './storageManager.js';

const chatContainer = document.getElementById('chat');

export function addMessage(text, enabled = true, save = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.setAttribute('data-id', getNextMessageId());

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = enabled;
    checkbox.classList.add('msg-checkbox');

    const textSpan = document.createElement('span');
    textSpan.innerText = text;

    label.appendChild(checkbox);
    label.appendChild(textSpan);
    messageElement.appendChild(label);

    label.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        saveToLocalStorage();
    });

    chatContainer.prepend(messageElement);
    if (save) saveToLocalStorage();
}