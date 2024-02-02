
let nCr=(n,r)=>{
let res=1;
for(let i=0;i<r;i++){
    res*=(n-i);
    res/=(i+1);
}
return parseInt(res);
}

let pascal_triangle=(n)=>{
const ans= [];
for(let i=1;i<=n;i++){
    const temp=[];
    for(let j=1;j<=i;j++){
        temp.push(nCr(i-1,j-1));
    }
    ans.push(temp);
}
return ans;
}
const n=5;
const result=pascal_triangle(n);
for(let i=0;i<result.length;i++){
    console.log(result[i].join(" "));
}


// const res = [];
// for (let i = 0; i <= rowIndex; i++) {  // Fix: Initialize i to 0, and change the loop condition
//     const temporary_store = [];
//     for (let j = 0; j <= i; j++) {  // Fix: Initialize j to 0, and change the loop condition
//         temporary_store.push(nCr(i, j));  // Fix: Change from nCr(i-1, j-1) to nCr(i, j)
//     }
//     res.push(temporary_store);
// }
// return res[rowIndex];