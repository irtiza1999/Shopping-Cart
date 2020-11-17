function clickHandleProductChange(product,increase){
    const productInput = document.getElementById(product+"Count");
    const productCount = parseInt(productInput.value);
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
}