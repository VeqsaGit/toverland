const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

async function queue() {
    const html = await axios.get('https://www.looopings.nl/wachten/toverland');
    const dom = new JSDOM(html.data);

    let toverland = []

    let x = dom.window.document.getElementsByClassName('name')

    for (let i = 0; i < x.length; i++) { 

		let time = dom.window.document.getElementsByClassName('waittime')[i]?.innerHTML

        let waittime = {
			"time":(/^\d+$/.test(time)) ? parseInt(time) : null,
			"status":dom.window.document.getElementsByClassName('state state')[i]?.innerHTML
		}

        toverland[dom.window.document.getElementsByClassName('name')[i].innerHTML] = waittime
    }
    return toverland
}

module.exports.queue = queue;
