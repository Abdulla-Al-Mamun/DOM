function radianToDegree(radian) {
    if (typeof radian == "number") {
        let degree = radian * (180 / Math.PI);
        let degrees = degree.toFixed(2);
        return degrees;
    }
    else {
        return " Error Input! Please Give Number type value.";
    }
}
let result = radianToDegree(14);
console.log(result);