const COUNTDOWN_BY_ID = document.getElementById(
    "countdown"
);

const ROCKET_BY_ID = document.getElementById(
    "rocket"
);

const ROCKET_LANDED_SRC = "img/material/rocket_FILL1_wght700_GRAD200_opsz48.svg";

var landed = false;

const RELEASE_TIMESTAMP = 1_670_198_400_000;

const COUNTDOWN_UNITS = {
        "hour": 3600_000,
        "minute": 60_000,
        "second": 1_000,
};

setInterval(async function() {
    let remaning = RELEASE_TIMESTAMP - Date.now();
    if(remaning < 0 && landed == false) {
        landed = true;
        ROCKET_BY_ID.src = ROCKET_LANDED_SRC;
        ROCKET_BY_ID.style.animationIterationCount = "unset";
    }
    let delta = Math.abs(remaning);

    let qoutient = 0;
    let countdown = []
    for(let key in COUNTDOWN_UNITS) {
        divider = COUNTDOWN_UNITS[key];
        [qoutient, delta] = Math.qoute(
            delta,
            divider
        );
        qoutient = qoutient.toString();
        if(qoutient.length == 1) {
            qoutient = "0" + qoutient;
        }
        countdown.push(qoutient);
    }
    let clock = countdown.join(":")
    if(remaning < 0) {
        clock = "-" + clock;
    }
    COUNTDOWN_BY_ID.innerHTML = clock;
}, 1000)