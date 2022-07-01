document.getElementById("celsius-eingabefeld").addEventListener("input", celsiusUmrechner);
document.getElementById("fahrenheit-eingabefeld").addEventListener("input", fahrenheitUmrechner);
document.getElementById("kelvin-eingabefeld").addEventListener("input", kelvinUmrechner);

function celsiusInFahrenheitUmrechner(celsius){
   return celsius * 1.8 + 32;
}

function celsiusInKelvinUmrechner(celsius){
    return celsius + 273.15;
}

function fahrenheitInCelsiusUmrechner(fahrenheit){
    return (fahrenheit - 32) / 1.8;
}

function fahrenheitInKelvinUmrechner(fahrenheit){
    return (fahrenheit -32) / 1.8 + 273.15;
}

function kelvinInCelsiusUmrechner(kelvin){
    return kelvin - 273.15;
}

function kelvinInFahrenheitUmrechner(kelvin){
    return (kelvin - 273.15) * 1.8 + 32;
}

function celsiusUmrechner(event){
    const celsius = event.target.valueAsNumber;
    document.getElementById("fahrenheit-eingabefeld").value = celsiusInFahrenheitUmrechner(celsius);
    document.getElementById("kelvin-eingabefeld").value = celsiusInKelvinUmrechner(celsius);
}

function fahrenheitUmrechner(event){
    const fahrenheit = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = fahrenheitInCelsiusUmrechner(fahrenheit);
    document.getElementById("kelvin-eingabefeld").value = fahrenheitInKelvinUmrechner(fahrenheit);
}

function kelvinUmrechner(event){
    const kelvin = event.target.valueAsNumber;
    document.getElementById("celsius-eingabefeld").value = kelvinInCelsiusUmrechner(kelvin);
    document.getElementById("fahrenheit-eingabefeld").value = kelvinInFahrenheitUmrechner(kelvin);
}