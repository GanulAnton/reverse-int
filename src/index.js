module.exports = function reverse (n) {
    var mN = Math.abs(n);
    var sN = mN.toString();
    var rN = sN.split('').reverse().join('');
    var a = Number(rN);
    return (a);
}