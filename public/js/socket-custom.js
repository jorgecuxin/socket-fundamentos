var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');
    
});
//Escuchar
socket.on('disconnect', function(){

    console.log('Perdimos conexion con el servidor');

});
//Los emit son para enviar informacion
socket.emit('enviarMensaje', {

    usuario: 'Jorge',
    mensaje: 'Hola mundo'
},function(resp){
    console.log('Respuesta server:',resp);
});

//Esuchar informacion
socket.on('enviarMensaje',function(mensaje){

    console.log('Servidor',mensaje);
});

