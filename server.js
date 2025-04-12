const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f4f8;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #2c3e50;
            font-size: 3em;
            margin-bottom: 20px;
          }
          button {
            padding: 10px 20px;
            font-size: 1em;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: #2980b9;
          }
        </style>
      </head>
      <body>
        <h1>Hello World !</h1>
        <button onclick="location.href='/date'">Voir la Date et l'Heure</button>
      </body>
    </html>
  `);
});

app.get('/date', (req, res) => {
  const currentDate = new Date();
  res.send(`
    <html>
      <head>
        <title>Date et Heure</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #fffbe6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h2 {
            color: #e67e22;
            font-size: 2.5em;
          }
          p {
            color: #34495e;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <h2>Date et Heure Actuelles</h2>
        <p>${currentDate}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Serveur actif sur http://localhost:${PORT}`);
});
