import parseStringAsArray from '../../utils/parseStringAsArray';
import Dev from '../models/Dev';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);

    try {
      const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return res.status(200).json(devs);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SearchController();
