const btn=document.getElementById('calculate')
const res=document.getElementById('result')
const res1=document.getElementById('result1')
    function validateKey(event) {
        var keyCode = event.which || event.keyCode;
        if (!((keyCode >= 48 && keyCode <= 57) || keyCode === 8 || keyCode === 46)) {
          event.preventDefault();
        }
      }

function bmicalculation(){
    let heightvalue=parseFloat(document.getElementById('height').value)
    let weightvalue=parseFloat(document.getElementById('weight').value)
    if(isNaN(heightvalue) || isNaN(weightvalue)){
        alert('Enter the Height and Weight Properly')
    }else{
        heightvalue=(heightvalue/100);
        let bmix=weightvalue/(heightvalue**2);
        res.innerText=`Your BMI Value is: ${bmix.toFixed(2)}`
        res1.innerText=`Your Condition is: ${bmicondition(bmix)}`
        
        
    }
}
function bmicondition(bmix){
    if(bmix<18.5){
        return 'Underweight'

    }else if (bmix >= 18.5 && bmix < 24.9){
        return 'Normal'
        
    } else {
        return 'Obesity'
        
    }
}


btn.addEventListener("click",bmicalculation)
