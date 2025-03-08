const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.price')
	let totalSum = 0;
	prices.forEach((price)=>{
		totalSum += price;
	})
	return totalSum;
};

getSumBtn.addEventListener("click", getSum);

