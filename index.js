const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const cells = [
  {
    id: 1,
    name: 'Xiaomi 12 PRO',
    description:
      'Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w',
    price: 4000,
    photo: './assets/images/xiaomi12pro.png',
  },
  {
    id: 2,
    name: 'Iphone 13 PRO',
    description: 'Apple iPhone 13 Pro 128GB Prateado Tela 6,1” - 12MP iOS ',
    price: 7800,
    photo: './assets/images/iphone13pro.png',
  },
  {
    id: 3,
    name: 'Galaxy S22 Ultra',
    description:
      "Smartphone Samsung Galaxy S22 Ultra 256GB 5G Wi-Fi Tela 6.8'' Dual Chip 12GB RAM Câmera Quádrupla + Selfie 40MP - Preto ",
    price: 8549,
    photo: './assets/images/s22ultra.png',
  },
  {
    id: 4,
    name: 'Xiaomi 12 PRO',
    description:
      'Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w',
    price: 4000,
    photo: './assets/images/xiaomi12pro.png',
  },
  {
    id: 5,
    name: 'Iphone 13 PRO',
    description: 'Apple iPhone 13 Pro 128GB Prateado Tela 6,1” - 12MP iOS ',
    price: 7800,
    photo: './assets/images/iphone13pro.png',
  },
  {
    id: 6,
    name: 'Galaxy S22 Ultra',
    description:
      "Smartphone Samsung Galaxy S22 Ultra 256GB 5G Wi-Fi Tela 6.8'' Dual Chip 12GB RAM Câmera Quádrupla + Selfie 40MP - Preto ",
    price: 8549,
    photo: './assets/images/s22ultra.png',
  },
];

app.get('/cells', (req, res) => {
  res.send(cells);
});

app.get('/cells/find-cell/:id', (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCell = cells.find((cell) => cell.id === idParam);
  res.send(chosenCell);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
