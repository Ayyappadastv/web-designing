// Small client-side handling for the contact form
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', function(e){
    // Let the native POST happen if action is set to Formspree. Show a friendly message instead.
    status.textContent = 'Sending...';
    status.className = '';
    // Optional: intercept and send via fetch if you prefer a JS flow
    // e.preventDefault();
    // var data = new FormData(form);
    // fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' }})
    //  .then(resp => { if (resp.ok) { status.className = 'success'; status.textContent = 'Thanks! I will get back to you.'; form.reset(); } else { status.className = 'error'; status.textContent = 'Error sending message.'; }})
    //  .catch(()=> { status.className = 'error'; status.textContent = 'Network error.'; });
  });
});