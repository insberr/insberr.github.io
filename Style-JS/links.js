var links = {
    groups: ['Github', 'Socials'],
    Github: {
        list: ['Profile', 'SpiderBot', 'SpaceCompany Desktop', 'This sites code', 'Idle Universe'],
        url: 'https://',
        info: 'Github lol',
        Profile: {
            url: 'https://github.com/SpiderGamin/',
            text: 'My github profile. I store all of my open souce code here.',
        },
        SpiderBot: {
            url: 'https://github.com/SpiderGamin/SpiderBot-Code',
            text: 'A discord bot im making. Its supposed to do everything. Its under heavy dev at the moment.',
        },
        'SpaceCompany Desktop': {
            url: 'https://github.com/spidergamin/SpaceCompany-Desktop',
            text: 'I am turning a web game, <a href="https://github.com/sparticle999/spacecompany" target="_blank">SpaceCompany</a>, into a desktop app.',
        },
        'This sites code': {
            url: 'https://github.com/spidergamin/SpiderGaming-Website',
            text: 'Take a look at this sites code. You can also help code it, report bugs, and more.',
        },
        'Idle Universe': {
            url: 'https://spidergaming.gitlab.io/Incremental-Universe',
            text: 'Idle Universe (Incremental Universe) is a game me and some friends were making.',
        },
    },
    Socials: {
        list: ['Twitter', 'YouTube', 'Twitch', 'Discord'],
        url: '',
        info: 'Here are all my social medias. I mainly use Twitter for posts, and Discord for chats.',
        Twitter: {
            url: 'https://twitter.com/SpiderGaming0',
            text: 'On my Twitter, I post random crap and complain.'
        },
        YouTube: {
            url: 'https://www.youtube.com/channel/UCO2rlcllQhQdPM8PZkqEAcA',
            text: 'My YouTube channel, I do Minecraft, challenges, vlogs, and much more! I`ts a weird place there, be warned.'
        },
        Twitch: {
            url: 'https://twitch.tv/SpiderGaming00',
            text: 'I dontuse Twitch much, however I livestream Minecraft and coronacation videos here when I do.'
        },
        Discord: {
            url: 'https://discord.gg/gRMbZyU',
            text: 'My Discord server <br><iframe src="https://discordapp.com/widget?id=523826876599500801&theme=dark" width="300" height="300" allowtransparency="true" frameborder="0"></iframe>'
        }
    },
}

linkManager();
function linkManager() {
    var str;
    str = '';
    links.groups.forEach(group => {
        str += `<div><h3><a href="${links[group].url}" target="_blank">${group}</a></h3>${links[group].info}`;
        links[group].list.forEach(item => {
            str += `<br><h5><a href="${links[group][item].url}" target="_blank">${item}</a></h5><p>${links[group][item].text}</p>`;
        })
        str += '<br><br><hr1-solidred></hr1-solidred>'
    });
    str += '</div>'
    document.getElementById('links').innerHTML = str;
}
