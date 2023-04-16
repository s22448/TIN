function addParagraph() {
    const textInput = document.getElementById('text');
    const text = textInput.value;
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
    textInput.value = '';
}
