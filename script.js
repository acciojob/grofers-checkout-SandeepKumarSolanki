// Create the button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to get the total sum of the prices
const getSum = () => {
  let totalSum = 0;

  // Get all price elements
  let prices = document.querySelectorAll('.price');

  // Loop through each price and add to the total sum
  prices.forEach((priceElement) => {
    let priceValue = parseFloat(priceElement.innerText); // Convert text to number
    totalSum += priceValue;
  });

  return totalSum;
};

// Add an event listener to the button
getSumBtn.addEventListener("click", () => {
  let totalPrice = getSum(); // Calculate the total sum

  // Insert a new row in the table for the total price
  let table = document.querySelector('table');
  let newRow = table.insertRow();
  let cell = newRow.insertCell();
  cell.colSpan = 2; // To span across both columns
  cell.innerText = `Total Price: ${totalPrice} Rs`; // Display total sum
});
