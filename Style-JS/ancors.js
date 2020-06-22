function pageAncors() {
    if (location.hash) {
        switch (location.hash) {
            case ('#Home'): {
                console.log('Home');
                return navtwotab(event, 'Home');
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