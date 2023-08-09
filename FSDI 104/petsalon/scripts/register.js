let PetSalon= {
    name:"The fashion pet",
    tel: "999-999-0000",
    hours:{
        open:"9:00 am",
        close:"6:00 pm",
    },
    address: {
        city: "Queens",
        street: "lincoln street",
        zip: "11420",
    },
    pets: []
     
}
function Pet(name, age, gender, breed, service){
this.name=name;
this.age=age;
this.gender=gender;
this.breed=breed;
this.service=service;
}

function displayPetName(){
    const petsDiv = document.querySelector("#pets");
    for (let i = 0; i<PetSalon.pets.length; i++){
        petsDiv.innerHTML += `
        <li>${PetSalon.pets[i].name}
            </li>`;
    }
}
//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
function register(){
    //get the values
    //create the new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    

    //push the new pet
    PetSalon.pets.push(newPet);
    console.log(PetSalon.pets);
    reset();

}
function init(){
let scooby = new Pet("Scooby", 80, "Male", "Dane");
let marley = new Pet("Marley", 40, "Male", "Terrier", "Grooming");
let ziggy = new Pet("Ziggy", 30, "Male", "Pitbull", "Groooming");
PetSalon.pets.push(scooby, marley, ziggy);
console.log(PetSalon.pets);
}


//create the pet pbjects

window.onload = init;

//Reset forms//
function reset(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}
