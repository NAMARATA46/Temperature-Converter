function convertTemperature(){
    const inputTemperature=parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value;
 
    let convertedTemperature;
 
    if(unit=='celsius'){
 
 
       convertedTemperature=(inputTemperature * 9/5) + 32;
       document.getElementById("result").textContent = `${inputTemperature} degrees celsius = ${convertedTemperature} degrees fahrenheit.`;
 
    }
    else if(unit === 'fahrenheit'){
  
       convertedTemperature=(inputTemperature - 32) *5/9;
       document.getElementById("result").textContent = `${inputTemperature} degrees fahrenheit = ${convertedTemperature} degrees celsius.`;
 
    }
    else{
 
       document.getElementById("result").textContent='Please Select a valid unit.';
 
    }
 
 }