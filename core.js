num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;

document.addEventListener("keypress", function() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
});

function add() {
    console.log("Starting add")
    tax = parseFloat(document.getElementById("tax").value);
    console.log(`Num1: ${num1}\nNum2: ${num2}\nTax: ${tax}`)
    total = parseInt(num1) + parseInt(num2);

    total += (total * tax);
    
    document.getElementById("total").value=total;
}