opacityGradient(
    id = "info-archive",
    from = "100%",
    to = "25%"
);

function opacityGradient(id, from, to) {
    [from, to] = [from, to].map(
        parsePercentage
    ); 

    let elementById = document.getElementById(
        id
    );
    text = elementById.innerText;
    text = new Stryle(text);

    opacity = from;
    k = (to - from) / (text.length() - 1);
    for(let i = 0; i < text.length(); i++) {
        text.style(
            "opacity: " + opacity.toString() + "%;",
            [i]
        );
        opacity += k;
    }

    elementById.innerHTML = text.export();
}

function parsePercentage(percentage) {
    return parseInt(
        percentage.toString().replace("%", "")
    );
}