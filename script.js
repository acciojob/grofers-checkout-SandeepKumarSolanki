// Create the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let totalSum = 0;


  let prices = document.querySelectorAll('.price');
  prices.forEach((priceElement) => {
    let priceValue = parseFloat(priceElement.innerText);
    totalSum += priceValue;
  });

  return totalSum;
};


getSumBtn.addEventListener("click", () => {
	
  let totalPrice = getSum(); 

  let table = document.querySelector('table');
  let newRow = table.insertRow();
  let cell = newRow.insertCell();
  cell.colSpan = 2; 
  cell.innerText = `Total Price: ₹${totalPrice}`; 
});
