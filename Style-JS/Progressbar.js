var pb = "20%";

function progressBarOne() {
  document.getElementsByClassName("progressone")[0].innerHTML = pb;
  document.getElementsByClassName("progressone")[1].innerHTML = pb;
  document.getElementsByClassName("progressbarone")[0].style.width = pb;
}

progressBarOne();