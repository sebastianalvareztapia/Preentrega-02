let País = prompt ("Ingresar País")
let Discos = Number (prompt ("Ingresar Discos"))

const datosBusqueda = {
    País: País,
    Discos: Discos,
}


function mostrarBandas (bands){
    //console.log(bands)
    bands.forEach(banda => {
        console.log(banda.Nombre + ' - ' + banda.Estilo)

    });
}

function filtrarPaís(banda){
    if (datosBusqueda.País){
        return banda.País === datosBusqueda.País
    }
    return banda;
}

function filtrarDiscos(banda){
    if (datosBusqueda.Discos){
        return banda.Discos === datosBusqueda.Discos
    }
    return banda;
}

function filtrarBandas (){
    const resultado = bandas.filter(filtrarPaís).filter(filtrarDiscos);
    if(resultado.length>0){
        mostrarBandas(resultado)
    } else {
        console.error('sin resultados')
    }
}

filtrarBandas()

