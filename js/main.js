$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Atras',
            next : 'Siguiente',
            finish : 'Confirmar',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            let fullname = $('#first_name').val() + ' ' + $('#second_name').val() + ' ' + $('#last_name').val() + ' ' + $('#last2_name').val();
            let room = $('#Documento').val();
            let day = $('#Email').val();
            let time = $('#Direccion').val();

            $('#fullname-val').text(fullname);
            $('#room-val').text(room);
            $('#day-val').text(day);
            $('#time-val').text(time);

            return true;
        }
    });
    $("#day").datepicker({
        dateFormat: "dd / mm / yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-chevron-down"></i>',
    });
});

function Demo(){
    window.location('/index.html')
}