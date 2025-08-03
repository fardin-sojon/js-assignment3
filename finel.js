/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var divideArea = area / 2

console.log(divideArea);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000) {
    console.log("Laptop");
}
else if (money >= 10000) {
    console.log("Cycle");
}
else {
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here
for (var day = 1; day <= lastDay; day++) {
    if (day % 3 === 0) {
        console.log(day + " - " + "medicine");
    }
    else {
        console.log(day + " - " + "rest");

    }
}


/** Problem 04 - (Delete / Store) */
var fileName = "result.pdf";
//write your code here
if (fileName.startsWith('#') || fileName.includes('.pdf') || fileName.includes('.docx')) {
    console.log('Store');
}
else {
    console.log('Delete');
}


/** Problem 05 - ( PH Email Generator )  */
var student = {
    name: "mewo",
    roll: 96,
    department: "cse"
};
//write your code here
var result = student.name + student.roll + '.' + student.department + '@ph.ac.bd';

console.log(result);

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
// //write your code here

var currentSalary = startingSalary;
for (var year = 1; year <= experience; year++) {
    var increase = currentSalary / 100 * 5;

    currentSalary = currentSalary + increase;
}
console.log(currentSalary.toFixed(2));
