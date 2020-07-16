var taskClass = [
    "current-task-list",
    "later-task-list",
    "plans-web-list",
    "finished-task-list"
];

var currentTasks = [
    "Doing chores and hating life because i dont get to enjoy my summer",
    "Failed - Attempting to relax",
    "Rewriting this sites JavaScript",
    "Learning JavaScript mainly using nodejs",
    "Making a desktop version of a game (More info on the about page)"
];

var laterTasks = [
    "IDK",
    "Make a game using Java"
];

var plansWeb = [
    "Add content to the media tab"
];

var finishedTasks = [
    "Lots of homework",
    "To add more javascript and to make these lists more easy to manage",
    "When you reload the page it will stay on the tab you had selected",
    "Moving Files",
    "Learning HTML and CSS",
    "This websites style",
    "A JavaScript secret code encode/decode thing",
    "Using JavaScript to set the content of the list item and the order",
    "Use JS for the progress bars"
];

/*
var str = '<ul>';
currentTasks.forEach(function(currentTasks) {
    str += '<li>' + currentTasks + '</li>';
});
str += '</ul>';
document.getElementsByClassName(taskClass[0])[0].innerHTML = str;

str = '<ul>';
laterTasks.forEach(function(laterTasks) {
    str += '<li>' + laterTasks + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[1])[0].innerHTML = str;

str = '<ul>';
plansWeb.forEach(function(plansWeb) {
    str += '<li>' + plansWeb + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[2])[0].innerHTML = str;

str = '<ul>';
finishedTasks.forEach(function(finishedTasks) {
    str += '<li>' + finishedTasks + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[3])[0].innerHTML = str;

// Progress bars
var pb = ".05%";
document.getElementsByClassName("progressone")[0].innerHTML = pb;
document.getElementsByClassName("progressone")[1].innerHTML = pb;
document.getElementsByClassName("progressbarone")[0].style.width = pb;
*/

fetch('https://spidergamin.github.io/Style-JS/data.json')
.then(response => response.json())
.then(json => {
    return json;
});

/* About > links */
var links = new Vue({
    el: '#links',
    data: {
        links: []
    },
    created() {
        fetch('https://spidergamin.github.io/Style-JS/data.json')
        .then(response => response.json())
        .then(json => {
            this.links = json.links
        });
    }
})

/* Tasks > Tasks */
var tasks = new Vue({
    el: '#tasks',
    data: {
        tasks: []
    },
    created() {
        fetch('https://spidergamin.github.io/Style-JS/data.json')
        .then(response => response.json())
        .then(json => {
            this.tasks = json.lists.tasks
        });
    }
})
