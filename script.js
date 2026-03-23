function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]); // prompt se string aata hai

        if (num > first) {
            second = first;
            first = num;
        } else if (num < first && num > second) {
            second = num;
        }
    }

    return second;
}
