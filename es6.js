// comment nhiều dong
/*
    Tổng quan về ES6
    1. Từ khóa let, const
    2. Template string
    3. Arrow function
    4. Destructuring
    5. Rest Parameter
    6. Spread operator
    7. Vòng lặp for/of
*/

// Từ khóa let, const
var number = 10;
// từ khóa let 
//                     (*) Phạm vi truy cập : trong block scope ( dấu {} ví dụ : if, esle, function, for ) 

// phạm vi của var là global ngoại trừ function (local)
// phạm vi của let là local
// if(true){
//     let check = true;
// }
// console.log(check);

// function check (){
//     var isPrime = true;
// }
// check();
// console.log(isPrime);

//                     (*) khái niệm hoisting - gán giá trị trước khai báo
// let ko cho phép gán giá trị trước khai báo
// var cho phép gán giá trị trước khi khai báo

// a = 10 ; // gán giá trị
// let a;   // khái báo
// console.log(a);

// const : khai báo hằng số - không cho phép gán lại giá trị cho biến
// chú ý: khi khai báo const phải gán giá trị luôn .
const PI = 3.14;
// PI = 10; //lỗi khi gán lại giá trị
console.log(PI);

//  2. Template string
// cho phép khai bào và chỉnh sửa chuỗi 1 cách linh hoạt
let studentName = "Hunghx"
let className = "PTIT-HCM-1"
let str = `heloo chào ${studentName} đến với lớp ${className}`; // nối chuỗi thay dấu +
console.log(str);

//   Arrow function - hàm mũi tên 
//   Cú pháp : const functionName = (params) => {statements}
//   thành phần quan trọng nhất của hàm : params (tham số) và return (giá trị trả về) 

//   bài toán : tạo hàm tính tổng 2 số : tham số (a,b) và return ?
// const sum = (a,b) => {
//    return a + b;
// }

// rút gọn
const print = a => Math.pow(a, 2)   // nếu chỉ có 1 tham số  thì ko cần dấu ()
// nếu khối lệnh chỉ có 1 câu lệnh return thì có thể bỏ dấu block scope và từ 
// khóa return 
console.log(print(10))

// Destructoring - phá vỡ cấu trúc áp dụng cho : array và object 
// array 
let arrInteger = [1, 2, 3, 4, 5];
// let [a,b] = arrInteger;
// console.log(a,b);
// object
let student = {
    "id": 1,
    name: "khánh sky",
    age: 18
}
let { name, age } = student;
console.log(name, age);

//   Rest Parameter -  tham số còn lại 
// tính tổng n số chưa biết 
const sum = (...param) => {  // 1,2,3,...
    // param là 1 array
    return param.reduce((temp, a) => temp + a, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
// chú ý : kết hợp với destructoring
let [a, b, ...param] = arrInteger;
console.log(param);

//  Spread operator : nhóm lại thành cấu trúc : array và object
let newArray = [2000, 1000, ...arrInteger, 100, 200]

let arrayInt = [1, 2, 3, 4, 5];
let insertArrray = [100, 99, 98];
// index = 2;
let arrA = arrayInt.slice(0, 2);
let arrB = arrayInt.slice(2, arrayInt.length)
console.log(arrA, arrB);

let result = [...arrA, ...insertArrray, ...arrB]
console.log(result);


// thêm hoặc chỉnh sửa thuộc tính của object

student = { ...student, address: "nam ok" }
console.log(student);

// for ... of : duyệt các phần tử trong mảng 
for(let key of result) {
  console.log(key); // duyệt theo giá trị của từng phần tử trong mảng
}

// ko cho phép duyệt đối tượng 
// sử dụng for in
for (const key in student) {
    console.log(key);
    // ?? gia trị của key
    console.log(student[key]);
}
// let obj = {
//     "mã sinh viên": 1,
//     "tên sinh viên" : "hung",
//     "tuổi": 18
// }
// console.log(obj["mã sinh viên"]);





