//object constructor

function student(name, age, email){
    this.name= name;
    this.age= age;
    this.email= email;

}

let student1 = new student("Eduardo",20, "edardo@gmail.com");



console.log(student1);