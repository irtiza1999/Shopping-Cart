function clickHandleProductChange(product,increase){
    const productInput = document.getElementById(product+"Count");
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (increase == true){
        productNewCount = productCount + 1;
    }
    else if (increase == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    if (product == "case"){
        productTotal = productNewCount * 59;
    }
    else if (product == "phone"){
        productTotal = productNewCount * 1219;
    }
    document.getElementById(product + "Price").innerText= productTotal;
    calculateTotal();
}

function calculateTotal(){
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");
    
    const total = phoneCount * 1219 + caseCount * 59;
    document.getElementById("subTotal").innerText = "$"+ total;
    const tax = Math.ceil(total * 0.1);
    document.getElementById("tax").innerText = "$" +tax;
    const grandTotal = total + tax;
    document.getElementById("totalPrice").innerText = "$"+ grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product+"Count");
    const productCount = parseInt(productInput.value);
    return productCount;
}