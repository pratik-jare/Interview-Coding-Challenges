// input [1, 2, 3, 4], output  [24, 12, 8, 6] 

// productExceptSelf


function productExceptSelf(nums:number[]) {
  const n = nums.length;
  
  const result: number[] = new Array(n).fill(1)

  let prefixProduct = 1;

  for(let i=0; i<n;i++) {
    result[i]=prefixProduct;
    prefixProduct = prefixProduct * nums[i];
  }
  
  let suffixProduct = 1;

  for(let i=n-1;i>=0;i--) {
    result[i]=result[i]*suffixProduct;
    suffixProduct = suffixProduct *nums[i]
  }
  
  console.log(nums,result);
}

productExceptSelf([1,2,3,4])
