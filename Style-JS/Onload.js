var defaultName = 'Welcome New User!'
var defaultTitle = 'SpiderGamin\'s Website | Gitlab'
var local;
local = JSON.parse(localStorage.getItem('siteData'));

function onPageLoad() {
    var tab = local.tab || 'activeonload';
    document.getElementsByClassName(tab).click();

    document.title = local.title || defaultTitle;
    local.title = local.title || defaultTitle;

    document.getElementById("site-user-name").innerHTML = local.name || defaultName;
    document.getElementById("afterNameSet").innerHTML = local.name || defaultName;
    local.name = local.name || defaultName;

    document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";

    document.getElementsByTagName("body")[0].style.background = local.color || null;
    document.getElementById("thePageColor").innerHTML = local.color || 'the default';
    local.color = local.color || null;

    localStorage.setItem('siteData', JSON.stringify(local));
};