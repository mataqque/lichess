socket = io.connect('http://localhost:3000');
$(document).ready(function(){
        $("#click").click(function(){
            let enviar = document.getElementById("valor").value;
            socket.emit("datachess",enviar);
        });
  });

  socket.on("datachess",function(msg){
      document.getElementById("cambiar").textContent = msg;
  })