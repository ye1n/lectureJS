let btn = document.getElementById("btn");
let btnStyle = document.getElementById("btn").style;

function getDisabled(){
    btn.disabled = true;
    btnStyle.cursor = "none";
    btnStyle.background = "initial";
}

function getAbled(){
    btn.disabled = false;
    btnStyle.cursor = "pointer";
    btnStyle.background = "pink";
}

let result;

function getType(){
    result = "Type : " + document.getElementById("btn").type;
} //결과 : button

function getId(){
    result = "Id : " + document.getElementById("btn").id;
} //결과 : btn

function getClass(){
    result = "Class : " + document.getElementById("btn").className;
} //결과 : btn

function getName(){
    result = "Name : " + document.getElementById("btn").name;
} //결과 : btn

function getValue(){
    result = "Value : " + document.getElementById("btn").value;
} //결과 : Disabled