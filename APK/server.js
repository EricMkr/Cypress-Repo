const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configuration de la connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'votre_nom_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'mon_application'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connexion à la base de données réussie.');
});

// Endpoint pour enregistrer les posts
app.post('/api/posts', (req, res) => {
    const { username, content } = req.body;
    const query = 'INSERT INTO posts (username, content) VALUES (?, ?)';
    db.query(query, [username, content], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion:', err);
            res.status(500).send('Erreur serveur');
        } else {
            res.status(200).send('Post enregistré avec succès.');
        }
    });
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
