'use strict';

// Write code that stops form from submitting
$(document).ready( function(){
    $('form').submit( function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();

        $.ajax({
            url: '/submit',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer){
                const htmlTags = `
                    <p>Name: ${responseFromServer.name}</p>
                    <p>Location: ${responseFromServer.dojo}</p>
                    <p>Language: ${responseFromServer.language}</p>
                    <p>Comment: ${responseFromServer.comment}</p>
                `
                $('.main-content').html(htmlTags);
            }
        })
        
    })
})