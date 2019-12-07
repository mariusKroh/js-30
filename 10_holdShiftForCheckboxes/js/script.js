const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event) {
    // is shift down & checking boxes
    let inBetween = false;
    if (event.shiftKey && this.checked) {
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("starting in between")
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener(
    "click", handleCheck));