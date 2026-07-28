const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.site-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);});
document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.capability-card,.partner-grid article,.proof-grid div').forEach(el=>{el.classList.add('fade-in');observer.observe(el)});
