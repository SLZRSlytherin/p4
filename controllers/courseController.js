const Course = require('../models/Course');
const Video = require('../models/Video');

// Mendapatkan semua kursus
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.getAllCourses();
        res.render('index', { courses });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Mendapatkan detail kursus berdasarkan ID
exports.getCourseDetails = async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await Course.getCourseById(courseId);
        const videos = await Video.getVideosByCourseId(courseId);
        res.render('course', { course, videos });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Menambahkan kursus baru (jika diperlukan di masa depan)
exports.createCourse = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newCourseId = await Course.createCourse(title, description);
        res.status(201).json({ id: newCourseId, title, description });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Memperbarui kursus (jika diperlukan di masa depan)
exports.updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const { title, description } = req.body;
    try {
        await Course.updateCourse(courseId, title, description);
        res.status(200).json({ message: 'Course updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Menghapus kursus (jika diperlukan di masa depan)
exports.deleteCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        await Course.deleteCourse(courseId);
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};