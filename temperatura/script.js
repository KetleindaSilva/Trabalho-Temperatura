document.querySelector("#button-celsius").onclick = function(){
    let celsius = Number (document.querySelector("#celsius").value);
    let fahrenheitInput = document.querySelector("#fahrenheit");
    let kelvinInput = document.querySelector("#kelvin");
    let rankineInput = document.querySelector("#rankine");

    fahrenheitInput.setAttribute("placeholder", +(celsius*(9/5)+32).toFixed(3));
    kelvinInput.setAttribute("placeholder", +(celsius + 273.15).toFixed(3));
    rankineInput.setAttribute("placeholder", +(celsius * (9/5) + 491.67).toFixed(3));
    return false;
}
document.querySelector("#button-fahrenheit").onclick = function(){
    let fahrenheit = Number (document.querySelector("#fahrenheit").value);
    let celsiusInput = document.querySelector("#celsius");
    let kelvinInput = document.querySelector("#kelvin");
    let rankineInput = document.querySelector("#rankine");

    celsiusInput.setAttribute("placeholder", + (fahrenheit - 32)*(5/9).toFixed(5));
    kelvinInput.setAttribute("placeholder", + ((fahrenheit - 32)*(5/9) + 273.15).toFixed(3));
    rankineInput.setAttribute("placeholder", + (fahrenheit + 459.67).toFixed(4));

    return false;
}
document.querySelector("#button-kelvin").onclick = function(){
    let kelvin = Number (document.querySelector("#kelvin").value);
    let celsiusInput = document.querySelector("#celsius");
    let fahrenheitInput = document.querySelector("#fahrenheit");
    let rankineInput = document.querySelector("#rankine");

    celsiusInput.setAttribute("placeholder", + (kelvin - 273.15).toFixed(4));
    fahrenheitInput.setAttribute("placeholder", + ((kelvin - 273.15)*(9/5) + 32).toFixed(4));
    rankineInput.setAttribute("placeholder", + ((kelvin - 273.15)*(1.8000)+491.67).toFixed(4));
    return false;
}
document.querySelector("#button-rankine").onclick = function(){
    let rankine = Number (document.querySelector("#rankine").value);
    let celsiusInput = document.querySelector("#celsius");
    let fahrenheitInput = document.querySelector("#fahrenheit");
    let kelvinInput = document.querySelector("#kelvin");

    celsiusInput.setAttribute("placeholder", + (rankine - 491.67)/(1.8).toFixed(2));
    fahrenheitInput.setAttribute("placeholder", + (rankine - 459.67).toFixed(2));
    kelvinInput.setAttribute("placeholder", + (rankine * (5/9)).toFixed(4));
    return false;
}
document.querySelector("#limpar").onclick = function(){
    location.reload();
}