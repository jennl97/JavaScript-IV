// CODE here for your Lambda Classes
//Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`); 
    }
}

class Instructor extends Person{
    constructor(instAttributes){
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = [studentAttributes.favSubjects];
    }
   listSubjects(favSubjects){
       for (let i = 0; i < this.favSubjects.length; i++){
           console.log(this.favSubjects[i]);
       } 
   }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standup times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

//Objects

// const jason = new Person({
//     name: 'Jason',
//     location: 'Rockford',
//     age: 40,
//    });

// console.log(jason);
// jason.speak();

// const meri = new Instructor({
//     name: 'Meri',
//     location: 'Harvard',
//     age: 45,
//     specialty: 'Computer Programming',
//     favLanguage: 'C#',
//     catchPhrase: `You don't start out good. You only get good with practice`
// });
// console.log(meri);
// meri.speak();
// meri.demo('Javascript');
// meri.grade('Jason', 'C++');

// const jenn = new Student({
//     name: 'Jenn',
//     location: 'Loves Park',
//     age: 43,
//     previousBackground: 'Graphic Artist',
//     className: 'WEBPT07',
//     favSubjects: ['English', 'French', 'JavaScipt']
// });
// console.log(jenn);
// jenn.listSubjects();
// jenn.PRAssignment('JavaScript');
// jenn.sprintChallenge('Javascript');

const tayah = new ProjectManager({
    name: 'Tayah',
    location: 'Loves Park',
    age: 17,
    specialty:'Political Science',
    gradClassName: 'WEBPT281',
    favLanguage: 'HTML',
    catchPhrase: 'Bett',
    favInstructor: 'Dan'
});
console.log(tayah);
tayah.standUp('WEBPT281');
tayah.debugsCode('Jenn', 'JavaScript');
tayah.speak();