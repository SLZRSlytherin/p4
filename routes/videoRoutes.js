const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Rute untuk mendapatkan semua video berdasarkan ID kursus
router.get('/course/:id/videos', videoController.getVideosByCourseId);

// Rute untuk menambahkan video baru (jika diperlukan)
router.post('/course/:id/videos', videoController.createVideo);

// Rute untuk memperbarui video (jika diperlukan)
router.put('/videos/:id', videoController.updateVideo);

// Rute untuk menghapus video (jika diperlukan)
router.delete('/course/:id/videos/:id', videoController.deleteVideo);

module.exports = router;