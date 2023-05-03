let links = {
    "local": "http://localhost:5500/",
    "mail": "https://mail.google.com/mail/u/0/#inbox",
    "moodle": "https://wsdmoodle.waseda.jp/auth/saml2/login.php?wants=https%3A%2F%2Fwsdmoodle.waseda.jp%2F&idp=fcc52c5d2e034b1803ea1932ae2678b0&passive=off",
    "github": "https://github.com/gchinmayvarma?tab=repositories&type=source",
    "notes": "https://keep.google.com/u/0/",
    "paint": "https://gchinmayvarma.github.io/sketchoff/",
    "cgpt": "https://chat.openai.com/",
    "linkedin": "https://www.linkedin.com/feed/",
    "airt": "https://lexica.art/",
    "mods": "https://www.nexusmods.com/skyrimspecialedition/",
    "chess": "https://www.chess.com/play/online",
    "type": "https://monkeytype.com/",
    "netflix": "https://www.netflix.com/",
    "youtube": "https://www.youtube.com/feed/subscriptions",
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