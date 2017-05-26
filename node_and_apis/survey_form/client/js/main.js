'use strict';
const http = axios;
// Write code that stops form from submitting
$(document).ready( function(){
    $('form').submit( function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();

        http({
            url: '/submit',
            method: 'post',
            data: dataForServer
        })
        .then(function(responseFromServer){
                const data = responseFromServer.data;
                const htmlTags = `
                    <p>Name: ${data.name}</p>
                    <p>Location: ${data.dojo}</p>
                    <p>Language: ${data.language}</p>
                    <p>Comment: ${data.comment}</p>
                `
                $('.main-content').html(htmlTags)
        })
        .catch(function(err){
            $('.main-content').prepend("<p class='error'>There was a problem</p>")
        })
    
    //     $.ajax({
    //         url: '/submit',
    //         method: 'post',
    //         data: dataForServer,
    //         success: function(responseFromServer){
    //             const htmlTags = `
    //                 <p>Name: ${responseFromServer.name}</p>
    //                 <p>Location: ${responseFromServer.dojo}</p>
    //                 <p>Language: ${responseFromServer.language}</p>
    //                 <p>Comment: ${responseFromServer.comment}</p>
    //             `
    //             $('.main-content').html(htmlTags);
    //         }
    //     })
        
    });
});