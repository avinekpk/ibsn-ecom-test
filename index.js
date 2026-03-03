import express from 'express';
import mongoose from 'mongoose ';
import * as userRoutes from './src/routes/users';
import * as productRoutes from './src/routes/products';
import * as purchaseRoutes from './src/routes/purchases';

const app = express();
app.use(express.json());
const port = 3000;

mongoose
    .connect('mongodb://localhost:27017/iboson',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

// Handle connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/users', userRoutes);
app.use('/product', productRoutes);
app.use('/purchase', purchaseRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});

