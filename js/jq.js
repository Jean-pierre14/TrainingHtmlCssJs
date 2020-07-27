$(document).ready(()=>{
    $('#open').click(()=>{
        
        $('#nav-ul').toggle(()=>{
            $('#nav-ul').css("margin-left", '0')
        })
    })
    $('header').click(()=>{
        $('#nav-ul').hide('slow')
    })
    
    $('.black').click(()=>{
        $('#nav-ul').hide('slow')
    })
    
    $('.container').click(()=>{
        $('#nav-ul').hide('slow')
    })
})