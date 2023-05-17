// Obtener referencia al botón "Resumen"
var btnResumen = document.getElementById('btn-resumen');

// Agregar un controlador de eventos para el clic en el botón "Resumen"
btnResumen.addEventListener('click', function() {
    // Obtener referencia al campo de selección
    var select = document.getElementById('inputState');

    let precio = 0;
    // Obtener el valor seleccionado en el campo de selección
    var opcionSeleccionada = select.value;

    if (opcionSeleccionada == 'Estudiante') {
        precio = 200-((80/100)*200);
    }else if (opcionSeleccionada == 'Trainee') {
        precio = 200-((50/100)*200);
    }else if(opcionSeleccionada == 'Junior'){
        precio = 200-((15/100)*200);
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