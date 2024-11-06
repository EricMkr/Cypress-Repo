fichier permettant de gérer la connexion à la base de données database.sql.

<?php
$servername = "localhost";
$username = "root";
$password = ""; // Remplace par ton mot de passe de base de données
$dbname = "database";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>
