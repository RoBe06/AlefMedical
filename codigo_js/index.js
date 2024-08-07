var farmacias = [
    {nombre : "Farmacia Audifarm",
    domicilio : "Av.Belgrano 3802",
    localidad : "CABA",
    whatsapp : 1132088472,
    envioDomicilio : "Coordinar entrega en red de farmacias sin cargo"},

    {nombre : "Farmacia Scienza - Pueyrredón",
    domicilio : "Av.Pueyrredón 1460",
    localidad : "CABA",
    telefono : 1155547975,
    whatsapp : 1163999506,
    envioDomicilio : "Envios a domicilio (consulte costo)"},

    {nombre : "Farmacia Scienza - Pellegrini",
    domicilio : "C.Pellegrini 163",
    localidad : "CABA",
    telefono : 1155547975,
    whatsapp : 1163999506,
    envioDomicilio : "Envios a domicilio (consulte costo)"},

    {nombre : "Farmacia 60 Querini",
    domicilio : "Plaza H. Yrigoyen N°68 (e/ 19 y diag 75)",
    whatsapp : 2213533543,
    localidad : "La Plata - Bs.As."},

    {nombre : "Farmacia Rissi",
    domicilio : "H.Yrigoyen 8955",
    telefono : 1142442644,
    localidad : "Lomas de Zamora - Bs.As."},
    
    {nombre : "Farmacia Farmafé",
    domicilio : "Av.Rivadavia 4399",
    telefono :  1122993276,
    localidad : "CABA"},

    {nombre : "Farmacia Rucci",
    domicilio : "San Juan 497 - Rosario",
    telefono : 3414483783,
    localidad : "Santa Fe"},  

    {nombre: "Farmacia Libertad",
     domicilio : "Unanue 514 - Santa Rosa",
     telefono : 2954431903,
     localidad : "La Pampa"},  

    {nombre : "Farmacia Luján",
    domicilio : "Pueyrredón 1494",
    whatsapp : 3874890207,
    localidad : "Salta"},      

    {nombre : "Farmacia Muñecas",
    domicilio : "Congreso 1088 - S.M. Tucumán",
    telefono : 3812321924,
    whatsapp : 3812125060,
    localidad : "Tucumán"},

    {nombre : "Farmacia FARMAPLUS",
    domicilio : "25 de Mayo 707",
    whatsapp : 3794725782,
    localidad : "Corrientes Capital"},

    {nombre : "Farmacia CAPITAL SCS",
    domicilio : "Av Maipu 249",
    whatsapp : 3794886003,
    localidad : "Corrientes Capital"},

    {nombre : "Farmacia FARMATOTAL",
    domicilio : "J.V. Zapata 303 (Esq. Rioja)",
    telefono : 2614291853,
    whatsapp :  2615527786,
    localidad : "Mendoza Capital"}
]

function agregarFarmacias() {
    var listado = farmacias.map(function(farmacia, index) {
        var telefono = farmacia.telefono ? `<p class="farmacias_numero"> <img src="imagenes/logoTelefono.png" alt="" id="logos"><a href="tel:+54 ${farmacia.telefono}" class="farmacias_numero">${formatearNumero(farmacia.telefono, farmacia.localidad)}<br> </a></p>` : "";
        var envio = farmacia.envioDomicilio ? `<p class="farmacias_envio">${farmacia.envioDomicilio} <br> </p>` : "";
        var whatsapp = farmacia.whatsapp ? `<p class="farmacias_numero whatsapp"> <img src="imagenes/logoWhatsapp.png" alt="" id="logos"><a href="https://api.whatsapp.com/send?phone=+54${farmacia.whatsapp}" class="farmacias_numero whatsapp">${formatearNumero(farmacia.whatsapp,farmacia.localidad)}<br> </a></p>` : "";
        var cardStyle = ((farmacia.whatsapp && farmacia.envioDomicilio) || farmacia.envioDomicilio)? "primero" : "segundo";
        var localidad = (farmacia.localidad === "CABA" || farmacia.localidad === "Lomas de Zamora - Bs.As." || farmacia.localidad === "La Plata - Bs.As.") ? "filtro_uno" : "filtro_dos";
        
        if(index == 0) {
            return `<div data-aos="fade-right" class="filterDiv farma ${cardStyle} ${localidad} principal">
                        <div class="text-center">
                            <h5 class="nombre_farmacias audifarm">${farmacia.nombre}</h5>
                            <div class="card-line primer"></div>
                            <p class="farmacias_domicilio audifarm"><img src="imagenes/logoLocation.png" alt="" id="logos"> ${farmacia.domicilio} - ${farmacia.localidad}</p>
                            <p class="farmacias_envio audifarm"> ${farmacia.envioDomicilio} </p> 
                            <p class="farmacias_numero prm whatsapp"> <img src="imagenes/logoWhatsapp.png" alt="" id="logos"><a href="https://api.whatsapp.com/send?phone=+54${farmacia.whatsapp}" class="farmacias_numero prm whatsapp"> ${formatearNumero(farmacia.whatsapp,farmacia.localidad)}<br></a></p>    
                        </div>
                    </div>`;
        }
        else{
            return `<div data-aos="fade-right" class="filterDiv farma ${cardStyle} ${localidad}">
                            <div class="text-center">
                                <h5 class="nombre_farmacias">${farmacia.nombre}</h5>
                                <div class="card-line"></div>
                                <p class="farmacias_domicilio"><img src="imagenes/logoLocation.png" alt="" id="logos"> ${farmacia.domicilio} - ${farmacia.localidad}</p>
                                ${envio} ${whatsapp} ${telefono}
                            </div>
                        </div>`;
        }
    });

    document.getElementById("listadoFarmacias").innerHTML = listado.join('');

    var phoneNumberLinks = document.getElementsByClassName("whatsapp");
    for (var i = 0; i < phoneNumberLinks.length; i++) {
      phoneNumberLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        var phoneNumber = this.innerText.replace(/[^0-9]/g, "");
        redirectToWhatsApp(phoneNumber);
      });
    }

    function formatearNumero(numero, localidad) {
      var digitos = numero.toString().replace(/\D/g, '');
      var numeroFormateado;
      if (localidad == "CABA" || localidad == "Lomas de Zamora - Bs.As.") {
        numeroFormateado = '(' + digitos.substring(0, 2) + ') ' + digitos.substring(2, 6) + '-' + digitos.substring(6);
      } else if (localidad == "La Pampa"){
        numeroFormateado = '(' + digitos.substring(0, 4) + ') ' + digitos.substring(4, 6) + '-' + digitos.substring(6);
      } else{
        numeroFormateado = '(' + digitos.substring(0, 3) + ') ' + digitos.substring(3, 6) + '-' + digitos.substring(6);
      }

       return numeroFormateado;
    }
   
}


function redirectToWhatsApp(phoneNumber) {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var whatsappURL = isMobile
    ? "whatsapp://send?phone=+54" + phoneNumber
    : "https://web.whatsapp.com/send?phone=+54" + phoneNumber;
  window.open(whatsappURL, "_blank");
}

agregarFarmacias();

function filterSelection(location) {
    var farmacias = document.getElementsByClassName("filterDiv");
  
    if (location === "filtro_uno" || location === "filtro_dos") {
      for (var i = 0; i < farmacias.length; i++) {
        var farmacia = farmacias[i];
        var farmaciaLocation = farmacia.classList.contains(location);
  
        if (farmaciaLocation) {
          farmacia.style.display = "block";

        } else {
          farmacia.style.display = "none";

        }
      }
    } else {
      for (var i = 0; i < farmacias.length; i++) {
        farmacias[i].style.display = "block";

      }
    }

    AOS.refresh();
  }

  window.onload = function() {
   
    filterSelection('filtro_uno');
    
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };
