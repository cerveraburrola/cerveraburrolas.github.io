/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function convertirMon() {
    const cantidadI = document.getElementById('cantidad');
    const inicio = document.getElementById('mon_en');
    const final = document.getElementById('mon_fin');
    const divisaInput = document.getElementById('divisa');

    const cantidad = parseFloat(cantidadI.value);
    const mon_en = inicio.value;
    const mon_fin = final.value;

    let convertirMond;
    if (mon_en === 'euro') {
        if (mon_fin === 'canadiense') {
            convertirMond = cantidad*1.44 ;
        } else if (mon_fin === 'usa') {
            convertirMond = cantidad *109;
        } else {
            convertirMond = cantidad;
        }
    } else if (mon_en === 'canadiense') {
        if (mon_fin === 'euro') {
            convertirMond = cantidad * 0.69;
        } else if (mon_fin === 'usa') {
            convertirMond = cantidad * 0.75;
        } else {
            convertirMond = cantidad;
        }
    } else if (mon_en === 'usa') {
        if (mon_fin === 'euro') {
            convertirMond = cantidad * 0.92;
        } else if (mon_fin === 'canadiense') {
            convertirMond = cantidad * 1.33;
        } else {
            convertirMond = cantidad;
        }
    }

    divisaInput.value = convertirMond.toFixed(2);
}

