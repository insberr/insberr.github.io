var defaultName = 'Welcome New User!'
var defaultTitle = 'SpiderGamin\'s Website'
var local;
local = JSON.parse(localStorage.getItem('siteData'));
console.log(local)

function onPageLoad() {
    if (local === null) {
        localStorage.clear();
        local = {
            tab: 'Home',
            title: 'SpiderGamin\'s Website',
            name: 'Welcome New User',
            color: {
                text: 'the default',
                color: null
            }
        }
        pageAncors();

        document.title = local.title;

        document.getElementById("site-user-name").innerHTML = local.name;

        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";

        // document.getElementsByTagName("body")[0].style.background = local.color.color;
        document.getElementById("thePageColor").innerHTML = local.color.text;

        localStorage.setItem('siteData', JSON.stringify(local));
    } else {
        console.log(local)
        pageAncors();

        document.title = local.title;

        document.getElementById("site-user-name").innerHTML = local.name;

        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";

        document.getElementsByTagName("body")[0].style.background = local.color.color;
        document.getElementById("thePageColor").innerHTML = local.color.text;

        // localStorage.setItem('siteData', JSON.stringify(local));
    }

    
};

/*
if (location.hash == "#secret") {
    window.open("https://spidergaming.gitlab.io/Personal/404.html","_self");
}
*/