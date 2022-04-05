$(document).ready(function() {
    $('#submit').click(function(event){
        console.log('button clicked!');
        $('#message').html('')
        $('#message').removeClass('warning');

        let name = $("#name");        
        let email = $("#email");
        let phone = $("#phone");

        let required = new Array(name, email, phone);
        let hasError = false;
        for(let i=0; i<required.length; i++)
        {
            required[i].prev().removeClass('warning');
            if(required[i].val() == "")
            {                
                let message = $('#message');
                message.html('Please Fill Out Required Fields')
                message.addClass('warning'); 
                required[i].prev().addClass('warning');    
                hasError = true;           
            }            
        }
        if(!hasError)
        {
            $('#form').fadeOut();
            let h2Tag = $( "#pre-form" ).find( "h2" );
            h2Tag.html('Thanks for your feedback!');
        }
        
     });
})

