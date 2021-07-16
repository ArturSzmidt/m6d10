import sequlize from './models/index.js';
import Product from './models/products.js';
import Category from './models/category.js';
import Review from './models/review.js';

Category.hasMany(Product, { foreignKey: 'category_id', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

export { sequlize, Product, Category, Review };
