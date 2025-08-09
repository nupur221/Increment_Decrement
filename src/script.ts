let number = 0;
const IncrementButton = document.getElementById("IncrementButton") as HTMLButtonElement;
const DecrementButton = document.getElementById("DecrementButton");
const ResetButton = document.getElementById("ResetButton");
const display = document.getElementById("display");
const overloadMessage = document.getElementById("overloadMessage");
const mxn = 100;
function updateDisplay() {
    if (display) {
        display.textContent = number.toString();
    }            
    if (number >= mxn) {
        if (overloadMessage) {
            overloadMessage.style.display = "block";
        }
        if (IncrementButton) {
            IncrementButton.disabled = true;
        }
    } else {
        if (overloadMessage) {
            overloadMessage.style.display = "none";
        }
        if (IncrementButton) {
            IncrementButton.disabled = false;
        }
    }
}

if (IncrementButton) {
    IncrementButton.addEventListener("click", () => {
        if (number < mxn) {
            number += 2;
            if (number > mxn) {
                number = mxn;
            }
        }
        updateDisplay();
    });
}

if (DecrementButton) {
    DecrementButton.addEventListener("click", () => {
        number = Math.max(0, number - 2);
        updateDisplay();
    });
}

if (ResetButton) {
    ResetButton.addEventListener("click", () => {
        number = 0;
        updateDisplay();
    });
}