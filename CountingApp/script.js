 let value = 0
const num = document.getElementById('Box')
num.innerHTML=value;

function increase() {
    value++;
    num.innerHTML=value;
}
function decrease() {
    value--;
    num.innerHTML=value;
}
function reset() {
    value=0;
    num.innerHTML=value;
}