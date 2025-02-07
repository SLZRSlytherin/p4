const db = require('../config/db');

class Course {
    // Mendapatkan semua kursus
    static async getAllCourses() {
        const [rows] = await db.query('SELECT * FROM Courses');
        return rows;
    }

    // Mendapatkan kursus berdasarkan ID
    static async getCourseById(id) {
        const [rows] = await db.query('SELECT * FROM Courses WHERE id = ?', [id]);
        return rows[0]; // Mengembalikan satu kursus
    }

    // Menambahkan kursus baru
    static async createCourse(title, description) {
        const [result] = await db.query('INSERT INTO Courses (title, description) VALUES (?, ?)', [title, description]);
        return result.insertId; // Mengembalikan ID kursus yang baru ditambahkan
    }

    // Memperbarui kursus
    static async updateCourse(id, title, description) {
        await db.query('UPDATE Courses SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    }

    // Menghapus kursus
    static async deleteCourse(id) {
        await db.query('DELETE FROM Courses WHERE id = ?', [id]);
    }
}

module.exports = Course;