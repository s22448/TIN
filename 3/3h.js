function findSecondLargestAndSmallest(arr) {
    if(arr.length < 2) {
        return 'Tablica powinna mieć co najmniej 2 elementy';
    }

    let largest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);
    let smallest = Math.min(arr[0], arr[1]);
    let secondSmallest = Math.max(arr[0], arr[1]);

    for(let i = 2; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }

        if(arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if(arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    return {
        secondLargest,
        secondSmallest
    };
}

console.log(findSecondLargestAndSmallest([3, 1, 4, 1, 5, 9, 2, 6, 5]));
