const budget = document.querySelector('#budget');
const output = document.querySelector('.budget-output');

output.textContent = budget.value;

budget.addEventListener('input', function() {
  output.textContent = budget.value;
});