const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {
//Add your code here
	let totalSum = 0;
	let numRows = document.querySelector('td').childNode;
	for(let i=0 ; i<numRows ; i++){
		let col = document.getElementsByClassName('prices');
		colValue = col.innerText;
		totalSum += colValue;
	}
	return totalSum;
};

getSumBtn.addEventListener("click", getSum);

