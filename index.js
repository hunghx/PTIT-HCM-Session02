// Some (), Every() , Sort()
// some() - kiểm tra xem có ít nhất 1 phần tử thỏa mãn điều kiện nào đó 
// Bài toán : kiểm tra trong mảng có số nào chia hết cho 3 hay ko 
let arr = [3,6,9,12,1,3,5,7,9];
let check = arr.some((element)=>element%3==0) 
console.log(check);
// every - kiểm tra tất cả các phần tử có thỏa mãn điều kiện nào đó không 
// Bài toán : tất cả phần tử trong mảng có chia hết cho 3 không 
let checkDiv3  = arr.every((element)=>element%3==0);
console.log(checkDiv3);


let strings = ["anh", "nam", "huy"]
// sort
console.log(strings.sort((a,b)=>{
    if(a>b){
        return -100;
    }else if (a<b){
        return 100;
    }
    return 0;
})); // tất cả các compareFn đều trả về number 

const products = [
    {id:1, name :"sp1" , price :100 , stock: 100 }, 
    {id:2, name :"sp2" , price :90 , stock: 100 },
    {id:3, name :"sp3" , price :150 , stock: 100 }
];

console.log(products.sort((a,b)=> a.price-b.price)); // a, b là object