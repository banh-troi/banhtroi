let n = Number(prompt("Nhập số n:"));
function kiemTraChanLe(n) {
    if (n%2 == 0) return "Chẵn";
    return "Lẻ";
}
console.log(kiemTraChanLe(n));

function laSoNguyenTo(n) {
    if (n<2) return false;
    for (let i=2; i<= n/2; i++) {
        if (n%i === 0) return false;
    }
    return true;
}
console.log(laSoNguyenTo(n));

console.log("Các số nguyên tố từ 1 đến n là:");
for (let i = 1; i <= n; i++) {
    if (laSoNguyenTo(i)) {
        console.log(i);
    }
}
console.log("Tổng các số chia hết cho 3 hoặc 5 từ 1 đến n là:");

let tong = 0;
for (let i=1;i<=n;i++) {
    if (i%3 === 0 || i%5 === 0) {
        tong+=i;
    }
}
console.log(tong);