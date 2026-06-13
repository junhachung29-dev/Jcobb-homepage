document.querySelectorAll('form[data-demo]').forEach(form=>{form.addEventListener('submit',e=>{e.preventDefault();alert('신청 내용이 접수되었습니다. 실제 운영 시 Google Forms, Tally, Formspree 등으로 연결하세요.');});});
