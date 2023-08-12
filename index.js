const displayInput = document.getElementById("inputDisplay");
displayInput.style.height = "40px";

const inputs = document.querySelectorAll('button');

let currentValue = '';
// let operation = '';
let result = 0;
let operation = '';


inputs.forEach( element => {
    element.addEventListener('click', function() {
        // hoverOut(element);
        let value = element.textContent;
        displayInput.ariaPlaceholder = '';
        if ('+-x/'.includes(value) || Number(value) || value === '0') {
            displayInput.value += value;
        }

        // console.log(typeof result);

        if (Number(value) || value === '0' || value === '.') {
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

function hoverAnimation(element) {
    element.style.backgroundColor = 'green';
    element.style.color = '#fff';
    element.style.border = 'none';
}

function hoverOut(element) {
    element.style.backgroundColor = '';
    element.style.color = '';
    element.style.border = '';
}

// console.log(inputs[3].style.width = "80px");
displayInput.addEventListener('keydown', function(event) {
    // console.log(event.key);
    inputs.forEach( element => {
        hoverOut(element);
        if (event.key === element.textContent) {
            hoverAnimation(element);
            element.click();
        }
    })
})

displayInput.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        displayInput.value = '';
        currentValue = '';
    }
})

inputs.forEach( element => {
    element.addEventListener('mouseover', () => hoverAnimation(element))
})

inputs.forEach ( element => {
    element.addEventListener('mouseout', () => hoverOut(element))
})

// inputs.forEach( element => {
//     element.addEventListener('mouseover', function() {
//         element.style.backgroundColor = 'green';
//         element.style.color = '#fff';
//         element.style.border = 'none';
//     })
// })

// inputs.forEach( element => {
//     element.addEventListener('mouseout', function() {
//         element.style.backgroundColor = '';
//         element.style.color = '';
//         element.style.border = '';
//     })
// })








