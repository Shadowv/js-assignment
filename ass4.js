console.log("day4 assignment");
console.log("answer for 1st question");
//fizzbuzz
for(let i=1;i<=100;++i)
{
    if(i%3==0 && i%5==0)
    {
        console.log("fizzbuzz");
    }
    else if(i%3==0)
    {
        console.log("fizz")
    }
    else if(i%5==0)
    {
        console.log("buzz")
    }
    else
    {
        console.log(i)
    }
}



console.log("answer for 2nd question");
//destructure
const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using javaScript"
    }
}
console.log(student.age,student.name);
console.log(student.projects.diceGame);
let {name,age,projects:{diceGame}}=student
console.log(name,age,diceGame);



//creating new array
console.log("answer of 3rd question");
let shoppinglist=['soaps','biscuits','cakes','detergents'];
let shoppingBasket=[...shoppinglist,'ice-cream','paste','drinks']
console.log(shoppinglist);
console.log(shoppingBasket);


console.log('Answer For 4th Question :')
function Calculator()
{
    console.log("For addition press 1 & OK.");
    console.log("For subtraction press 2 & OK.");
    console.log("For multiplication press 3 & OK.");
    console.log("For division press 4 & OK.");
    console.log("For squre root press 5 & OK.");
    console.log("For percentage press 6 & OK.");
    console.log(" ");
    let opt = prompt('Enter The Value As Per The Menu','1');
    
    
    if (opt == '1' ) // For addition 
    {
        let num1 = prompt('Enter 1st Number For Operation', '1');
        let num2 = prompt('Enter 2nd Number For Operation', '1'); 
        return ` Addition of ${num1} and ${num2} is ${+num1 + +num2}.`;
    }
    else if (opt == '2' ) // For subtration
    {
        let num1 = prompt('Enter 1st Number For Operation', '1');
        let num2 = prompt('Enter 2nd Number For Operation', '1');  
        return ` Subtraction of ${num1} and ${num2} is ${+num1 - +num2}.`;
    }
    else if (opt == '3' ) // For multiplication
    {
        let num1 = prompt('Enter 1st Number For Operation', '1');
        let num2 = prompt('Enter 2nd Number For Operation', '1'); 
        return ` Multiplication of ${num1} and ${num2} is ${+num1 * +num2}.`;
    }
    else if (opt == '4' ) // For division
    { 
        let num1 = prompt('Enter 1st Number For Operation', '1');
        let num2 = prompt('Enter 2nd Number For Operation', '1');
        return ` After division of ${num1} and ${num2} quotient is ${+num1 / +num2} and remaider is ${+num1 % +num2}.`;
    }
    else if (opt == '5' ) // For square root
    { 
        let num1 = prompt('Enter 1st Number For Operation', '1');
        return ` Square Root of ${num1} is ${Math.sqrt(+num1)}.`;
    }
    else if (opt == '6' ) // For Percentage
    { 
        let num1 = prompt('Enter 1st Number For Operation', '1');
        return ` ${num1}% is ${+num1/100}.`;
    }
    return `Please Choose Option From Given Menu` 
}
let a=Calculator()
console.log(a)

//sales department
console.log("answer for 5th question ")
function bonus(sales=0) //function for calculating salery
{
    if(sales>=0 && sales<=5000)//reward 2%
    {
        let s=sales*(2/100)
        return 'total reward in hand=$(+s).'
    }
    else if(sales>=5001 && sales<=10000) //reward 5%
    {
        let s=sales*(5/100)
        return 'total reward in hand=$(+s).'
    }
    else if (sales>10001 && sales<=20000)//reward7%
    {
        let s=sales*(7/100)
        return 'total reward in hand=$(+s)'
    }
    else if(sales>20000)//reward10%
    {
        let s=sales*(10/100)
        return 'total rewars in hand=$(+s)'
    }
}
let a=prompt("please enter your sales ")
console.log(bonus(a));

//loop
console.log("Answer for 6th question");
function loop()
{
    let a=0;
    while(a<100){
        console.log(a);
        a=prompt('please enter a number >100',101);
    }
    console.log('loop has ended')
}
loop();//loop call
 
//prime number
console.log('answer For 7th Question :')

function is_prime(n) // Function for cheking 'PRIME NUMBER'  
{ 
      
      var i, flag = true;
      n = parseInt(n);
      if (n==0 || n==1) {
          flag = false;
          
      } 
      for(i = 2; i < n ; i++) 
          if (n % i == 0) { 
              flag = false; 
              break; 
          } 
            
          
      if (flag == true) 
          {
              console.log(n); //if the number is prime it will be printed
          }
      
}
function list_of_prime(n1) // Function for prim
{
    for (let i = 0; i <= n1; i++) {
        is_prime(i); 
        
    }

}
list_of_prime(10);


/*ques 8*/
console.log('answer For 8th Question :')
let ask = (question,yes,no)=>
{

    if (confirm(question))  yes()
    else
     no();
}
ask("Do you agree", function() {alert("You agreed.");}, function() {alert("You canceled the execution");})





