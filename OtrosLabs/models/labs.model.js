const db = require('../util/database');

/*const labsready = [
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
];*/

module.exports = class Labo {
    constructor(nuevo_lab) {
        this.nombre = nuevo_lab.nombre || "Ultimo Lab";
        this.fecha = nuevo_lab.fecha || "2000/01/01";
    }

    save() {
        return db.execute(
            `INSERT INTO lab(nombre, fecha) 
            VALUES(?, ?)`,
            [this.nombre, this.fecha]
        );
    }

    static fetch(id) {
        let query = `SELECT * FROM lab`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        } 
        return db.execute(query);
    }
}