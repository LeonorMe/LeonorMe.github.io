// --- Messages for each day ---
const messages = {
    1:  {icon:"🎄", title:"The Christmas Tree", text:"The tradition of decorating Christmas trees began in Germany in the 1500s.", link:"https://www.youtube.com/watch?v=RMcyfT9RKxs"},
    2:  {icon:"🕯️", title:"Advent Candles", text:"Lighting candles during Advent symbolizes hope, love, joy, and peace.", link:"https://en.wikipedia.org/wiki/Advent"},
    3:  {icon:"❄️", title:"Snowflakes", text:"No two snowflakes are identical—each forms uniquely in the clouds.", link:"https://www.youtube.com/watch?v=ao8B2jgN7Cw"},
    4:  {icon:"🍪", title:"Christmas Cookies", text:"Baking cookies for Christmas goes back to medieval winter solstice rituals.", link:"https://www.history.com/news/christmas-cookies"},
    5:  {icon:"🎁", title:"Gift Giving", text:"Gift-giving reflects the gifts brought by the Three Wise Men.", link:"https://www.youtube.com/watch?v=jJ4E5LrpY-k"},
    6:  {icon:"🧦", title:"Stockings", text:"The story of Christmas stockings likely comes from St. Nicholas helping a poor family.", link:"https://www.whychristmas.com/customs/christmasstockings"},
    7:  {icon:"⭐", title:"The Christmas Star", text:"The Star of Bethlehem guided the Wise Men to Jesus.", link:"https://www.youtube.com/watch?v=R7Zk1EAOMmg"},
    8:  {icon:"🦌", title:"Reindeer", text:"Reindeer were first linked to Christmas in an 1821 poem.", link:"https://www.history.com/news/reindeer-christmas-santa"},
    9:  {icon:"🎶", title:"Caroling", text:"Christmas caroling began as ‘wassailing’—singing to bring good fortune.", link:"https://www.youtube.com/watch?v=E8gmARGvPlI"},
    10: {icon:"🕊️", title:"Peace", text:"Doves symbolize peace and the spirit of Christmas around the world.", link:"https://www.goodhousekeeping.com/holidays/christmas-ideas"},
    11: {icon:"🎅", title:"Santa Claus", text:"Santa Claus evolved from St. Nicholas, a 4th-century Greek bishop.", link:"https://www.youtube.com/watch?v=-F_g9sWE2fA"},
    12: {icon:"🥁", title:"12 Days of Christmas", text:"The 12 days traditionally begin on Dec 25 and end on Jan 6.", link:"https://www.youtube.com/watch?v=oyEyMjdD2uk"},
    13: {icon:"🕯️", title:"Lucia Day", text:"Sweden celebrates Saint Lucia with lights and songs on Dec 13.", link:"https://www.youtube.com/watch?v=mtg8bQbQ4d8"},
    14: {icon:"🌟", title:"Lights", text:"Christmas lights symbolize the light Jesus brings into the world.", link:"https://www.youtube.com/watch?v=3KquFZYi6L0"},
    15: {icon:"⛄", title:"Snowmen", text:"Snowmen have been around since medieval times, appearing in art and festivals.", link:"https://www.smithsonianmag.com/history/brief-history-of-the-snowman-180978188/"},
    16: {icon:"🦉", title:"Winter Wildlife", text:"Animals adapt in amazing ways to survive winter—owls thrive in the cold.", link:"https://www.youtube.com/watch?v=kzCqqZTKxgs"},
    17: {icon:"🎬", title:"Christmas Movies", text:"Christmas films grew popular in the 1940s—‘It’s a Wonderful Life’ being iconic.", link:"https://www.youtube.com/watch?v=ewe4lg8zTYA"},
    18: {icon:"🥛", title:"Milk & Cookies", text:"Kids leave treats for Santa, a tradition popularized in the US in the 1930s.", link:"https://www.countryliving.com/life/a45540/why-we-leave-cookies-santa/"},
    19: {icon:"🔔", title:"Bells", text:"Christmas bells announced the arrival of the season in medieval Europe.", link:"https://www.youtube.com/watch?v=5yY1NrznhVk"},
    20: {icon:"🎀", title:"Ribbons & Bows", text:"Decorative ribbon symbolizes unity and togetherness.", link:"https://www.youtube.com/watch?v=bH5M1s1y7OA"},
    21: {icon:"🍫", title:"Hot Chocolate", text:"Hot chocolate became a winter favorite centuries ago in Europe.", link:"https://www.youtube.com/watch?v=LX0pFUKvE0o"},
    22: {icon:"🎧", title:"Christmas Songs", text:"‘Jingle Bells’ was originally written for Thanksgiving—not Christmas!", link:"https://www.youtube.com/watch?v=3CWJNqyub3o"},
    23: {icon:"🕯️", title:"Light in the Darkness", text:"December traditions celebrate hope during the darkest time of year.", link:"https://www.youtube.com/watch?v=mN7LW0Y00kE"},
    24: {icon:"🔥", title:"Christmas Eve", text:"Families gather worldwide to celebrate joy, warmth, and expectation.", link:"https://www.youtube.com/watch?v=yXQViqx6GMY"},
    25: {icon:"🎉", title:"Merry Christmas!", text:"Wishing you peace, love, and joy today and always!", link:"https://www.youtube.com/watch?v=E8gmARGvPlI"} 
};

// ---- Popup logic ----
const popup = document.getElementById("popup");
const popupIcon = document.getElementById("popup-icon");
const popupText = document.getElementById("popup-text");
const popupTitle = document.getElementById("popup-title");
const popupLink = document.getElementById("popup-link");

document.querySelectorAll("[id^='d']").forEach(day => {
    day.addEventListener("click", () => {
        const n = Number(day.id.slice(1));
        const m = messages[n];

        popupIcon.textContent = m.icon;
        popupTitle.textContent = m.title;
        popupText.textContent = m.text;
        popupLink.href = m.link;

        popup.style.display = "flex";

        startSparkles();
    });
});

document.getElementById("popup-close").onclick = () => popup.style.display = "none";
popup.onclick = e => { if (e.target === popup) popup.style.display = "none"; };


// ---- Popup sparkles ----
const canvas = document.getElementById("sparkle-canvas");
const ctx = canvas.getContext("2d");

function startSparkles() {
    canvas.width = popup.clientWidth;
    canvas.height = popup.clientHeight;

    const particles = [];

    for (let i=0; i<30; i++) {
        particles.push({
            x: canvas.width/2,
            y: canvas.height/2,
            dx: (Math.random() - .5) * 2,
            dy: (Math.random() - .5) * 2,
            size: Math.random()*3+2,
            life: 40 + Math.random()*20
        });
    }

    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            p.size *= .95;
            p.life--;

            ctx.fillStyle = "gold";
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
        });

        if (particles.some(p=>p.life>0)) requestAnimationFrame(animate);
    }
    animate();
}


// ---- OPENING SPARKLE ANIMATION ----
const opening = document.getElementById("opening");
const oCanvas = document.getElementById("opening-sparkles");
const oCtx = oCanvas.getContext("2d");

function openingSparkles() {
    oCanvas.width = window.innerWidth;
    oCanvas.height = window.innerHeight;
    const part = [];

    for (let i = 0; i < 80; i++) {
        part.push({
            x: Math.random() * oCanvas.width,
            y: Math.random() * oCanvas.height,
            size: Math.random() * 3 + 1,
            dy: Math.random() * -1 - 0.2,
            life: 200 + Math.random()*60
        });
    }

    function draw() {
        oCtx.clearRect(0,0,oCanvas.width,oCanvas.height);
        part.forEach(p => {
            p.y += p.dy;
            p.life--;
            oCtx.fillStyle = "gold";
            oCtx.fillRect(p.x,p.y,p.size,p.size);
        });
        if (part.some(p=>p.life>0)) requestAnimationFrame(draw);
    }

    draw();
}
openingSparkles();



