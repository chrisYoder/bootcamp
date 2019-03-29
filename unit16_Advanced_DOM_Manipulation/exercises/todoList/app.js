// let firstLi = document.querySelector('li');

// firstLi.addEventListener('mouseover', () => firstLi.style.color='green');
// firstLi.addEventListener('mouseout', () => firstLi.style.color='black');

let lis = document.querySelectorAll('li');

lis.forEach(li => {
  li.addEventListener('mouseover', () => li.classList.toggle('selected'));
  li.addEventListener('mouseout', () => li.classList.remove('selected'));
  li.addEventListener('click', () => li.classList.toggle('done'));
})