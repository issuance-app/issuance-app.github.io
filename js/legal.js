const LEGAL_BY_ID = document.getElementById(
    "legal"
);

LEGAL_BY_ID.innerHTML = LEGAL_BY_ID.innerHTML.replaceAll(
    "[YEAR]", getYear()
);