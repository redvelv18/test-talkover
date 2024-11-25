let personAge = 17;

if (personAge >= 18) {
    console.log("Pilngadīgs!")
}
else {
    console.log("Nepilngadīgs!")
};

let familyArray = ["Ara", "Digs", "Choc"];

for (let i = 0; i <= familyArray.length; i++){
    console.log(i);
    console.log(familyArray[i]);
}

function sayHello(name){
    return `Labdien,  ${name}`
}
console.log (sayHello("Elza"));

function printErrorStatus(code, text){
    return `${code} - ${text}`;
}
console.log(printErrorStatus(502, "Bad Gateway"));


