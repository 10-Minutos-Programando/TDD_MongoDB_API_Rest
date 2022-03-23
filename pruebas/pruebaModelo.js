const mongoose = require('mongoose');
const Trip = require('../models/trip.model');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1/familyTrips');

    const newTrip = await Trip.create({
        name: 'prueba de viaje',
        description: 'Prueba de desc',
        destination: 'Berlin',
        category: 'amigos',
        start_date: '2022-05-02'
    });

    console.log(newTrip);
})();