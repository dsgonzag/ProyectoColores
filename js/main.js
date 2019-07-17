

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

loadJSON('https://api.myjson.com/bins/bjog3',
         function(data) { 
         console.log(data['arrayColores']);
         for(let obj of data['arrayColores']){
             var colores = document.createElement("img");
             
             var ruta = "img/"+obj['imagen'];
             colores.setAttribute("imagen",ruta);
        
             var celda = document.createElement('td');
              
             
            var fila = document.getElementById("imagen");
            celda.appendChild(colores);
             fila.appendChild(celda);
             
         }
},
         function(xhr) { console.error(xhr); }
);
function allowDrop(ev){
    ev.preventDefault();
  }
  function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
  }
  function drop(ev){
   ev.preventDefault();
   var datos=ev.dataTransfer.getData("Text");
   ev.target.appendChild(document.getElementById(datos));
  }