document.getElementById("submitBtn").onclick = function(){

    let temp;
    if(document.getElementById("celciusBtn").checked){
  temp = document.getElementById("textbox").value;
  temp = Number(temp);
  temp = toCelcius(temp);
  document.getElementById("tempLabel").innerHTML = temp + "°C";

    }
    else if(document.getElementById("fahrenheitBtn").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
      
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelcius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9/5+32;
}