function pageAncors() {
    if (location.hash) {
        switch (location.hash) {
            case ('#Home'): {
                console.log('Home');
                return document.getElementsByClassName('Home')[0].click();
            }
            case ('#Tasks'): {
                console.log('Tasks');
                return document.getElementsByClassName('Tasks')[0].click();
            }
            case ('#Posts'): {
                console.log('Posts');
                return document.getElementsByClassName('Posts')[0].click();
            }
            case ('#Code'): {
                console.log('Code');
                return document.getElementsByClassName('Code')[0].click();
            }
            case ('#About'): {
                console.log('About');
                return document.getElementsByClassName('About')[0].click();
            }
            case ('#Media'): {
                console.log('Media');
                return document.getElementsByClassName('Media')[0].click();
            }
            case ('#Secret'): {
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