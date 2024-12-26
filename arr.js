const arr = [];
const col = 3;

const fun = (arr, col)=>{
    const rows = Math.ceil(arr.length/col);

    const arr2 = Array.from({ length: rows }).map((_, index)=>{
        return Array.from({ length: col }).map((_, index2)=>{
            return arr[index + (rows*index2)]
        })
    });
    return arr2.join().trim().split(",");
}

const data = fun([ 'applie', 'banaak', 'guada', 'grape', 'Pineapld' ], 3);
console.log(data)

