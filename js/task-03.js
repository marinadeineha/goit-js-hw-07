const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function updateNameOutput() {
    const name = nameInput.value.trim();

    if (name === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = name;
    }
};

nameInput.addEventListener('input', updateNameOutput)