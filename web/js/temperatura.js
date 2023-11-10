/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function convertirTem() {
    const temperaturaI = document.getElementById('temperatura');
    const inicio = document.getElementById('t_in');
    const final = document.getElementById('t_fin');
    const conversionInput = document.getElementById('conversion');

    const temperatura = parseFloat(temperaturaI.value);
    const t_in = inicio.value;
    const t_fin = final.value;

    let convertirTemperatura;
    if (t_in === 'celsius') {
        if (t_fin === 'farengeith') {
            convertirTemperatura = (temperatura * 9 / 5) + 32;
        } else if (t_fin === 'kelvin') {
            convertirTemperatura = temperatura + 273.15;
        } else {
            convertirTemperatura = temperatura;
        }
    } else if (t_in === 'farengeith') {
        if (t_fin === 'celsius') {
            convertirTemperatura = (temperatura - 32) * 5 / 9;
        } else if (t_fin === 'kelvin') {
            convertirTemperatura = (temperatura - 32) * 5 / 9 + 273.15;
        } else {
            convertirTemperatura = temperatura;
        }
    } else if (t_in === 'kelvin') {
        if (t_fin === 'celsius') {
            convertirTemperatura = temperatura - 273.15;
        } else if (t_fin === 'farengeith') {
            convertirTemperatura = (temperatura - 273.15) * 9 / 5 + 32;
        } else {
            convertirTemperatura = temperatura;
        }
    }

    conversionInput.value = convertirTemperatura.toFixed(2);
}
