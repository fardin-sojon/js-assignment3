/** Problem 04 - (Delete / Store) */
var fileName = "result.pdf";
//write your code here
if (fileName.startsWith('#') || fileName.includes('.pdf') || fileName.includes('.docx')) {
    console.log('Store');
}
else {
    console.log('Delete');
}