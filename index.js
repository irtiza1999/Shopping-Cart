function clickHandleProductChange(increase){
    const caseInput = document.getElementById("caseCount");
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (increase == true){
        caseNewCount = caseCount + 1;
    }
    else if (increase == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    caseTotal = caseNewCount * 59;
    document.getElementById("casePrice").innerText= caseTotal;
}