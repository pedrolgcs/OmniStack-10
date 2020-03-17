import api from '../../services/api';
import parseStringAsArray from '../../utils/parseStringAsArray';
import Dev from '../models/Dev';
import { findConnections, sendMEssage } from '../../services/socket';

class DevController {
  async index(req, res) {
    try {
      const devs = await Dev.find().sort('-name');
      return res.status(200).json(devs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { github_username, techs, latitude, longitude } = req.body;

      let dev = await Dev.findOne({ github_username });

      if (!dev) {
        const { data } = await api.get(`${github_username}`);

        const name = data.name || data.login;
        const { bio, avatar_url } = data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };

        dev = await Dev.create({
          name,
          github_username,
          bio,
          avatar_url,
          techs: techsArray,
          location,
        });

        // Filter connections inside 10km circle
        const sendSocketMessageTo = findConnections(
          { latitude, longitude },
          techsArray
        );

        sendMEssage(sendSocketMessageTo, 'new-dev', dev);
      }

      return res.status(201).json(dev);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new DevController();
