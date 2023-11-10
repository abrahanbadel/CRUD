function insertar(){

    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");

    estudiante = new Estudiante(cedula.value , nombre.value , apellido.value)


    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")
    estudiantes.push(estudiante);

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    console.log(estudiantes);
    cedula.value = "";
    nombre.value = "";
    apellido.value = "";
    cedula.focus();
}

function consultar(){

    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {

        if(estudiantes[i].cedula == cedula.value){
        

            nombre.value = estudiantes[i].nombre
            apellido.value = estudiantes[i].apellido
            encontrado = true
        }
    }

}

function modificar(){

    var cedula = document.getElementById("cedula");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {

        if(estudiantes[i].cedula == cedula.value){
        
            
            estudiantes[i].nombre = nombre.value
            estudiantes[i].apellido = apellido.value 
            encontrado = true

            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        }
    }

}

function eliminar(){

}
