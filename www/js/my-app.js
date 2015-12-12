'use strict';
document.addEventListener('DeviceReady', onAppReady, false);

// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Motel',
    material: true,
    materialPageLoadDelay: 200
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    //domCache: true
});

var JsonHabitaciones, XMLHabitaciones;
var dominio = 'http://192.168.0.27:8088/';

function onAppReady(){

    if(navigator.splashscreen && navigator.splashscreen.hide){
        navigator.splashscreen.hide();
    }
}

