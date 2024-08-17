function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(temp)) {
        alert('Please enter a valid number.');
        return;
    }

    if (fromUnit === toUnit) {
        result = temp;
    } else {
        switch (fromUnit) {
            case 'Celsius':
                if (toUnit === 'Fahrenheit') {
                    result = (temp * 9/5) + 32;
                } else if (toUnit === 'Kelvin') {
                    result = temp + 273.15;
                }
                break;
            case 'Fahrenheit':
                if (toUnit === 'Celsius') {
                    result = (temp - 32) * 5/9;
                } else if (toUnit === 'Kelvin') {
                    result = ((temp - 32) * 5/9) + 273.15;
                }
                break;
            case 'Kelvin':
                if (toUnit === 'Celsius') {
                    result = temp - 273.15;
                } else if (toUnit === 'Fahrenheit') {
                    result = ((temp - 273.15) * 9/5) + 32;
                }
                 break;
        }
    }

    document.getElementById('result').innerText = `Converted Temperature: ${result.toFixed(2)} ${toUnit}`;
}
