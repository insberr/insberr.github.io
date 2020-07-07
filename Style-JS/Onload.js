var local;
local = JSON.parse(localStorage.getItem('siteData'));
var cookies;
function onPageLoad() {
    if (local === null) {
        localStorage.clear();
        local = {
            tab: 'Home',
        }
        cookies = confirm('My website uses cookies, click "ok" to allow. Click "cancel" to deny');
        if (cookies) {
            localStorage.setItem('siteData', JSON.stringify(local));
        }
        pageAncors();
        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    } else {
        cookies = true;
        pageAncors();
        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";
    }


};