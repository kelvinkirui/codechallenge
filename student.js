// variable initialization
//let mark = 30;
let mark = parseInt(prompt('Enter score '));
// it checks if mark is >79
if(mark >79 && mark <100){
    console.log("A");
}// it checks if mark is between 60 and 79 
else if(mark<=79 && mark >=60){
    console.log("B");
}// check if mark is between 49 and 59
else if(mark<=59 && mark >=49){
    console.log("C");
}// check if mark is
else if(mark<=49 && mark >=40){
    console.log("D");
}// when all the conditions are not met the statement to be output
else{
    console.log("F");
}
