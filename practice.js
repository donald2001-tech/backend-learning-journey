let student = {
    name: "Donald",
    age: 29,
    isEnrolled: true,
    isStudying: ["Maths", "English", "Physics"]
};

//function called introduce student that takes in a student object and logs the name, age and subjects they are studying

function introduceStudent(student) {
    console.log(student.name + " is "  + student.age + " years old and is studying " + student.isStudying[0] + "," + student.isStudying[1] + " and " + student.isStudying[2]);
}

introduceStudent(student);

//funtion called subjectCount that takes student objet as a parameter & returns the number of subjet
function subjectCount(student){
    return student.isStudying.length;
}


let count = subjectCount(student);
console.log(count);


let age = 20;

if (age>=18) {
    console.log("You're and adult");
} else {
    console.log("You're a minor");
};
