function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
};

var Tab;

function pageAncors() {
    if (location.hash) {
        switch (location.hash) {
            case ('#Home'): {
                Tab = 'Home';
                break;
            }
            case ('#Tasks'): {
                Tab = 'Tasks';
                break;
            }
            case ('#Posts'): {
                Tab = 'Posts';
                break;
            }
            case ('#Code'): {
                Tab = 'Code';
                break;
            }
            case ('#About'): {
                Tab = 'About';
                break;
            }
            case ('#Media'): {
                Tab = 'Media';
                break;
            }
            case ('#Secret'): {
                navtwotab(event, 'Secret')
                return;
            }
            default: {
                Tab = local.tab;
                break;
            }
        }
        console.log(location.hash);
        removeHash();
        document.getElementsByClassName(Tab)[0].click();
    } else {
        document.getElementsByClassName(local.tab)[0].click();
    }
}

$(window).bind('hashchange', function() {
    pageAncors();
});