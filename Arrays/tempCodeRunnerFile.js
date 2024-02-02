const res = [];
// for (let i = 0; i <= rowIndex; i++) {  // Fix: Initialize i to 0, and change the loop condition
//     const temporary_store = [];
//     for (let j = 0; j <= i; j++) {  // Fix: Initialize j to 0, and change the loop condition
//         temporary_store.push(nCr(i, j));  // Fix: Change from nCr(i-1, j-1) to nCr(i, j)
//     }
//     res.push(temporary_store);
// }
// return res[rowIndex];