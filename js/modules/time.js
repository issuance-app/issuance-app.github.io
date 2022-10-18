class Timer {
    constructor(delta) {
        this.until = Date.now() + delta; 
    }

    resume() {
        if(Date.now() > this.until) {
            return true;
        }
        return false;
    }
}

function getYear() {
    return new Date().getFullYear().toString();
}