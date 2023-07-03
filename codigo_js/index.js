var farmacias = [
    {nombre : "Farmacia Audifarm",
    domicilio : "Av.Belgrano 3802",
    localidad : "CABA",
    whatsapp : 1132088472,
    envioDomicilio : "Coordinar entrega en red de farmacias sin cargo"},

    {nombre : "Farmacia Scienza - Puyrredon",
    domicilio : "Av.Puyrredon 1460",
    localidad : "CABA",
    telefono : 1155547975,
    whatsapp : 1163999506,
    envioDomicilio : "Envios a domicilio"},

    {nombre : "Farmacia Scienza - Pellegrini",
    domicilio : "C.Pellegrini 163",
    localidad : "CABA",
    telefono : 1155547975,
    whatsapp : 1163999506,
    envioDomicilio : "Envios a domicilio"},

    {nombre : "Farmacia Farmafé",
    domicilio : "Av.Rivadavia 4399",
    localidad : "CABA"},
    
    {nombre : "Farmacia Rissi",
    domicilio : "H.Yrigoyen 8955",
    localidad : "Lomas de Zamora"},

    {nombre : "Farmacia Rucci",
    domicilio : "San Juan 497 - Rosario",
    localidad : "Santa Fe"},  

    {nombre: "Farmacia Libertad",
     domicilio : "Unanue 514 - Santa Rosa",
     localidad : "La Pampa"},  

    {nombre : "Farmacia Luján",
    domicilio : "Pueyrredón 1494",
    localidad : "Salta"},      

    {nombre : "Farmacia Farmarket",
    domicilio : "Mendoza 386 - S.M. Tucumán",
    localidad : "Tucumán"}
]

function agregarFarmacias() {
    var listado = farmacias.map(function(farmacia, index) {
        var telefono = farmacia.telefono ? `<p><a href="tel:+54 ${farmacia.telefono}" class="farmacias_numero">Telefono: ${farmacia.telefono} <br> </a></p>` : "";
        var envio = farmacia.envioDomicilio ? `<p class="farmacias_envio">${farmacia.envioDomicilio} <br> </p>` : "";
        var whatsapp = farmacia.whatsapp ? `<p> <a href="https://api.whatsapp.com/send?phone=+54${farmacia.whatsapp}" class="farmacias_numero">Whatsapp: ${farmacia.whatsapp}<br> </a></p>` : "";
        var cardStyle = (farmacia.telefono || farmacia.whatsapp || farmacia.envioDomicilio) ? "primero" : "segundo";
        var localidad = (farmacia.localidad == "CABA" || farmacia.localidad == "Lomas de Zamora") ? "filtro_uno" : "filtro_dos";
        
        if(index == 0) {
            return `<div class="filterDiv farma ${cardStyle} ${localidad} principal">
                        <div class="text-center">
                            <h5 class="nombre_farmacias audifarm">${farmacia.nombre}</h5>
                            <div class="card-line primer"></div>
                            <p class="farmacias_domicilio audifarm">${farmacia.domicilio} - ${farmacia.localidad}</p>
                            <p class="farmacias_envio audifarm"> ${farmacia.envioDomicilio} </p> 
                            <p> <a href="https://api.whatsapp.com/send?phone=+541132088472" class="farmacias_numero prm"> Whatsapp: ${farmacia.whatsapp}<br></a></p>
                              
                        </div>
                    </div>`;
        }
        else{
            return `<div class="farma ${cardStyle} filterDiv ${localidad}">
                            <div class="text-center">
                                <h5 class="nombre_farmacias">${farmacia.nombre}</h5>
                                <div class="card-line"></div>
                                <p class="farmacias_domicilio">${farmacia.domicilio} - ${farmacia.localidad}</p>
                                ${envio} ${whatsapp} ${telefono}
                            </div>
                        </div>`;
        }
    });

    document.getElementById("listadoFarmacias").innerHTML = listado.join('');
}

agregarFarmacias();

function filterSelection(location) {
    var farmacias = document.getElementsByClassName("filterDiv");
  
    if (location === "all") {
      for (var i = 0; i < farmacias.length; i++) {
        farmacias[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < farmacias.length; i++) {
        var farmacia = farmacias[i];
        var farmaciaLocation = farmacia.classList.contains(location);
  
        if (farmaciaLocation) {
          farmacia.style.display = "block";
        } else {
          farmacia.style.display = "none";
        }
      }
    }
  }

  var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}




