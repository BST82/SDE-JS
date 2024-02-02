function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateNCr(n, r) {
    const numerator = factorial(n);
    const denominator = factorial(r) * factorial(n - r);
    return numerator / denominator;
}

// Example usage:
const row = 5;  // Replace with the desired row number (r)
const col = 3;  // Replace with the desired column number (c)

const element = calculateNCr(row - 1, col - 1);
console.log(`Element at position (${row},${col}): ${element}`);