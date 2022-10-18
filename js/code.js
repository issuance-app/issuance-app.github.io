const SNIPPET_BY_ID = document.getElementById(
    "snippet"
);

function copy_code() {
    let clipboard = SNIPPET_BY_ID.innerText;
    navigator.clipboard.writeText(
        clipboard
    );
}