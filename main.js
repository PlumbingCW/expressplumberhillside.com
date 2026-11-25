
(function(){
var d=document,ov=d.querySelector('.mob-overlay'),dr=d.querySelector('.mob-drawer'),hb=d.querySelector('.hamburger');
function openM(){dr.classList.add('open');ov.classList.add('open');hb.setAttribute('aria-expanded','true');d.documentElement.style.overflow='hidden';}
function closeM(){dr.classList.remove('open');ov.classList.remove('open');hb.setAttribute('aria-expanded','false');d.documentElement.style.overflow='';}
if(hb&&dr&&ov){hb.addEventListener('click',openM);ov.addEventListener('click',closeM);var cb=d.querySelector('.mob-close');if(cb)cb.addEventListener('click',closeM);
dr.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeM);});
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM();});}
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
var p=b.nextElementSibling,o=b.getAttribute('aria-expanded')==='true';
b.setAttribute('aria-expanded',o?'false':'true');p.style.maxHeight=o?'0px':p.scrollHeight+'px';});});
var fc=d.querySelector('.float-call'),ft=d.querySelector('footer');
if(fc&&ft&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){fc.classList.toggle('hide',e.isIntersecting);});}).observe(ft);}
})();
