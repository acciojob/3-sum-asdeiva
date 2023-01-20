function threeSum(arr, target) {
  //your code here
	for (t in arr){
		let sum=0;
		let ans=0;
		sum+=arr[t];
			if(target+1<=sum){
				ans=sum;
			}
	}
	return ans;
}

module.exports = threeSum;
