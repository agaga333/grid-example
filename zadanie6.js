/**
 * Created by Agnieszka on 2016-10-26.
 */
var input = document.getElementById("my-input"),
addBtn = document.getElementById("add-btn"),
content = document.getElementById("dynamic-content");

console.log(input);
console.log(addBtn);
console.log(content);

content.innerHTML = "hello world";
document.getElementById("addBtn").addEventListener("click", function(){
    alert("Hello World!");
});
