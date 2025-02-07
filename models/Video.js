const db = require('../config/db');

class Video {
    // Mendapatkan semua video berdasarkan ID kursus
    static async getVideosByCourseId(courseId) {
        const [rows] = await db.query('SELECT * FROM Videos WHERE course_id = ?', [courseId]);
        return rows;
    }

    // Mendapatkan video berdasarkan ID
    static async getVideoById(id) {
        const [rows] = await db.query('SELECT * FROM Videos WHERE id = ?', [id]);
        return rows[0]; // Mengembalikan satu video
    }

    // Menambahkan video baru
    static async createVideo(courseId, title, videoUrl) {
        const [result] = await db.query('INSERT INTO Videos (course_id, title, video_url) VALUES (?, ?, ?)', [courseId, title, videoUrl]);
        return result.insertId; // Mengembalikan ID video yang baru ditambahkan
    }

    // Memperbarui video
    static async updateVideo(id, title, videoUrl) {
        await db.query('UPDATE Videos SET title = ?, video_url = ? WHERE id = ?', [title, videoUrl, id]);
    }

    // Menghapus video
    static async deleteVideo(id) {
        await db.query('DELETE FROM Videos WHERE id = ?', [id]);
    }
}

module.exports = Video;