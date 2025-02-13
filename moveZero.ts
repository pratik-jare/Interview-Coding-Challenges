function moveZero(nums: number[]): void {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    console.log(nums)

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }


    console.log(nums)
    // OR we can use

    nums.fill(0, nonZeroIndex);

    console.log(nums)
}

moveZero([1, 2, 3, 0, 0, 2, 0, 4, 0, 5, 0])
