const displayInput = document.getElementById("inputDisplay");
displayInput.style.height = "40px";

const inputs = document.querySelectorAll('button');

let currentValue = '';
// let operation = '';
let result = 0;
let operation = '';


inputs.forEach(function(inputs) {
    inputs.addEventListener('click', function() {
        let value = inputs.textContent;
        displayInput.ariaPlaceholder = '';
        displayInput.value += value;

        console.log(typeof result);

        if (Number(value) || value === '0') {
            currentValue += value;
        } else if ('+-x/'.includes(value)) {
            if (currentValue !== '') {
                result = performOperation(result, currentValue, operation);
                currentValue = '';
                operation = value;
            }
        } else if (value === '=') {
            if (currentValue !== '') {
                result = performOperation(result, currentValue, operation);
                displayInput.value = result;
                currentValue = result.toString();
                operation = '';
            }
        }

        // function set(value) {
        //     if (Number(value) || value === '0') {
        //         number += value;
        //         console.log(`NUMBER: ${number}`);
        //     }
        // }

        // switch(operation) {
        //     case '+':
        //         result += Number(number);
        //         console.log(`Result: ${result}`);
        //         number = '';
        //         break;
            
        //     case '-':
        //         result -= Number(number);
        //         console.log(result);
        //         number = '';
        //         break;
            
        //     case '/':
        //         result /= Number(number);
        //         console.log(result);
        //         number = '';
        //         break;
            
        //     case 'x':
        //         result *= Number(number);
        //         console.log(result);
        //         number = '';
        //         break;
        // }

        // operation = '';


        // if (Number(value) || value === '0') {
        //     number += value;
        //     console.log(`Number: ${number}`);
        // } else if (value === '+') {
        //     operation = value;
        // } 
        
        // if (value === '=') {
        //     displayInput.value = result;
        // }

        // if (operation === '+') {
        //     result = result + Number(value);
        //     number = '';
        // }

        // if (Number(value) || value === '0') {
        //     console.log('True');
        //     number += value;
        //     result = Number(number);
        //     console.log(`Number: ${number}`);
        // } else if (value === '+') {
        //     operation = value;
        // } 
        

        // if (operation === '+') {
        //     result = result + Number(value);
        //     number = '';
        // }

        // if (value === '+') {
        //     operation = value;
        // } else if (value === '-') {
        //     operation = value;
        // }
        
    });
});

function performOperation(result, currentValue, operation) {
    switch (operation) {
        case '+':
            return result + Number(currentValue);
        case '-':
            return result - Number(currentValue);
        case 'x':
            return result * Number(currentValue);
        case '/':
            return result / Number(currentValue);
        default:
            return Number(currentValue);
    }
}

// console.log(inputs[3].style.width = "80px");
displayInput.addEventListener('keydown', function(event) {
    console.log(event.key);
    inputs.forEach(function(inputs) {
        if (event.key === inputs.textContent) {
            inputs.click();
        }
    })
})

displayInput.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        displayInput.value = '';
        currentValue = '';
    }
})








