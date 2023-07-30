const express = require('express');
const router = express.Router();
const Profile = require('../models/profile'); 
const Order = require('../models/order');

router.get('/profile/:profileId/orders', async (req, res) => {
  const { profileId } = req.params;

  try {
    const userProfile = await Profile.findByPk(profileId, { 
      include: { model: Order, as: 'orders' },
    });

    if (!userProfile) {
      return res.status(404).json({ message: 'Perfil no encontrado.' });
    }

    // devuelve los pedidos del perfil x
    return res.json({ profile: userProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;

