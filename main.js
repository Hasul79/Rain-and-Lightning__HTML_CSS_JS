function rain(){
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");

    e.classList.add('drop');
    cloud.appendChild(e);
}
setInterval(function(){
 rain()
},1000);

