class GuessingGame {
    constructor() {
        this.left;
        this.right;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        console.log(Math.round((this.right + this.left) / 2));
        return Math.round((this.right + this.left) / 2);

    }

    lower() {
        this.right = Math.round((this.right + this.left) / 2);

    }

    greater() {

        this.left = Math.round((this.right + this.left) / 2);
    }
}

module.exports = GuessingGame;


