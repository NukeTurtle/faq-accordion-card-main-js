const x = document.getElementsByClassName("question");
let i;
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.classList.toggle("special");
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
