const labsready = [
    {
        nombre: "Lab1",
        fecha: "13/02/2023", 
    },
    {
        nombre: "Lab3",
        fecha: "14/02/2023", 
    },
    {
        nombre: "Lab4",
        fecha: "16/02/2023", 
    },
    {
        nombre: "Lab5",
        fecha: "17/02/2023", 
    },
    {
        nombre: "Lab6",
        fecha: "20/02/2023", 
    },
    {
        nombre: "Lab8",
        fecha: "23/02/2023", 
    },
    {
        nombre: "Lab10",
        fecha: "27/02/2023", 
    },
    {
        nombre: "Lab11",
        fecha: "28/02/2023", 
    },
];

module.exports = class Labo {
    constructor(nuevo_lab) {
        this.nombre = nuevo_lab.nombre || "Ultimo Lab";
        this.fecha = nuevo_lab.fecha || "01/01/2000";
    }

    save() {
        labsready.push(this);
    }

    static fetchAll() {
        return labsready;
    }
}