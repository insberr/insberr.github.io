var defaultName = 'Welcome New User!'
var defaultTitle = 'SpiderGamin\'s Website | Gitlab'
var local;
local = JSON.parse(localStorage.getItem('siteData'));
console.log(local)

function onPageLoad() {
    if (local === null) {
        localStorage.clear();
        local = {
            tab: 'Home',
            title: 'SpiderGamin\'s Website | Gitlab',
            name: 'Welcome New User!',
            color: {
                text: 'the default',
                color: null
            }
        }
        document.getElementsByClassName(local.tab)[0].click();

        document.title = local.title;

        document.getElementsByClassName("site-user-name").innerHTML = local.name;

        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";

        // document.getElementsByTagName("body")[0].style.background = local.color.color;
        document.getElementById("thePageColor").innerHTML = local.color.text;

        localStorage.setItem('siteData', JSON.stringify(local));
    } else {
        console.log(local)
        document.getElementsByClassName(local.tab)[0].click();

        document.title = local.title;

        document.getElementsByClassName("site-user-name").innerHTML = local.name;

        document.getElementById("outputSecretCode").innerHTML = "Your translated text will go here";

        document.getElementsByTagName("body")[0].style.background = local.color.color;
        document.getElementById("thePageColor").innerHTML = local.color.text;

        // localStorage.setItem('siteData', JSON.stringify(local));
    }

    
};

if (location.hash == "#secret") {
    window.open("https://spidergaming.gitlab.io/Personal/404.html","_self");
}