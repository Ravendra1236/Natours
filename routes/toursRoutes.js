const express = require("express")
const router = express.Router()
const tourController = require("./../controllers/toursController")

// 3. Routes 
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// router.param("id" , tourController.checkID)

router.route('/top-5-cheap').get(tourController.aliasTopTours,tourController.getAllTours);

router.route('/tour-stats' ).get(tourController.getTourStats)

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router