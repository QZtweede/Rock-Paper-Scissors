let Button1 = document.getElementById("B1").addEventListener("click", B1Clicked)
let Button2 = document.getElementById("B2").addEventListener("click", B2Clicked)
let Button3 = document.getElementById("B3").addEventListener("click", B3Clicked)

let Input
let botOutput
let Result

function B1Clicked(){
    Input = 0
    console.log(Input)
    RandomInputEnemy()
}

function B2Clicked(){
    Input = 1
    console.log(Input)
    RandomInputEnemy()
}

function B3Clicked(){
    Input = 2
    console.log(Input)
    RandomInputEnemy()
}

function RandomInputEnemy(){
    botOutput = Math.floor(Math.random() * 3)
    console.log(botOutput)
    Outcome()
}

function Outcome(){
    if(Input === botOutput){
        Result = "Tie";
        console.log("Result = " + Result)
    }

    if(Input === 0 && botOutput === 1){
        Result = "Lost"
        console.log("Result = " + Result)
    }

    if(Input === 0 && botOutput === 2){
        Result = "Won"
        console.log("Result = " + Result)
    }

    if(Input === 1 && botOutput === 0){
        Result = "Won"
        console.log("Result = " + Result)
    }

    if(Input === 2 && botOutput === 1){
        Result = "Lost"
        console.log("Result = " + Result)
    }

    if(Input === 2 && botOutput === 0){
        Result = "Lost"
        console.log("Result = " + Result)
    }

    if(Input === 2 && botOutput === 1){
        Result = "Won"
        console.log("Result = " + Result)
    }
}