import sequlize from './index.js';
import s from 'sequelize';
const { DataTypes } = s;

const Review = sequlize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Review;
