console.log("assignment day 5");
//first question
console.log("Answer of first question");
function randarr(){
    length_of_arr=prompt('Give a positive number',5);
    let r1=[];
    for (let i = 1; i <= length_of_arr; i++) {
       r1.push(i);
        
    }
    //return arr1
    console.log('1st array is :')
    console.log(r1)
    let odd = r1.filter(el=>el%2!=0);
    let oddCubes = r1.filter(el=>el%2!=0).map(el=>el**3)
    console.log('array of odd number is :')
    console.log(odd)
    console.log('array of cube of odd number is :')
    console.log(oddCubes)
    
}
randarr()

//secound question
console.log("Answer of scound question")
class User {
    constructor(name, age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.Coins = 0;
        this.courses = [];

    }

    static greet(){
    console.log("Hello There");
    }

    login(){
    console.log(`${this.name} has logged in`);
    return this;
    }
    logout(){
    console.log(`${this.name} has logged out`);
    return this;
    }

    getDetails(){
    console.log(`Name is ${this.name}, email is ${this.email}, age is ${this.age}`);
    return this;
    }

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }
    
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    rmoveCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user,course){
        user.courses.splice(course.length);
        console.log(user);
    }
}

//third question
console.log("Answer for third question");

async function getAPIData(url) {
try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
} catch(error) {
    return error;
}
}

function printAPIData(url) {
getAPIData(url).then(result => {
    
    console.log(result );
});
}
let url = "https://jsonplaceholder.typicode.com/todos";
printAPIData(url);
