const Video = require('../models/Video');

// Mendapatkan semua video berdasarkan ID kursus
exports.getVideosByCourseId = async (req, res) => {
    const courseId = req.params.id;
    try {
        const videos = await Video.getVideosByCourseId(courseId);
        res.render('course', { videos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Menambahkan video baru (jika diperlukan di masa depan)
// Menambahkan video baru
exports.createVideo = async (req, res) => {
    const { courseId, title, videoUrl } = req.body; // Ambil courseId dari body
    try {
        const newVideoId = await Video.createVideo(courseId, title, videoUrl);
        res.status(201).json({ id: newVideoId, title, videoUrl });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
// Memperbarui video (jika diperlukan di masa depan)
exports.updateVideo = async (req, res) => {
    const videoId = req.params.id;
    const { title, videoUrl } = req.body;
    try {
        await Video.updateVideo(videoId, title, videoUrl);
        res.status(200).json({ message: 'Video updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Menghapus video (jika diperlukan di masa depan)
exports.deleteVideo = async (req, res) => {
    const videoId = req.params.id;
    try {
        await Video.deleteVideo(videoId);
        res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};