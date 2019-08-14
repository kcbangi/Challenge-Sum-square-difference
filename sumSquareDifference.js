class SumOfASquare {
    constructor(num) {
        this.num = num;
    }
    sumOfSquares() {
        let result = 0;
        for(let i = 0; i <= this.num; i++) {
            result += Math.pow(i, 2);
        }
        return result;
    }
    squareOfTheSums() {
        let result = 0;
        for(let i = 0; i <= this.num; i++) {
            result += i
        }
        return Math.pow(result, 2);
    }
}
module.exports = {SumOfASquare};