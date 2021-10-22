function createClass() {

    for (i = 0; i < 2; i++) {
        let input = document.getElementsByClassName("input")[i];

        if (input.value.trim() != "") {
            input.classList.add('has-val');
        } else {
            input.classList.remove('has-val');
        }
    }
}


function createClass2(s) {
    let serial = s - 1;
    let input = document.getElementsByClassName("email-input")[serial];
    if (input.value.trim() != "") {
        input.classList.add('has-val');
    } else {
        input.classList.remove('has-val');
    }
}


function faqAnswer(s) {
    let serial = s - 1;

    for (i = 0; i < 6; i++) {
        var x = document.getElementsByClassName("faq-answer")[i];
        var y = document.getElementsByClassName("faq-icon")[i];

        if (i == serial) {
            if (x.style.display == "block") {
                x.style.display = "none";
                y.style.transform = "rotate(45deg)";

            } else {
                x.style.display = "block";
                y.style.transform = "rotate(0deg)";
            }

        } else {
            x.style.display = "none";
            y.style.transform = "rotate(45deg)";
        }
    }

}