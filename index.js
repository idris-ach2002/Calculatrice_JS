const buttons = document.querySelectorAll('.btn');
console.log(buttons)
const result = document.getElementById('result');

buttons.forEach((b) => {
 b.addEventListener("click", (e) => {
    result.textContent += e.target.id;
 });
});

//const clear = document.getElementById('clear');
//javascript il connait les idHTml
//il reconnait directement la balise(elm dom)
clear.addEventListener("click", () => {
    result.textContent = "";
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});