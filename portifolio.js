// JavaScript pour gérer les interactions du site

// Validation du formulaire de contact
//document.getElementById('contact_form').addEventListener('submit', function(event) {
   // event.preventDefault(); // Empêche l'envoi par défaut du formulaire
  function ma_fonction() {
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!nom || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    //window.location.href='ok.html';
    return alert('Merci pour votre message, ${nom}! Nous vous répondrons bientôt.');
    
  }
  document.getElementById('contact-form').reset(); // Réinitialise le formulaire
   
//});


