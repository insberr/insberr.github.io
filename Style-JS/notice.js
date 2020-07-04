document.getElementById('notice').innerHTML = '<div>It is reccomended that you reset this sites cookies/localstorage. Click <button onclick="noticeReset()">here</button> to reset. <button onclick="noticeClose()">close</button></div>';
function noticeReset() {
    resetSiteData()
}
function noticeClose() {
    document.getElementById('notice').style.display = 'none';
}