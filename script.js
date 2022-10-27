    const bttmDisplay = document.querySelector(".bottomDisplay")
    const bttmInteger = document.createElement('h1')
    bttmDisplay.appendChild(bttmInteger)


    const keys = document.querySelectorAll(".key")

    // let integers = []
    let test 
    let newArr

    keys.forEach((key) => {key.addEventListener('click',() =>{
        test = bttmInteger.innerText = bttmInteger.innerText + key.value
        console.log(test)
    })})




    // keys.forEach((key) => {key.addEventListener('click',
    //     () =>{
    //         bttmInteger.innerText = key.id
    //         integers.push(key.id)
    //         newArr = integers.map(myFunction)
    //         function myFunction(num) {
    //             return parseInt(num);
    //         }
    //         console.log(newArr)
    //     }
    // )})


    const add = function(array) {
        return array.length
            ? array.reduce((accumulator, nextItem) => accumulator + nextItem)
            : 0;
    };

    const subtract = function(array) {
        return array.length
        ? array.reduce((accumulator, nextItem) => accumulator - nextItem)
        : 0;    };

    const multiply = function(array) {
        return array.length
            ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
            : 0;
    };

    const divide = function(array) {
        return array.length
            ? array.reduce((accumulator, nextItem) => accumulator / nextItem)
            : 0;
    };

    const operate = function(operator, number1,number2){

    }