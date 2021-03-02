let googleLink = document.querySelector('a');


    googleLink.addEventListener('click', function( event ) {

      event.preventDefault();

      alert('This link is disabled');

    });