function equalSums(array) {
    let final = "no";

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        for (let k = array.length - 1; k > i; k--) {
            rightSum += array[k];
        }
        if (leftSum === rightSum) {
            final = i;
            break;
        }
    }

    console.log(final);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);