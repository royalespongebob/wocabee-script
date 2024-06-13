setInterval(() => {
    let original = document.querySelector("#tfw_word").innerText;
    let elementsList [...$locWords];
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
    }, 0); // make sure this value is smaller than the one under
    console.clear();
}, 8); // change value in ms to call function in a certain interval