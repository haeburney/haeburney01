const toggleBtn=document.querySelector('#bar');
const menu=document.querySelector('nav');

toggleBtn.addEventListener('click',()=>{
  menu.classList.toggle('active');
});
