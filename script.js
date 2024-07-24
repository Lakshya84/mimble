var butn = document.querySelector(".btn");
var btnn = document.querySelector("button");
var f = 0;
butn.addEventListener("click", function () {
    if (f == 0)
    {
        btnn.innerHTML = "Declined";
        btnn.style.backgroundColor = "red";
        butn.style.backgroundColor = "red";
        btnn.style.color = "cornsilk";
        f = 1;
    }
    else {
        btnn.innerHTML = "Added";
        btnn.style.backgroundColor = "green";
        butn.style.backgroundColor = "green";
        btnn.style.color = "yellow";
        f = 0;
    }
})