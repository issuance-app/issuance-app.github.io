const BODY_BY_ID = document.getElementsByTagName(
    "body"
)[0];

function transitionScroll(progress, id, from, to) {
    [from, to] = [from, to].map(
        parseColor
    );

    let delta = deltaColour(from, to);
    delta = delta.map(
        difference => difference * progress
    );
    
    let color = from;
    let length = (delta.length && color.length);
    for(let i = 0; i < length; i++) {
        color[i] += delta[i]
    }
    return toColor(color);
}

function deltaColour(from, to) {
    let length = (from.length && to.length);

    let list = [];
    for(let i = 0; i < length; i++) {
        let value = to[i] - from[i];
        list.push(value);
    }
    return list;
}

function parseColor(color) {
    color = color.replace(/[# ]/g, "");
    color = splitEvery(color, 2).map(
        hex => parseInt(hex, 16)
    );
    return color;
}

//British alternative
function parseColour(colour) {
    return parseColor(colour);
}

function toColor(color) {
    return "#" + color.map(
        tuple => Math.floor(tuple).toString(16)
    ).join("");
}

//British alternative
function toColour(colour) {
    return toColor(colour);
}
 
function splitEvery(string, nth) {
    let list = [];
    for(let i = 0; i < string.length - 1; i += nth) {
        let every = string.substr(i, nth);
        list.push(every);
    }
    return list;
}