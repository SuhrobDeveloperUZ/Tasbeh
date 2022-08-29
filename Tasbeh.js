document.querySelector('.tugma').addEventListener('click', function(){
let ekran = document.querySelector('.ekran');
console.log(parseInt(ekran.value));
ekran.value = parseInt(ekran.value) + 1
});
document.querySelector('.tugma2').addEventListener('click', function(){
document.querySelector('.ekran').value = 0;
console.clear()
console.log('Dasturchi: Obitov Suhrob')
});
console.log('Dasturchi: Obitov Suhrob')