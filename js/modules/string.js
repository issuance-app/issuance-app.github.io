String.prototype.padding = function(substr, n) {
    if(this.length % n == 0) {
        return this;
    }
    let k = n - (this.length + n) % n;
    return this + new Array(k + 1).join(substr);
}