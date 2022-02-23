<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../config/Database.php';
include_once '../model/Movie.php';

$database = new Database();
$db = $database->connect();

$movie = new Movie($db);

$data = json_decode((file_get_contents("php://input")));

$movie->title = $data->title;
$movie->year = $data->year;
$movie->description = $data->description;
$movie->poster = $data->poster;
$movie->wallpaper = $data->wallpaper;

if (isset($movie->title) && isset($movie->year) && isset($movie->description) && isset($movie->poster) && isset($movie->wallpaper) && $movie->create()) {
    echo var_export((bool) true);
} else {
    echo var_export((bool) false);
}
