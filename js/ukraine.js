const CONSOLE_BY_ID = document.getElementById(
    "console"
);

const FLAG_BY_ID = document.getElementById(
    "flag"
);

const SLAVA_BY_ID = document.getElementById(
    "slava"
);

const SLAVA = {
    "latin": "Slava Ukraini",
    "cyrillic": "Слава Україні"
};
let alphabet = "latin";

let motto = ""

let timer = new Timer(delta = 0);

setInterval(async function() {
    if(!timer.resume()) {
        return null;
    }
    let phrase = SLAVA[alphabet];
    
    motto += phrase[motto.length]
    SLAVA_BY_ID.innerText = motto.padding(
        "_", phrase.length
    );
    
    if(motto.length == phrase.length) {
        motto = "";
        if(alphabet == "latin") {
            alphabet = "cyrillic";
        }
        else {
            alphabet = "latin";
        }
        timer = new Timer(delta = 2_000);
    }
}, 250)

function hryvniaMouseIn() {
    CONSOLE_BY_ID.innerText = "₴ ";
}

function hryvniaMouseOut() {
    CONSOLE_BY_ID.innerText = "$ ";
}