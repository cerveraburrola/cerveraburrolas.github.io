/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function convertirLong() {
    const cantidadI = document.getElementById('cantidad');
    const inicio = document.getElementById('med_en');
    const final = document.getElementById('med_fin');
    const longitudInput = document.getElementById('longitud');

    const cantidad = parseFloat(cantidadI.value);
    const med_en = inicio.value;
    const med_fin = final.value;

    let convertirLon;
    if (med_en === 'cm') {
        if (med_fin === 'pg') {
            convertirLon = cantidad*0.3937 ;
        } else if (med_fin === 'p') {
            convertirLon = cantidad *0.0328084;
        } else {
            convertirLon = cantidad;
        }
    } else if (med_en === 'pg') {
        if (med_fin === 'cm') {
            convertirLon = cantidad * 2.54;
        } else if (med_fin === 'p') {
            convertirLon = cantidad * 0.0833333;
        } else {
            convertirLon = cantidad;
        }
    } else if (med_en === 'p') {
        if (med_fin === 'cm') {
            convertirLon = cantidad * 30.48;
        } else if (med_fin === 'pg') {
            convertirLon = cantidad * 12;
        } else {
            convertirLon = cantidad;
        }
    }

    longitudInput.value = convertirLon.toFixed(2);
}

