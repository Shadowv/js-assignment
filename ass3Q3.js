console.log("marks and grade")
var marks=prompt("please enter your marks");
console.log(marks);
if(marks>=35 && marks<=50)
{
    console.log("marks are ${marks} and grade is C");
}
elseif(marks>=50 && marks<=60)
{
    console.log("marks are ${marks} and grade is B");
}
if(marks>=60 && marks<=70)
{
    console.log("marks are ${marks} and grade is B+");
}
if(marks>=70 && marks<=80)
{
    console.log("marks are ${marks} and grade is A");
}
if(marks>=80 && marks<=90)
{
    console.log("marks are ${marks} and grade is A+");
}
if(marks>=90 && marks<=100)
{
    console.log("marks are ${marks} and grade is 0")
}
else
{
    console.log("Fail");
}