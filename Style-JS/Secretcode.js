function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var snew = str.replace(/a/g, "@");
  var snew = snew.replace(/b/g, "/");
  var snew = snew.replace(/c/g, "+");
  document.getElementById("demo").innerHTML = snew;
}