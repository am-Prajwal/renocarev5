const menuBtn=document.querySelector('.menu-btn');
const mobileMenu=document.querySelector('.mobile-menu');
if(menuBtn&&mobileMenu){menuBtn.addEventListener('click',()=>mobileMenu.classList.toggle('open'))}

document.querySelectorAll('[data-whatsapp-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name')||'';
    const project=data.get('project')||'renovation';
    const city=data.get('city')||'';
    const msg=`Hi Renocare, I'm ${name}. I'm interested in a ${project}${city?` in ${city}`:''}. I'd like to book a free in-person estimate.`;
    window.open(`https://wa.me/19056229884?text=${encodeURIComponent(msg)}`,'_blank','noopener');
  });
});

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


// Expand/collapse the floating social-media launcher above WhatsApp.
document.querySelectorAll('.float-social-wrap').forEach(wrap=>{
  const toggle=wrap.querySelector('.social-toggle');
  const links=wrap.querySelectorAll('.social-flyout-link');
  if(!toggle)return;
  const close=()=>{wrap.classList.remove('open');toggle.setAttribute('aria-expanded','false')};
  toggle.addEventListener('click',e=>{
    e.stopPropagation();
    const open=wrap.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  links.forEach(link=>link.addEventListener('click',close));
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
});
