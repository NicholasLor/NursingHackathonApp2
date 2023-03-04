const form = document.querySelector('form');
const ul = document.querySelector('#user-goals');
let goalNumber = 1;
let goals = JSON.parse(localStorage.getItem('goals')) || [];

for (let i = 0; i < goals.length; i++) {
  const li = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Goal';
  li.textContent = `Goal ${goalNumber}: ${goals[i]}`;
  li.appendChild(removeButton);
  li.setAttribute('data-number', goalNumber);
  ul.appendChild(li);
  goalNumber++;

  removeButton.addEventListener('click', function(event) {
    li.remove();
    updateGoals();
  });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const input = document.querySelector('#new-goal');
  const goal = input.value;
  input.value = '';
  
  const li = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove Goal';
  li.textContent = `Goal ${goalNumber}: ${goal}`;
  li.appendChild(removeButton);
  li.setAttribute('data-number', goalNumber);
  ul.appendChild(li);
  
  goals.push(goal);
  updateGoals();

  goalNumber++;
  
  removeButton.addEventListener('click', function(event) {
    li.remove();
    updateGoals();
  });
});

function updateGoals() {
  const liElements = document.querySelectorAll('#user-goals li');
  const savedGoals = [];

  for (let i = 0; i < liElements.length; i++) {
    savedGoals.push(liElements[i].textContent.substring(8));
  }

  localStorage.setItem('goals', JSON.stringify(savedGoals));
}

