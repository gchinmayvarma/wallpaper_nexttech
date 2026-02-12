function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PI = Math.PI;
const TWO_PI = Math.PI * 2;

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch((error) => {
//       console.error('Service Worker registration failed:', error);
//     });
// }

// function setFavicon() {
//   let favicon = document.getElementById('favicon');
//   if (navigator.onLine) {
//     favicon.href = '/stuff/online.png'; 
//   } else {
//     favicon.href = '/stuff/offline.png';
//   }
//   setTimeout(setFavicon,300)
// }

// setFavicon();

// function showTime() {
//   let time = new Date();
//   let h = time.getHours();
//   let m = time.getMinutes();
//   let s = time.getSeconds();
//   am_pm = "AM";
//   if (h > 12) {
//     h -= 12;
//     am_pm = "PM";
//   }
//   if (h == 0) {
//     h = 12;
//     am_pm = "AM";
//   }
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;
//   let clock_id_1 = 0;
//   document.getElementsByClassName("time_city")[clock_id_1].innerHTML = "Boston";
//   document.getElementsByClassName("time_h")[clock_id_1].innerHTML = h;
//   document.getElementsByClassName("time_m")[clock_id_1].innerHTML = m;
//   document.getElementsByClassName("time_s")[clock_id_1].innerHTML = s;
//   document.getElementsByClassName("am_pm")[clock_id_1].innerHTML = am_pm;
//   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   document.getElementsByClassName("date")[clock_id_1].innerHTML = weekday[time.getDay()] + ', ' + month[time.getMonth()] + ' ' + time.getDate();

//   let clock_id_2 = 1;
//   // get me tokyo time, skip the date, only time; write it in the way i wrote it on top for the element "clock2" id
//   let time_tokyo = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
//   let time_tokyo_date = new Date(time_tokyo);
//   let h2 = time_tokyo_date.getHours();
//   let m2 = time_tokyo_date.getMinutes();
//   let s2 = time_tokyo_date.getSeconds();
//   am_pm2 = "AM";
//   if (h2 > 12) {
//     h2 -= 12;
//     am_pm2 = "PM";
//   }
//   if (h2 == 0) {
//     h2 = 12;
//     am_pm2 = "AM";
//   }
//   h2 = h2 < 10 ? "0" + h2 : h2;
//   m2 = m2 < 10 ? "0" + m2 : m2;
//   s2 = s2 < 10 ? "0" + s2 : s2;
//   document.getElementsByClassName("time_city_ex")[clock_id_2 - 1].innerHTML = "Tokyo";
//   document.getElementsByClassName("time_h")[clock_id_2].innerHTML = h2;
//   document.getElementsByClassName("time_m")[clock_id_2].innerHTML = m2;
//   // document.getElementsByClassName("time_s")[clock_id_2].innerHTML = s2;
//   // document.getElementsByClassName("am_pm2")[clock_id_2].innerHTML = am_pm2;
//   // document.getElementsByClassName("date")[clock_id_2].innerHTML = weekday[time_tokyo_date.getDay()] + ', ' + month[time_tokyo_date.getMonth()] + ' ' + time_tokyo_date.getDate();
  
  
//   // do the same for london, wrap it in a function, pass in the id of the clock div, for the non first clock divs, use the class time_city_ex instead of time_city


// }



function renderClock(cityName, timeZone, clock_id, showDate = false) {
  let t = timeZone 
    ? new Date(new Date().toLocaleString("en-US", { timeZone }))
    : new Date();

  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();
  let am_pm = "AM";

  if (h > 12) {
    h -= 12;
    am_pm = "PM";
  }
  if (h === 0) {
    h = 12;
    am_pm = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (clock_id === 0) {
    document.getElementsByClassName("time_city")[clock_id].innerHTML = cityName;
  } else {
    document.getElementsByClassName("time_city_ex")[clock_id - 1].innerHTML = cityName;
  }

  document.getElementsByClassName("time_h")[clock_id].innerHTML = h;
  document.getElementsByClassName("time_m")[clock_id].innerHTML = m;
  document.getElementsByClassName("am_pm")[clock_id].innerHTML = am_pm;

  if (showDate) {
    document.getElementsByClassName("time_s")[clock_id].innerHTML = s;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementsByClassName("date")[clock_id].innerHTML =
      weekday[t.getDay()] + ', ' + month[t.getMonth()] + ' ' + t.getDate();
  } else {
    document.getElementsByClassName("time_s")[clock_id].innerHTML = "";
    if (document.getElementsByClassName("date")[clock_id]) {
      document.getElementsByClassName("date")[clock_id].innerHTML = "";
    }
  }
}

function showTime() {
  renderClock("Boston", null, 0, true);
  // renderClock("Boston", "America/New_York", 0, true);
  // renderClock("Tokyo", "Asia/Tokyo", 1, true);
  renderClock("Sydney", "Australia/Sydney", 1, true);
  renderClock("Hyderabad", "Asia/Kolkata", 2, true);
  // renderClock("London", "Europe/London", 4, true);
  renderClock("Los Angeles", "America/Los_Angeles", 3, true);
}





showTime(); setInterval(showTime, 1000);



// get some random quote and display it in the div with id "quote", use the api quotable.io, get a random quote, and display the content and author in the div, format it like "quote content" - author


function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      const quoteDiv = document.getElementById("quote");
      quoteDiv.innerHTML = `"${data.content}" - ${data.author}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
      const quoteDiv = document.getElementById("quote");
      quoteDiv.innerHTML = "connected.";
    });
}

getQuote();
