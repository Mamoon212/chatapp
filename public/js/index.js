            var socket= io();
            socket.on('connect', function(){
                console.log("connected to server");
      
                socket.emit("createMessage", {
                    to: "baby",
                    text: "hello"
                })
            })
            socket.on('disconnect', function(){
                console.log("disconnected from server");
            })

            socket.on("newMessage", function(message) {
                console.log("new message", message);
            })
            