let Button1 = document.getElementById("B1").addEventListener("click", B1Clicked)
let Button2 = document.getElementById("B2").addEventListener("click", B2Clicked)
let Button3 = document.getElementById("B3").addEventListener("click", B3Clicked)

let Input

function B1Clicked(){
    Input = 1
    console.log(Input)
}

function B2Clicked(){
    Input = 2
    console.log(Input)
}

function B3Clicked(){
    Input = 3
    console.log(Input)
}