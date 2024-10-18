setInterval(() => {
    let original = document.querySelector("#tfw_word").innerText;
    let elementsList = [...$locWords];
    let inputBox = document.querySelector("#translateFallingWordAnswer");
    let submitBtn = document.querySelector("#translateFallingWordSubmitBtn");

    let result = elementsList.find(element => {
        if (element.word == original || element.translation == original) {
            return element;
        }
    });

    submitBtn.disabled = false;
    if (result.word == original) {
        inputBox.value = result.translation;
    } else if (result.translation == original) {
        inputBox.value = result.word;
    }
    setTimeout(() => {
        submitBtn.click();
    }, 0); 
    console.clear();
}, 4); 

document.querySelector("#correct").remove();
document.querySelector("#incorrect").remove();
document.querySelector("#wocaPointsReward").remove();
