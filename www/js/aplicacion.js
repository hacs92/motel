var aplicacion = {
        maxColumnaFila: function(){

            var maxColumna = 0, maxFila = 0, numColumna, numFila;

            $.each(JsonHabitaciones, function(key, item) {

                numColumna = parseInt(item.NumColumnaPanel);
                numFila = parseInt(item.NumFilaPanel);

                if(numColumna > maxColumna){
                    maxColumna = numColumna
                }
                if(numFila > maxFila){
                    maxFila = numFila;
                }
            });
            console.log('MaxColumna: '+(maxColumna+1)+'\nMaxFila: '+(maxFila+1));
            aplicacion.crearTablaHabitaciones();
            return maxColumna++, maxFila++;
        },
        crearTablaHabitaciones: function(){

            var tabla = new Array(numColumna);
            for(var i = 0; maxFila > i; i++){
                tabla[i] = new Array(maxColumna);
            }



            $.each(JsonHabitaciones, function(key, item) {

                //console.log('Fila: '+item.NumFilaPanel+' Columna: '+item.NumColumnaPanel+' HabitacionID: '+item.HabitacionID);

                var f = parseInt(item.NumFilaPanel), c = parseInt(item.NumColumnaPanel);

                //tabla[f][c] = parseInt(item.CodigoHabitacion);
                tabla[f][c] = key;
            });


            $('.croquis-habitaciones').html('');

            var N;
            for(var i = 0; maxFila > i; i++){

                var filaHtml = '<div class="row no-gutter">';
                for(var j = 0; maxColumna > j; j++){

                    //console.log(tabla[i][j]);
                    if(tabla[i][j] == null){
                        filaHtml = filaHtml+'<div class="col-auto"></div>';
                    }else{
                        N = tabla[i][j];

                        var num_estrellas = JsonHabitaciones[N].ClasificacionTipoHabitacion, estrellas = '';

                        for(var k = 0; num_estrellas > k; k++){

                            estrellas = estrellas+'<i class="icon icon-hoteltPwfvcX2W color-y" style="color: rgb(255, 246, 0); font-size: 8px;"></i>';

                        }

                        switch(JsonHabitaciones[N].EstatusID){



                            case 'LISTA01':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+estrellas+'</p>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p><i class="icon icon-hotelPr1SnMPuGW ic-color"></i></p></div>';
                                break;
                            case 'POR_COBRAR02':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelAvFhXQltXo ic-color"></i></p></div>';
                                break;
                            case 'OCUPADA03':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelGe4ouMEeqo ic-color"></i></p></div>';
                                break;
                            case 'SERVICIO_RESTAURANT04':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelU0ptBvj8uh ic-color"></i></p></div>';
                                break;
                            case 'POR_SALIR05':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelUal3CU3j ic-color"></i></p></div>';
                                break;
                            case 'POR_LIMPIAR06':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hoteljNU2FPm2yP ic-color"></i></p></div>';
                                break;
                            case 'LIMPIEZA_NORMAL07':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelujcdb9wHdW ic-color"></i></p></div>';
                                break;
                            case 'LIMPIA08':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>Limpia</p>'+
                                    '<p><i class="icon icon-hotelAvFhXQltXo ic-color"></i></p></div>';
                                break;
                            case 'NO_DISPONIBLE09':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p><i class="icon icon-hotelfBFSyusmLD ic-color"></i></p></div>';
                                break;
                            case 'LIMPIEZA_DETALLE10':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelujcdb9wHdW ic-color"></i></p></div>';
                                break;
                            case 'SOLICITUD11':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p><i class="icon icon-hoteljNU2FPm2yP ic-color"></i></p></div>';
                                break;
                            case 'RESERVADA12':
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'>'+
                                    '<p>'+('0'+JsonHabitaciones[N].CodigoHabitacion).slice (-2)+'</p><p>'+JsonHabitaciones[N].DescripcionTipoHabitacion+'</p>'+
                                    '<p>10:00 H</p>'+
                                    '<p><i class="icon icon-hotelruQG38gXje ic-color"></i></p></div>';
                                break;
                            default:
                                filaHtml = filaHtml+'<div class="col-auto open-info" data-array='+N+' data-estatus='+JsonHabitaciones[N].EstatusID+'></div>';
                        }
                    }
                }
                filaHtml = filaHtml+'</div>';

                $('.croquis-habitaciones').append(filaHtml);
                //$('.row .col-20').css('width', 'calc((100% - 10px * 1) / '+maxColumna+')');



                $$('.open-info').on('click', function () {

                    N = ($(this).attr('data-array'));

                    JsonHabitaciones[N].CodigoHabitacion;
                    myApp.pickerModal('.picker-info');
                });
            }

        }
    }
