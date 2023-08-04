function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    if (fahrenheitInput === "") {
      alert("Please enter a value for Fahrenheit");
      return;
    }

    var fahrenheit = parseFloat(fahrenheitInput);
    var celsius = (fahrenheit - 32) * 5 / 9;

    document.getElementById("result").innerHTML = celsius.toFixed(2) + " &deg;C";
  }

  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius").value;
    if (celsiusInput === "") {
      alert("Please enter a value for Celsius");
      return;
    }

    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " &deg;F";
  }