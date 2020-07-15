function resetSiteData() {
    var reset = confirm('Are you sure you want to reset the site data?');
    if (!reset) {
        return alert('Data was not reset');
    } else {
        localStorage.clear();
        return alert('Data was reset');
    }
}