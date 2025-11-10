window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue


    //el boton enviar slo debe estr habilirado si se han marcado los 2 checks
const submitButton = document.getElementById('submit');
    submitButton.disabled = true;

    Document.getElementById('condiciones').onchange = checksubmit;     //llama cada vez que cambia de valor 
    Document.getElementById('privacidad').onchange = checksubmit;

    function checksubmit(e){
        const submitButton = document.getElementById('submit')
        submitButton.disabled = true;

        if(document.getElementById('condiciones').checked &&
            document.getElementById('privacidad').checked){
                submitButton.disabled = false;
            }
    }

    //el combo de opciones solo estara habilitado si se pulsa sí en el primer check
    //el tamaño mácimo de la descripción es de 80 caracteres
    //implementar algún mecanismo para prevenir el docle SubmitEvent
    //
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}