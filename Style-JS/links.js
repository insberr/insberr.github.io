

// linkManager();
function linkManager() {
    var str;
    str = '';
    links.groups.forEach(group => {
        str += `<div><h3><a href="${links[group].url}" target="_blank">${group}</a></h3>${links[group].info}`;
        links[group].list.forEach(item => {
            str += `<br><h5><a href="${links[group][item].url}" target="_blank" data-tooltip="Link">${item}</a></h5><p>${links[group][item].text}</p>`;
        })
        str += '<br><br><hr1-solidred></hr1-solidred>'
    });
    str += '</div>'
    document.getElementById('links').innerHTML = str;
}


function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.responseType
    console.log(Httpreq.responseType)         
}

var siteData = fetch('https://spidergamin.github.io/Style-JS/data.json')
.then(response => response.json())
.then(json => {
    console.log(json)
});




/* vue */
var app = new Vue({
    el: '#links',
    data: {
        links: siteData?.links
    }
})

