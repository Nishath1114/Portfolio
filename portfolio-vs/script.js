const roles = ["Full Stack Developer", "Java Programmer", "Tech Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    const el = document.getElementById("typing");

    if (!deleting && j <= roles[i].length) {
        current = roles[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = roles[i].substring(0, j--);
    }

    el.innerText = current;

    if (j === roles[i].length) deleting = true;
    if (j === 0 && deleting) {
        deleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();