$$(document).on('pageInit', '.page[data-page="panel"]', function (e) {

    $$('.cargar-habitaciones').on('click', function () {

        myApp.showIndicator();

        $.ajax({
            url: dominio+'WebServices/WSMOTEL.asmx/HOTEL_PanelHabitaciones',
            dataType : 'xml',
        }).done(function(data) {

            XMLHAbitaciones = xml2json(data, '');
            JsonHabitaciones = JSON.parse(XMLHAbitaciones);
            JsonHabitaciones = JsonHabitaciones.ArrayOfEstatusHabitacion.EstatusHabitacion;

            aplicacion.maxColumnaFila();

        }).fail(function(data, error){

            myApp.addNotification({

                message: error+data.responseText,
                button: {
                    text: 'Cerrar',
                }
            });

        }).always(function(data){

            myApp.hideIndicator();
        });
    });
});