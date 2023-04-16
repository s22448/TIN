function validateForm(event) {
    event.preventDefault();

    const inputNum = document.querySelector('input[type="number"]');
    const inputText = document.querySelector('input[type="text"]');

    if (inputNum.value === "" || isNaN(inputNum.value)) {
        alert("Pole numeryczne jest wymagane i musi zawierać liczbę!");
        return false;
    }

    if (inputText.value === "") {
        alert("Pole tekstowe jest wymagane!");
        return false;
    }

    return true;
}

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);
