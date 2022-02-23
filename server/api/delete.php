<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '../config/Database.php';
include_once '../model/Movie.php';

$database = new Database();
$db = $database->connect();

$movie = new Movie($db);
$movie->id = isset($_GET['id']) ? $_GET['id'] : die();

$result = $movie->delete();

if (isset($_GET['id'])) {
    echo var_export((bool) true);
} else {
    echo var_export((bool) false);
}
