import mongoose from 'mongoose';

import PointSchema from '../../utils/PointSchema';

const DevSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    github_username: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    avatar_url: {
      type: String,
    },
    techs: [String],
    location: {
      type: PointSchema,
      index: '2dsphere',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Dev', DevSchema);
