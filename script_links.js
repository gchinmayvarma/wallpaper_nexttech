let links = {
    "local": "http://localhost:5500/",
    "github": "https://github.com/gchinmayvarma?tab=repositories&type=source",
    "moodle": "https://wsdmoodle.waseda.jp/auth/saml2/login.php?wants=https%3A%2F%2Fwsdmoodle.waseda.jp%2F&idp=fcc52c5d2e034b1803ea1932ae2678b0&passive=off",
    "paint": "https://gchinmayvarma.github.io/sketchoff/",
    "chatgpt": "https://chat.openai.com/",
    "youtube": "https://www.youtube.com/feed/subscriptions",
    "netflix": "https://www.netflix.com/",
    "rock": "https://www.youtube.com/playlist?list=PLHEO1tE3LKpJ6b6MXsMQ8dI5NDJWoSmCT",
}

let div_link = document.createElement('div');
div_link.id = "div_link";
for (let key in links) {
    let a = document.createElement('a');
    let link = document.createTextNode(key);
    a.appendChild(link);
    a.href = links[key];
    div_link.appendChild(a);
}

document.body.appendChild(div_link);