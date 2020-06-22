function removeHash () { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}

function pageAncors() {
    if (location.hash) {
        switch (location.hash) {
            case ('#Home'): {
                console.log('Home');
                removeHash()
                return document.getElementsByClassName('Home')[0].click();
            }
            case ('#Tasks'): {
                console.log('Tasks');
                removeHash()
                return document.getElementsByClassName('Tasks')[0].click();
            }
            case ('#Posts'): {
                console.log('Posts');
                removeHash()
                return document.getElementsByClassName('Posts')[0].click();
            }
            case ('#Code'): {
                console.log('Code');
                removeHash()
                return document.getElementsByClassName('Code')[0].click();
            }
            case ('#About'): {
                console.log('About');
                removeHash()
                return document.getElementsByClassName('About')[0].click();
            }
            case ('#Media'): {
                console.log('Media');
                removeHash()
                return document.getElementsByClassName('Media')[0].click();
            }
            case ('#Secret'): {
                removeHash()
                return document.getElementsByClassName('Secret')[0].click();
            }
            default: {
                return document.getElementsByClassName(local.tab)[0].click();
            }
        }
    } else {
        document.getElementsByClassName(local.tab)[0].click();
    }
}

$(window).bind('hashchange', function() {
    pageAncors();
});