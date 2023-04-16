function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const scaleSelect = document.getElementById('scale');
    const resultOutput = document.getElementById('result');

    const temperature = parseFloat(temperatureInput.value);
    const scale = scaleSelect.value;

    if (isNaN(temperature)) {
        resultOutput.innerHTML = 'Nieprawidłowa temperatura';
        return;
    }

    let convertedTemperature;

    if (scale === 'Celsius') {
        convertedTemperature = temperature * 9 / 5 + 32;
        resultOutput.innerHTML = `${temperature} &#8451; = ${convertedTemperature} &#8457;`;
    } else if (scale === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultOutput.innerHTML = `${temperature} &#8457; = ${convertedTemperature} &#8451;`;
    }
}
