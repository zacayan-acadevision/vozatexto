export function exportMessages() {
    const messages = document.querySelectorAll('.message');
    const textOutput = Array.from(messages)
        .map(msg => ({
            id: parseInt(msg.getAttribute('data-id')),
            text: msg.querySelector('span').innerText,
            enabled: msg.querySelector('input').checked,
        }))
        .filter(msg => msg.enabled)
        .sort((a, b) => a.id - b.id)
        .map(msg => msg.text);

    document.getElementById('exportArea').value = textOutput.join('\n');
    document.getElementById('chat').innerHTML = '';
}

export function speakMessages() {
    const text = document.getElementById('exportArea').value;
    if (text.trim()) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'es-AR';
        window.speechSynthesis.speak(speech);
    }
}