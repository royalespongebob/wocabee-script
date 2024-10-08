setInterval(() => {
    let original = document.querySelector("#q_word").innerText;
    let elementsList = [...document.querySelectorAll(".locWord")];
    let inputBox = document.querySelector("#translateWordAnswer");
    let submitBtn = document.querySelector("#translateWordSubmitBtn");
        
    let result = elementsList.find(element => {
        if (element.getAttribute("word") == original) {
            return element;
        }
    });
    
    submitBtn.disabled = false;
    inputBox.value = result.getAttribute("translation");
    setTimeout(() => {
        submitBtn.click();
    }, 0); 
    console.clear();
}, 8);

document.querySelector("#correct").remove();
document.querySelector("#incorrect").remove();
document.querySelector("#wocaPointsReward").remove();