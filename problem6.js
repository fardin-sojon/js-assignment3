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


