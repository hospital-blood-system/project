const express = require('express');

const route = express.Router();

const announcementController = require('../controller/AnnouncementController');

route.get('/', announcementController.getAnnouncements);
route.get('/blood', announcementController.getBloodTypes);
route.get('/:_id', announcementController.getAnnouncementById);
route.post('/', announcementController.addAnnouncement);
route.put('/:_id', announcementController.updateAnnouncement);
route.delete('/:_id', announcementController.deleteAnnouncement);

module.exports = route;