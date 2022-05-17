function random(min, max) {
    return Math.random() * (max - min) + min;
}
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PI = Math.PI;
const TWO_PI = Math.PI * 2;

const image_paths = ["aaa.gif", "aaaaaa.gif", "gifgif.gif", "alto.gif", "source.gif", "round.gif", "testaltenor.gif"]
function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    am_pm = "AM";
    if (h > 12) {
        h -= 12;
        am_pm = "PM";
    }
    if (h == 0) {
        h = 12;
        am_pm = "AM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById("time_h").innerHTML = h;
    document.getElementById("time_m").innerHTML = m;
    document.getElementById("time_s").innerHTML = s;
    document.getElementById("am_pm").innerHTML = am_pm;
}
showTime(); setInterval(showTime, 1000);

let div_particles = document.getElementById("particles");
let particles = document.getElementsByClassName("particle");
let particle_count = 0;

function particle_make_image() {
    let particle = document.createElement("img");
    particle.className = "particle";
    particle.src = `stuff/${image_paths[Math.floor(random(0, image_paths.length))]}`;
    particle.custom = {};
    particle.custom.x = Math.floor(Math.random() * 100);
    particle.custom.y = Math.floor(Math.random() * 100);
    particle.custom.dx = Math.random() * 0.1 - 0.05;
    particle.custom.dy = Math.random() * 0.1;
    particle.custom.theta = random(0, TWO_PI);
    particle.custom.dtheta = random(-1, 1) / 40;
    particle.custom.s = 0;
    particle.custom.ds = 0;
    particle.custom.dds = 0;
    particle.custom.ddds = random(0, 0.0000005);
    particle.style.transform = "scale(0)";
    div_particles.appendChild(particle);
    particle_count++;

    setTimeout(particle_make_image, random(2000, 10000));
}

function particles_work() {
    for (let i = 0; i < particle_count; i++) {
        particles[i].custom.x += particles[i].custom.dx;
        particles[i].custom.y += particles[i].custom.dy;
        particles[i].custom.theta += particles[i].custom.dtheta;
        particles[i].custom.s += particles[i].custom.ds;
        particles[i].custom.ds += particles[i].custom.dds;
        particles[i].custom.dds += particles[i].custom.ddds;
        if (particles[i].custom.s > 1) {
            particles[i].custom.s = 1;
            particles[i].custom.ds = particles[i].custom.dds = 0;
        }
        particles[i].style.left = particles[i].custom.x + "%";
        particles[i].style.top = particles[i].custom.y + "%";
        particles[i].style.transform = `translate(-50%, -50%) rotate(${particles[i].custom.theta}rad) scale(${particles[i].custom.s})`;
    }
}
setTimeout(particle_make_image, random(10000));
setInterval(particles_work, 1000 / 60);