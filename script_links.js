let links = {
  "<br1>1  ": "<br>",
  mail: "https://mail.google.com/mail/u/0/#inbox",
  // "moodle": "https://wsdmoodle.waseda.jp/auth/saml2/login.php?wants=https%3A%2F%2Fwsdmoodle.waseda.jp%2F&idp=fcc52c5d2e034b1803ea1932ae2678b0&passive=off",
  // HAHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAHAHAHAHAHHA
  // HAHAHAHAHAHAHAHAHHHAHAHAHAHAHAHAHAHHAHAHAHAHHA// HAHAHAHAHAHAHAHAHHAHAHAHAHHAAHAHAHAHHA
  maps: "https://www.google.com/maps",
  calendar: "https://calendar.google.com/calendar/u/0/r",
  cgpt: "https://chat.openai.com/",
  perplex: "https://www.perplexity.ai/",
  claude: "https://claude.ai/new",
  gemini: "https://gemini.google.com/",
  grok: "https://grok.com/",
  "<br1>": "<br>",

  github: "https://github.com/gchinmayvarma?tab=repositories&type=source",
  sketchbook: "https://editor.p5js.org/Chinmay101202/sketches",
  p5js: "https://editor.p5js.org/",
  linkedin: "https://www.linkedin.com/feed/",
  gconsole:
  "https://play.google.com/console/u/0/developers/6982748598545948984",
  localhost: "http://localhost:5500/",
  "<br2>": "<br>",

  typewriter: "https://monkeytype.com/",
  market: "https://www.google.com/finance/beta?hl=en",
  docs: "https://docs.google.com/document/u/0/",
  notes: "https://keep.google.com/u/0/",
  board: "https://gchinmayvarma.github.io/sketchoff/",
  translate: "https://translate.google.com/",
  "<br3>": "<br>",
  mods: "https://www.nexusmods.com/skyrimspecialedition/",
  chess: "https://www.chess.com/play/online",
  lexica: "https://lexica.art/",
  maxwell: "https://gchinmayvarma.github.io/mediapipe-Maxwells/",
  clock: "https://gchinmayvarma.github.io/wallpaper_clock/",
  desmos: "https://www.desmos.com/calculator",
  // netflix: "https://www.netflix.com/",
  "<br4>": "<br>",

  cell: "https://www.cell.com/cell/current",
  nature: "https://www.nature.com/nature/reviews-and-analysis",
  science: "https://www.science.org/toc/science/current",
  hf: "https://huggingface.co/papers/",
  pubmed: "https://pubmed.ncbi.nlm.nih.gov/trending/?holding=hulib",
  "<br5>": "<br>",
  
  poetry: "https://www.poetryfoundation.org/poems",
  books: "https://www.gutenberg.org/ebooks/bookshelf/60",
  art: "https://openprocessing.org/discover/#/trending", 

  "<br6>": "<br>",
  // ALL YOU DO IS type SUBS, y ou  FUCKING FUCK
  // PATHTEWTIC SAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  // you lost.
  // you fought, you fell, and your weakness is pathetic
  // you lost, disgusting, alone, depraved. You won on many things - true, and won most that most, but you
  // FUCKING
  // LOST/it
  // pathetic/
  // moron
  // fucking pathetic
  // "youtube": "https://www.youtube.com/feed/subscriptions",
  // "spotify": "https://open.spotify.com/",
  //   playlist1:
  // "https://www.youtube.com/playlist?list=PLHEO1tE3LKpJ6b6MXsMQ8dI5NDJWoSmCT",
  // it keeps getting worse
  // you fucking moron
};

let div_links = []; // Array to hold multiple divs
let div_link = document.createElement("div"); // Initial div
div_link.className = "div_linkbr"; // Assign an ID to the div

for (let key in links) {
  if (links[key] === "<br>") {
    // If the key is "<br>", push the current div to the array and create a new one
    div_links.push(div_link);
    div_link = document.createElement("div"); // Create a new div for the next set of links
    div_link.className = "div_link"; // Assign an ID to the div
    continue;
  }
  let a = document.createElement("a");
  let link = document.createTextNode(":" + key);
  a.appendChild(link);
  a.href = links[key];
  div_link.appendChild(a);
}

// Push the last div into the array if it has content
if (div_link.childNodes.length > 0) {
  div_links.push(div_link);
}

// <script async src="https://cse.google.com/cse.js?cx=2466d42c9a8674fc5">
// </script>
// <div class="gcse-search"></div>
// AIzaSyCsDrBo-hPkhl3uu0zOo2Hs722TuJdtFj4

// const apiKey = 'AIzaSyCsDrBo-hPkhl3uu0zOo2Hs722TuJdtFj4';

// function getAutocomplete(query) {
//     // Make a request to Google Autocomplete API with API key
//     const apiUrl = `https://www.google.com/complete/search?q=${query}&client=chrome&key=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const suggestions = data[1];

//             // Log suggestions to the console
//             console.log("Suggestions:", suggestions);
//         })
//         .catch(error => console.error("Error fetching autocomplete data:", error));
// }
// let input = document.createElement('input');
// input.id = "input_link";
// input.type = "text";
// input.placeholder = " URL://";
// input.autofocus = true;
// input.classList.add("border");
// input.onkeydown = function (e) {
//     getAutocomplete(input.value);
//     if (e.key == "Enter") {
//         let url = input.value;
//         if (url.startsWith("http://") || url.startsWith("https://")) {
//             window.location.href = url;
//         } else {
//             window.location.href = "https://www.google.com/search?q=" + url;
//         }
//     }
// }
// // document.body.appendChild(input);

div_links.forEach(function (div) {
  document.body.appendChild(div);
});
