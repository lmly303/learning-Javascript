const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = `Please enter a valid value for height`
    }
    else if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid value for weight`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi<=18.6){
            results.innerHTML = `You are under Weight. Your BMI is ${bmi}`
        }
        else if(bmi>=24.9){
            results.innerHTML = `You are over Weight. Your BMI is ${bmi}`
        }
        else{
            results.innerHTML = `You are in Normal Range. Your BMI is ${bmi}`
        }
    }
});



// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });