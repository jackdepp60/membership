
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

// EVENT LISTENERS

btn1.addEventListener("click", function personalInfo(){
    content1.style.left = "0";
    content2.style.left = "80rem";
    content3.style.left = "80rem";
})

btn2.addEventListener("click", function personalInfo(){
    content1.style.left = "80rem";
    content2.style.left = "0";
    content3.style.left = "80rem";
})

btn3.addEventListener("click", function personalInfo(){
    content1.style.left = "80rem";
    content2.style.left = "80rem";
    content3.style.left = "0";
})