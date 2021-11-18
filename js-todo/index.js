//const nicoInfo = {
//    name:"Nico",
//    age:33,
//    gender:"Male",
//    isHandsome:true,
//    favMovies : ["Along the gods", "LOTR", "Oldboy"],
//    favFood:[
//        {
//            name:"Kimchi",
//            fatty: false
//        },
//        {
//            name:"Cheese burger",
//            fatty: true
//        }
//    ],
//    hateFood:{
//        name:"Kimch",
//        age:50
//    }
//};
//console.log(nicoInfo.hateFood);

//function sayHello(name, age){
//    console.log('Hello ' +name, 'you have', age, 'years of age.');
//};
//
//sayHello("Ryu", 27);

//function sayHello(name, age){
//    console.log(`Hello ${name} you are ${age} years old`);
//}
//
//sayHello("Nicolas", 27);

//const calculator = {
//    plus: function (a, b) {
//        return a + b;
//    }
//};
//
//const plus = calculator.plus(5, 5);
//console.log(plus);

//const title = document.getElementById("title");
//const title = document.querySelector("#title");
//title.innerHTML = "Hi! From JS";
//title.style.color = "red";
//console.dir(document);
//document.title = "I own you now";

//const title = document.querySelector("#title");
//
//function handleResize(a){
//    console.log(a);
//}
//
//window.addEventListener("resize", handleResize);

//const title = document.querySelector("#title");
//
//function handleClick(){
//    title.style.color = "blue";
//}
//
//title.addEventListener("click", handleClick);

//if("10"==10){
//    console.log("hi");
//}else if("10" === "11"){
//    console.log("lalala");
//}else{
//    console.log("ho");
//}

//const age = prompt("How old are you?");
//
//if(age >= 18 && age <= 21){
//    console.log("you can drink but you should not");
//}
//else if(age>21){
//    console.log("go ahead");
//}
//else{
//    console.log("too young");
//}

//const title = document.querySelector("#title");
//
//const BASE_COLOR = "rgb(52, 73, 94)";
//const OTHER_COLOR = "#7f8c8d";
//
//function handleClick(){
//    const currentColor = title.style.color;
//    if(currentColor === BASE_COLOR){
//        title.style.color=OTHER_COLOR;
//    }else{
//        title.style.color = BASE_COLOR;
//    }
//}
//
//function init(){
//    title.style.color = BASE_COLOR;
//    title.addEventListener("click", handleClick);
//}
//
//init();
//
//function handleOffline{
//    console.log("Bye bye");
//}
//function handleOnline{
//    console.log("Welcome back!");
//}
//
//window.addEventListener("offline", handleOffline);
//window.addEventListener("online", handleOnline);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
//    const hasClass = title.classList.contains(CLICKED_CLASS);
//    if(hasClass){
//        title.classList.remove(CLICKED_CLASS);
//    }else{
//        title.classList.add(CLICKED_CLASS);
//    }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();