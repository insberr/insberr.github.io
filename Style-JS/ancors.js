function removeHash() { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
};

var Tab;

function pageAncors() {
    if (location.hash) {
        var tabHash = location.hash;
        console.log(tabHash);
        tabHash = tabHash.charAt(1).toUpperCase() + tabHash.slice(2);
        console.log(tabHash);
        tabHash = tabHash.replace('#','');
        console.log(tabHash);
        removeHash();
        return document.getElementsByClassName(tabHash)[0].click();
    } else {
        document.getElementsByClassName(local.tab)[0].click();
    }
}

$(window).bind('hashchange', function() {
    pageAncors();
});