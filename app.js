const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Définir le dossier des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Définir le moteur de template (optionnel)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware pour les routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
