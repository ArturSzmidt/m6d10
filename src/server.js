import express from 'express';
import { sequlize } from './db/index.js';
import productsRouter from './services/products/index.js';
import categoriesRouter from './services/categories/index.js';
import cors from 'cors';
import reviewRouter from './services/reviews/index.js';

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/review', reviewRouter);

sequlize
  .sync({ alter: false })
  .then(() => {
    app.listen(port, () => console.log('🚀 Server is running on port ', port));

    app.on('error', (error) =>
      console.log('🚀 Server is crashed due to ', error)
    );
  })
  .catch((e) => console.log(e));
