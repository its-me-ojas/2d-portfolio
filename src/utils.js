export function displayDialouge(text, onDisplayEnd) {
    const dialougeUI = document.getElementById("textbox-container")
    const dialouge = document.getElementById("dialouge")

    dialougeUI.style.display = "block"

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialouge.innerHTML = currentText;
            index++;
            return;
        }
        clearInterval(intervalRef)
    }, 5)

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick() {
        onDisplayEnd()
        dialougeUI.style.display = "none"
        dialouge.innerHTML = ""
        clearInterval(intervalRef)
        closeBtn.removeEventListener("click", onCloseBtnClick)
    }

    closeBtn.addEventListener("click", onCloseBtnClick)
}