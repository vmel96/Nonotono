const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})


document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      card.querySelector('.front').style.display = 'none';
      card.querySelector('.back').style.display = 'block';
    });
  });
  
  document.querySelectorAll('.back').forEach(back => {
    back.addEventListener('click', function() {
      const card = this.closest('.card');
      card.querySelector('.front').style.display = 'block';
      card.querySelector('.back').style.display = 'none';
    });
  });