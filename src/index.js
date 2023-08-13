module.exports = function toReadable (number) {
    const arrOneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven' , 'eight', 'nine'];
    const arrTwoDigit = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen' , 'eighteen', 'nineteen'];
    const arrTwoDigitWithZero = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    //correct would be "fourty", but in tests "forty"

    let arr = number.toString().split('');

    function twoDigFind (d0, d1) {
        if(d1 == 0) {
            return arrTwoDigitWithZero[Number(d0) - 1]
        } else if(d0 == 1) {
            return arrTwoDigit[Number(d1) - 1]
        } else if(d0 == 0) {
            return arrOneDigit[Number(d1)];
        } else {
            let tenths = arrTwoDigitWithZero[Number(d0) - 1] + " " + arrOneDigit[Number(d1)];
            return tenths;
        }
    }

    if(arr.length === 1) {
        return arrOneDigit[Number(arr[0])];
    } else if (arr.length === 2) {
        return twoDigFind((arr[arr.length - 2]), (arr[arr.length - 1]));
    } else {
        let hundredths = arrOneDigit[Number(arr[0])] + " " + 'hundred';
        let tenths = twoDigFind((arr[arr.length - 2]), (arr[arr.length - 1]));
        if(arr[arr.length - 1] == 0 && arr[arr.length - 2] == 0) return hundredths;
        return hundredths + " " + tenths;
    }
}