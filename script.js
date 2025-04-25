// script.js
// Comment submission
document.querySelectorAll('.comment-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name = form.querySelector('input').value.trim();
      const msg  = form.querySelector('textarea').value.trim();
      if(!name||!msg) return;
      const p = document.createElement('p');
      p.innerHTML = `<strong>${name}</strong>: ${msg}`;
      form.parentElement.querySelector('.comment-list').appendChild(p);
      form.reset();
    });
  });
  
  // Share pop-ups
  document.querySelectorAll('.share-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      window.open(btn.href,'_blank','toolbar=0,status=0,width=600,height=400');
    });
  });
  
  // Like buttons
  document.querySelectorAll('.like-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const span = btn.nextElementSibling;
      span.textContent = parseInt(span.textContent)+1;
    });
  });
  