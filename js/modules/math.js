Math.qoute = function(n, d) {
    let qoutient = Math.floor(n / d);
    let remainder = n % d;
    return [qoutient, remainder]
}