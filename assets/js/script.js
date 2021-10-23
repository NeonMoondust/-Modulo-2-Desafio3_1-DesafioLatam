const datos = {
    radiologia: [
        {
            hora: "11:00",
            especialista: "IGNACIO SCHULZ",
            paciente: "FRANCISCA ROJAS",
            rut: "9878782-1",
            prevision: "FONASA",
        },
        {
            hora: "11:30",
            especialista: "FEDERICO SUBERCASEAUX",
            paciente: "PAMELA ESTRADA",
            rut: "15345241-3",
            prevision: "ISAPRE",
        },
        {
            hora: "15:00",
            especialista: "FERNANDO WURTHZ",
            paciente: "ARMANDO LUNA",
            rut: "16445345-9",
            prevision: "ISAPRE",
        },
        {
            hora: "15:30",
            especialista: "ANA MARIA GODOY",
            paciente: "MANUEL GODOY",
            rut: "17666419-0",
            prevision: "FONASA",
        },
        {
            hora: "16:00",
            especialista: "PATRICIA SUAZO",
            paciente: "RAMON ULLOA",
            rut: "14989389-K",
            prevision: "FONASA",
        },
        ],
        
        traumatologia: [
        {
            hora: "8:00",
            especialista: "MARIA PAZ ALTUZARRA",
            paciente: "PAULA SANCHEZ",
            rut: "15554774-5",
            prevision: "FONASA",
        },
        {
            hora: "10:00",
            especialista: "RAUL ARAYA",
            paciente: "ANGÉLICA NAVAS",
            rut: "15444147-9",
            prevision: "ISAPRE",
        },
        {
            hora: "10:30",
            especialista: "MARIA ARRIAGADA",
            paciente: "ANA KLAPP",
            rut: "17879423-9",
            prevision: "ISAPRE",
        },
        {
            hora: "11:00",
            especialista: "ALEJANDRO BADILLA",
            paciente: "FELIPE MARDONES",
            rut: "1547423-6",
            prevision: "ISAPRE",
        },
        {
            hora: "11:30",
            especialista: "CECILIA BUDNIK",
            paciente: "DIEGO MARRE",
            rut: "16554741-K",
            prevision: "FONASA",
        },
        {
            hora: "12:00",
            especialista: "ARTURO CAVAGNARO",
            paciente: "CECILIA MENDEZ",
            rut: "9747535-8",
            prevision: "ISAPRE",
        },
        {
            hora: "12:30",
            especialista: "ANDRES KANACRI",
            paciente: "MARCIAL SUAZO",
            rut: "11254785-5",
            prevision: "ISAPRE",
        },
        ],
        
        dental: [
        {
            hora: "8:30",
            especialista: "ANDREA ZUÑIGA",
            paciente: "MARCELA RETAMAL",
            rut: "11123425-6",
            prevision: "ISAPRE",
        },
        {
            hora: "11:00",
            especialista: "MARIA PIA ZAÑARTU",
            paciente: "ANGEL MUÑOZ",
            rut: "9878789-2",
            prevision: "ISAPRE",
        },
        {
            hora: "11:30",
            especialista: "SCARLETT WITTING",
            paciente: "MARIO KAST",
            rut: "7998789-5",
            prevision: "FONASA",
        },
        {
            hora: "13:00",
            especialista: "FRANCISCO VON TEUBER",
            paciente: "KARIN FERNANDEZ",
            rut: "18887662-K",
            prevision: "FONASA",
        },
        {
            hora: "13:30",
            especialista: "EDUARDO VIÑUELA",
            paciente: "HUGO SANCHEZ",
            rut: "17665461-4",
            prevision: "FONASA",
        },
        {
            hora: "14:00",
            especialista: "RAQUEL VILLASECA",
            paciente: "ANA SEPULVEDA",
            rut: "14441281-0",
            prevision: "ISAPRE",
        },
    ]
};
let box_mostrar = document.body.insertBefore(document.createElement('div'), document.querySelector('footer'));
box_mostrar.className = 'box-mostrar';
const keys = Object.keys(datos);
//Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre
keys.forEach(element => {
    let table_firstLast = box_mostrar.appendChild(document.createElement('p'));
    table_firstLast.className = 'text-center mx-auto text-light mt-3'
    table_firstLast.innerHTML = `Primera atención: ${datos[element][0].paciente} - ${datos[element][0].prevision} | Última atención: ${datos[element][datos[element].length - 1].paciente} - ${datos[element][datos[element].length - 1].prevision}`    
});

box_mostrar = document.body.insertBefore(document.createElement('div'), document.querySelector('footer'));
box_mostrar.className = 'box-mostrar';

let div_toShow = [box_mostrar.appendChild(document.createElement('div')),
                    box_mostrar.appendChild(document.createElement('div')),
                    box_mostrar.appendChild(document.createElement('div'))];

function section_table_creator(div) {
    let table_header = div.parentNode.insertBefore(document.createElement('h3'), div);
    table_header.className = 'text-center text-light';
    table_header.innerHTML = keys[div_toShow.indexOf(div)].toUpperCase();
    let table = div.appendChild(document.createElement('table'));
    table.className = 'text-center tabla';
    let row = table.appendChild(document.createElement('tr'));
    row.innerHTML = '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Previsión</th></tr>';
    datos[keys[div_toShow.indexOf(div)]].forEach(element => {
        row = table.appendChild(document.createElement('tr'));
        row.innerHTML = `<td>${element.hora} </td>
                         <td>${element.especialista} </td>
                         <td>${element.paciente} </td>
                         <td>${element.prevision} </td>`
    });
    
    
}
div_toShow.forEach(element => {
    element.className = 'tabla-mostrar';
    section_table_creator(element);
});


