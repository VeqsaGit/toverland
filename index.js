const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

async function queue() {
    const html = await axios.get('https://www.looopings.nl/wachten/toverland');
    const dom = new JSDOM(html.data);

    let now = new Date().getTime()

    let toverlandtemp = {
        [now]: {
        }
    }

    let x = dom.window.document.getElementsByClassName('name')

    for (let i = 0; i < x.length; i++) { 

        let waittime = (/^\d+$/.test(dom.window.document.getElementsByClassName('waittime')[i]?.innerHTML)) ? parseInt(dom.window.document.getElementsByClassName('waittime')[i]?.innerHTML) : 0 

        toverlandtemp[now][dom.window.document.getElementsByClassName('name')[i].innerHTML] = waittime
    }
    return toverlandtemp
}

module.exports.toverland = queue;
