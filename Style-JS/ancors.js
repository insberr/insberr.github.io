function pageAncors() {
    if (location.hash) {
        switch (location.hash) {
            case ('#Home'): {
                console.log('Home');
                return navtwotab(event, 'Home');
            }
            case ('#Tasks'): {
                console.log('Tasks');
                return navtwotab(event, 'Tasks');
            }
            case ('#Posts'): {
                console.log('Posts');
                return navtwotab(event, 'Posts');
            }
            case ('#Code'): {
                console.log('Code');
                return navtwotab(event, 'Code');
            }
            case ('#About'): {
                console.log('About');
                return navtwotab(event, 'About');
            }
            case ('#Media'): {
                console.log('Media');
                return navtwotab(event, 'Media');
            }
            case ('#Secret'): {
                return navtwotab(event, 'Secret');
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