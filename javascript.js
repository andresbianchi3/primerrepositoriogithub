// Obtener referencia al botón "Resumen"
var btnResumen = document.getElementById('btn-resumen');

// Agregar un controlador de eventos para el clic en el botón "Resumen"
btnResumen.addEventListener('click', function() {
    // Obtener referencia al campo de selección
    var select = document.getElementById('inputState');

    let precio = 0;
    // Obtener el valor seleccionado en el campo de selección
    var opcionSeleccionada = select.value;
    // Obtener la cantidad de entradas
    var cantidad = document.getElementById('inputCity').value;
    

    if (opcionSeleccionada == 'Estudiante' && cantidad >= 1) {
        precio = (200*cantidad)-((80/100)*(200*cantidad));
    }else if (opcionSeleccionada == 'Trainee' && cantidad >= 1) {
        precio = (200*cantidad)-((50/100)*(200*cantidad));
    }else if(opcionSeleccionada == 'Junior' && cantidad >= 1){
        precio = (200*cantidad)-((15/100)*(200*cantidad));
    }else{
        precio = ' Seleccione cantidad de entradas';
    }

    // Actualizar el contenido del elemento <p> según la opción seleccionada
    var totalAPagar = document.getElementById('totalapagar');
    totalAPagar.textContent = 'Total a pagar: $' + precio;
});

// Obtener referencia al botón "Borrar"
var btnBorrar = document.getElementById('btn-borrar');

// Agregar un controlador de eventos para el clic en el botón "Borrar"
btnBorrar.addEventListener('click', function() {
    // Obtener referencia al elemento <p>
    var totalAPagar = document.getElementById('totalapagar');

    // Actualizar el contenido del elemento <p>
    totalAPagar.textContent = 'Total a pagar: $';
});