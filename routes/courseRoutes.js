const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Rute untuk mendapatkan semua kursus
router.get('/', courseController.getCourses);

// Rute untuk mendapatkan detail kursus berdasarkan ID
router.get('/course/:id', courseController.getCourseDetails);

// Rute untuk menambahkan kursus baru (jika diperlukan)
router.post('/course', courseController.createCourse);

// Rute untuk memperbarui kursus (jika diperlukan)
router.put('/course/:id', courseController.updateCourse);

// Rute untuk menghapus kursus (jika diperlukan)
router.delete('/course/:id', courseController.deleteCourse);

module.exports = router;