    const bttmDisplay = document.querySelector(".bottomDisplay")
    const topDisplay = document.querySelector(".topDisplay")
    let bttmInteger = document.createElement('h1')
    let topInteger = document.createElement('h1')
    topDisplay.appendChild(topInteger)
    bttmDisplay.appendChild(bttmInteger)


    const keys = document.querySelectorAll(".key")
    const operators = document.querySelectorAll(".operator")
    let integers = []
    let currentNum = ''
    let previousNum = ''
    let operator = ''

    const clearDisplay = document.querySelector(".clear")
    // clearDisplay.innerText = ""

    const equal = document.querySelector('.equals')
    equal.addEventListener('click',calculate)

    keys.forEach((key)=>{
        key.addEventListener('click', (e)=>{
            handleNumber(e.target.value)
        })
    })

    function handleNumber(number){
        if(currentNum.length <= 11){
            currentNum += number
            bttmInteger.textContent = currentNum 
        }
    }

    operators.forEach((btn) =>{
        btn.addEventListener('click', (e)=>{
            handleOperator(e.target.value)
        })
    })

    function handleOperator(op){
        if(previousNum === ""){
            previousNum = currentNum;
            operatorChecker(op)
        }else if(currentNum === ""){
            operatorChecker(op)
        }else{
            calculate()
            operator = op;
            bttmInteger.textContent = '0'
            topInteger.innerText = previousNum + ' ' + operator
        }
    }
    
    function operatorChecker(op) {
        operator = op;
        topInteger.innerText = previousNum + '' + operator;
        bttmInteger.innerText = '0';
        currentNum = ''
    }

        function displayResults(){
            topInteger.innerText = '';
            operator = '';
            if(previousNum.length <= 11){
                bttmInteger.innerText = previousNum
            }else{
                bttmDisplay.innerText = previousNum.slice(0,11) + '...'
            }
            topInteger.innerText = '';
            operator = '';
            currentNum = ''
        }

        function roundNumber(num){
            return Math.round(num * 1000000) / 1000000
        }

        function calculate(){
            previousNum = Number(previousNum);
            currentNum = Number(currentNum);

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
            previousNum = roundNumber(previousNum);
            previousNum = previousNum.toString();
            displayResults();
            
        }