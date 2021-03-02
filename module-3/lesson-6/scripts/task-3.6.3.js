let button = document.querySelector('button');



    let alert = function() {
        console.log('Hi');
    }

    // button.addEventListener('mouseover', function() {
    //   alert('Hi');
    // });

    button.addEventListener('mouseover', alert );