$(document).ready(function () {
    const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
    let searchTerm = 'car';
    let limit = '48';
  

    $.ajax({
        url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
        dataType: 'jsonp',
        method: 'GET',

        
        success: function (data) {
            const source = document.getElementById('etsy-image-template').innerHTML;
            const template = Handlebars.compile(source);
            const html = template(data);
            document.querySelector('.row').innerHTML = html;
        },

        error: function (xhr) {
            console.log('Uh oh! Something went wrong.', xhr.status);
        }
    });
});