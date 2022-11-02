    const bttmDiv = document.querySelector(".bottomDisplay")
    const topDiv = document.querySelector(".topDisplay")
    let bottomDisplay = document.createElement('h1')
    let topDisplay = document.createElement('h1')
    topDiv.appendChild(topDisplay)
    bttmDiv.appendChild(bottomDisplay)

    let currentNum = ''
    let previousNum = ''
    let operator = ''

    const keys = document.querySelectorAll(".key")
    keys.forEach((key)=>{
        key.addEventListener('click', (e)=>{
            handleBttmNumber(e.target.value)
        })
    })
        // forEach function so that for every time you click on a key you get its value paired with it

    const operators = document.querySelectorAll(".operator")

    operators.forEach((btn) =>{
        btn.addEventListener('click', (e)=>{
            handleOperator(e.target.value)
        })
    })
    // forEach function so that for every time you click on an operator you get its value paired with it
    const clearDisplay = document.querySelector(".clear")

    clearDisplay.addEventListener('click',()=>{
        bottomDisplay.innerText = '';
        topDisplay.innerText = ''
        currentNum = ''
        previousNum = ''
    })
        // click event where when you click 'clear' and it removes the visuals and the value of the top and bottom display

    const backSpace = document.querySelector('.delete')

    backSpace.addEventListener('click', () =>{
        bottomDisplay.innerText = currentNum.slice(0, -1)
    })
    // click event where when you click 'delete' , it only takes away the very last number instead of clearing the whole thing

    const equal = document.querySelector('.equals')
    equal.addEventListener('click',calculate)

    // click event so that when you click the equals sign it starts to calculate everything

    function handleBttmNumber(number){
        if(currentNum.length <= 11){
            currentNum += number
            bottomDisplay.textContent = currentNum 
        }
        // makes sure the user doesn't go over 12 "index 11"
        // also displays bottom number
    }

    function handleOperator(op){
        if(previousNum === ""){
            previousNum = currentNum;
            operatorChecker(op)
            // if the previousnum or top display is empty and someone clicks an operator it goes down to the operator checker function, displays an empty display along with an operator but doesn't break the app
            // and this is also how the function starts, the current number you are typing comes the previous value
        }else if(currentNum === ""){
            operatorChecker(op)
            // if the current or bottom display is empty and someone clicks an operator it goes down to the operator checker function, displays an empty display along with an operator but doesn't break the app
            // second function and beyond is ran like this when you click the equals after every problem
        }else{
            calculate()
            operator = op;
            topDisplay.innerText = previousNum + ' ' + operator
            // if you just keep clicking operator after operator the function will still work giving you the solution
        }
    }
    
    function operatorChecker(op) {
        operator = op;
        // this is getting the operator from the function above
        topDisplay.innerText = previousNum + ' ' + operator;
        // this displays the number and the operator the user chose after pressing an operator
        bottomDisplay.innerText = '';
        // after you click an operator this changes to being blank at the bottom so that it is cleared and ready to be typed in again
        currentNum = ""
        // this is the blank string so that when you type in numbers they add on to each other making 1 2 3 into "123" 
    }

        function displayResults(){
            topDisplay.innerText = '';
            operator = '';
            if(previousNum.length <= 11){
                bottomDisplay.innerText = previousNum
                // this shows the answer on the bottom display
            }else{
                bottomDisplay.innerText = previousNum.slice(0,11) + '...'
                // if the answer comes back too long it'll stop at the 11th digit and add ... to the end
            }
            topDisplay.innerText = '';
            operator = '';
            currentNum = ''
        }

        function roundNumber(num){
            return Math.round(num * 1000000) / 1000000
        }

        function calculate(){
            previousNum = Number(previousNum);
            currentNum = Number(currentNum);
            // Number() converts the previous number to a number rather than a string
            if(operator === '+'){
                previousNum += currentNum
            } else if(operator === '-'){
                previousNum  -= currentNum
            } else if(operator === 'x'){
                previousNum *= currentNum
            } else if(operator === '÷'){
                if (currentNum <= 0) {
                    previousNum = "Error";
                    displayResults();
                    return;
                }
                previousNum /= currentNum
            }
            // logic in order to do some simple math, the division one has logic to now allow user to divide a number by zero
            // before we were getting "infinity" as a value 
            previousNum = roundNumber(previousNum);
            // calling function to round numbers to fit inside calculator 100% of the time
            previousNum = previousNum.toString();
            // toString() so that we can "add" on to
            displayResults();
        }