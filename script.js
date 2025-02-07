function revealMessage() {
    const message = document.getElementById('message');
    const response = document.getElementById('response');
    message.classList.remove('hidden');
    response.classList.remove('hidden');
}

function handleResponse() {
    const yesCheckbox = document.getElementById('yesCheckbox');
    const noCheckbox = document.getElementById('noCheckbox');
    const yesMessage = document.getElementById('yesMessage');
    const noMessage = document.getElementById('noMessage');

    if (yesCheckbox.checked) {
        yesMessage.classList.remove('hidden');
        noMessage.classList.add('hidden');
        noCheckbox.disabled = true; // Disable the "No" checkbox
    } else if (noCheckbox.checked) {
        noMessage.classList.remove('hidden');
        yesMessage.classList.add('hidden');
        yesCheckbox.disabled = true; // Disable the "Yes" checkbox
    } else {
        yesMessage.classList.add('hidden');
        noMessage.classList.add('hidden');
    }
}