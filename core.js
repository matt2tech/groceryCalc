function add(num1, num2) {
    tax = parseFloat(document.getElementById("tax").value);
    console.log(`Num1: ${num1}\nNum2: ${num2}\nTax: ${tax}`)
    total = parseInt(num1) + parseInt(num2);

    total += (total * tax);
    
    document.getElementById("total").value=total;
}