function romanNumberConv(number, answer="") {
    let numberCopy = number;
    const romans = {
        "units": ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        "tens": ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        "hundreds": ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "XM"],
        "thousand": ["M", "MM", "MMM"]
    };

    const romanLevels = Object.keys(romans);

    for (let power = 3; power >= 0; power--) {
        let value = Math.floor(numberCopy/10**(power));
        if (value > 0) {
            answer += romans[romanLevels[power]][value - 1];
        } else {
            answer += "";
        }
        numberCopy -= value * 10**(power);
    }
    return answer;
}

console.log(romanNumberConv(3549));