const path= require("path");
const publicPath= path.join(__dirname, "../public");
const express= require("express");
const socketIO= require("socket.io");
const http= require("http");
var app= express();
var server= http.createServer(app);
var io= socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log("new user connected");
    
    socket.emit("newMessage",{
        from: "Admin",
        text: "Welcome to chat app!"
    })
    socket.broadcast.emit("newMessage",{
        from:"Admin",
        text:"a new user has joined the chat"
    })
    
        socket.on("createMessage",(message)=>{
        console.log("createMessage", message);
        io.emit("newMessage", {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })
    
     socket.on('disconnect', ()=>{
                console.log("user has disconnected from server");
            })
})


server.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

 