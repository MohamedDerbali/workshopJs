// pour déclarer des variables
// const , let , var
if (true) {
  var arr = [];
}
arr.push(2);
arr.push("hello");
arr.push(false);
var obj = {
  age: 25,
};
obj.name = "ali";
arr.push(obj);
var data = "";
arr.map((element, index) => {
  // AltGr + 7
  // if (typeof element == "string") {
  //     console.log(`la case n ${index} est `, element.toUpperCase());
  // } else {
  //     console.log(`la case n ${index} est `, element);
  // }
  if (typeof element == "object") {
    data += `<tr><td>${index}</td><td>{nom:${element.name},age:${element.age}}</td></tr>`;
  } else {
    data += `<tr><td>${index}</td><td>${element}</td></tr>`;
  }
});
document.getElementById("tableRow").innerHTML = data;
function wait() {
  alert("just a second...");
  // la propriété window est optionelle
  window.location.href = "http://www.esprit.tn";
  // window.document
}
var nomById = document.getElementById("nom");
console.log(nomById.value);
var nomByName = document.getElementsByName("nom");
console.log(nomByName[0].value);
// si on veut selectionner par classe on mettre "." si par id "#"
var nomByQuerySelector = document.querySelector(".nom");
console.log(nomByQuerySelector);
var nomByQuerySelectorAll = document.querySelectorAll(".nom");
console.log(nomByQuerySelectorAll[0].value);
var input = document.createElement("input");
document.getElementById("content").appendChild(input);
// document.body.removeChild(nomById);

const sayHello = () => {
   var nom = prompt("donner votre nom");
   alert(`votre nom est ${nom}`)
}
// syntax : action, function callback
var btn = document.getElementById("btn").addEventListener("mouseover", sayHello)
var btn = document.getElementById("btn2").addEventListener("mouseleave", ()=>{
    alert("goodbye...")
})

var btnValidate = document.getElementById("btnValidate").addEventListener("click", (e)=>{
    e.preventDefault();
    var inputs = document.getElementsByClassName("inputs");
    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    let age = parseInt(inputs[2].value);
    let M = document.getElementsByName("gender")[0].checked;
    let F = document.getElementsByName("gender")[0].checked;
    var error = "<p style='color:green'>OK</p>";
    if(firstName.length > 8){
        error = "<p style='color:red'>vous devez donner un nom de longueur inférieur à 8</p>";
    }
    if(lastName.length > 8){
        error = "<p style='color:red'>vous devez donner un prenom de longueur inférieur à 8</p>";
    }
    if(age <= 18 || age >=100){
        error = "<p style='color:red'>vous devez donner un age valide entre 18 et 100</p>";
    }
    if(!M && !F){
      error = "<p style='color:red'>vous devez au min selectionner M ou F</p>";
    }
    document.getElementById("error").innerHTML = error;
})