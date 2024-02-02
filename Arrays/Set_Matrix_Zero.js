var set_matrix_zero= function(matrix){
const n=matrix.length;
const m=matrix[0].length;

let col0=1;
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(matrix[i][j]===0){
            //mark ith row
            matrix[i][0]=0;

            //mark j-ith col
            if(j!==0){
                matrix[0][j]=0;
            }else{
                col0=0;
            }
        }
    }
}
// Step 2: Mark with 0 from (1,1) to (n-1, m-1):
for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
if(matrix[i][j]!==0){
     // Check for col & row:
     if(matrix[i][0]===0 || matrix[0][j]===0){
        matrix[i][j]=0;
     }
}
    }
}

// Step 3: Finally mark the 1st col & then 1st row:
if(matrix[0][0]===0){
    for(let j=0;j<m;j++){
matrix[0][j]=0;
    }
}
if(col0===0){
    for(let i=0;i<n;i++){
        matrix[i][0]=0;
    }    
}
return matrix;
}


const matrix=[
               [0,1,1],
               [1,1,1],
               [1,1,1]
              ];

const ans=set_matrix_zero(matrix);
console.log("Result Matrix is :- ");
for(const i of ans){
console.log(i.join(" "));
}