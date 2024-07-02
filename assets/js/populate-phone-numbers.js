document.addEventListener('DOMContentLoaded', function () {
    // Check if the current page is index.html
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    fetch('assets/data/phone-numbers.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.phone1 a').setAttribute('href', 'tel:' + data.phone1);
            document.querySelector('.phone1 a').innerHTML += data.phone1;

            document.querySelector('.phone2 a').setAttribute('href', 'tel:' + data.phone2);
            document.querySelector('.phone2 a').innerHTML += data.phone2;

            document.querySelector('.phone3 a').setAttribute('href', 'tel:' + data.phone3);
            document.querySelector('.phone3 a').innerHTML += data.phone3;

            if (isIndexPage) {
                // Update phone numbers in the paragraph
                const phoneLinks = document.querySelectorAll('#phone-paragraph a');
                phoneLinks[0].setAttribute('href', 'tel:' + data.phone1);
                phoneLinks[0].innerHTML = '<i class="bi bi-telephone"></i> ' + data.phone1;

                phoneLinks[1].setAttribute('href', 'tel:' + data.phone2);
                phoneLinks[1].innerHTML = '<i class="bi bi-telephone"></i> ' + data.phone2;

                phoneLinks[2].setAttribute('href', 'tel:' + data.phone3);
                phoneLinks[2].innerHTML = '<i class="bi bi-telephone"></i> ' + data.phone3;

                // Update the button with phone number 1
                const bookNowButton = document.querySelector('#book-now-phone-number1');
                bookNowButton.setAttribute('href', 'tel:' + data.phone1);
            }
        })
        .catch(error => console.error('Error fetching the phone numbers:', error));
});