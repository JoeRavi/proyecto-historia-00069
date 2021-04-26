$(document).ready(function(){

    
//Variable con el contenido
var arr=contenido;

    /*Funciones*/
    function loadInicio()
    {
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        if($('.texto .text').is(':empty'))
        {
            $('.texto .text').append(arr[0]['texto']);
            $('.foto').css("text-align","center");
            $('.foto').append(arr[0]['imagenes']);     
            $('.referencias .ref').append(arr[0]['referencias']);
        }

    }

    //cargar el inicio
    loadInicio();


    $('#inicio').click(function(){
  
       
        loadInicio();
        
    });

    $('#liberalismo').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[1]['texto']);
        $('.foto').append(arr[1]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[1]['referencias']);
        
        
    });

    $('#oligarquia').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[2]['texto']);
        $('.foto').append(arr[2]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[2]['referencias']);
        
        
    });

    $('#peon').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[3]['texto']);
        $('.foto').append(arr[3]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[3]['referencias']);
        
        
    });

    $('#agroexportador').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[4]['texto']);
        $('.foto').append(arr[4]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[4]['referencias']);
        
        
    });

    $('#haciaafuera').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[5]['texto']);
        $('.foto').append(arr[5]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[5]['referencias']);
        
        
    });

    $('#enclave').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[6]['texto']);
        $('.foto').append(arr[6]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[6]['referencias']);
        
        
    });

    $('#patronoro').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[7]['texto']);
        $('.foto').append(arr[7]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[7]['referencias']);
        
        
    });

    $('#olimpo').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[8]['texto']);
        $('.foto').append(arr[8]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[8]['referencias']);
        
        
    });

    $('#identidad').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[9]['texto']);
        $('.foto').append(arr[9]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[9]['referencias']);
        
        
    });
    
    $('#secular').click(function(){
        
        $('.texto .text').empty();
        $('.foto').empty();
        $('.referencias .ref').empty();
        $('.imagen').css('height','600px');
        $('.texto .text').append(arr[10]['texto']);
        $('.foto').append(arr[10]['imagenes']);
        $('.foto img').css('max-height','40%')
        $('.referencias .ref').append(arr[10]['referencias']);
        
        
    });

   





    $('#modelos').click(function(){

      
       
       
        window.location.href="mapa.html";
        
     });

     

});