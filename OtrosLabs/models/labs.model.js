const db = require('../util/database');

module.exports = class Labo {
    constructor(nuevo_lab) {
        this.nombre = nuevo_lab.nombre || "Ultimo Lab";
        this.fecha = nuevo_lab.fecha || "2000/01/01";
        this.imagen = nuevo_lab.imagen || "lab.jpg";
    }

    save() {
        return db.execute(
            `INSERT INTO lab(nombre, fecha, imagen) 
            VALUES(?, ?, ?)`,
            [this.nombre, this.fecha, this.imagen]
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

    static find(valor_busqueda) {
        return db.execute(`
            SELECT *
            FROM lab
            WHERE nombre LIKE ? OR fecha LIKE ?
            `, 
            [
                '%' + valor_busqueda + '%', '%' + valor_busqueda + '%'
            ]
        );
    }
}