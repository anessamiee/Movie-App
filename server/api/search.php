<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Methods: REQUEST');

header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../model/Movie.php';

$database = new Database();
$db = $database->connect();

$movie = new Movie($db);

$movie->search = isset($_GET['search']) ? $_GET['search'] : die();

$result = $movie->search();

$num = $result->rowCount();

if ($num > 0) {
    $movie_arr = array();
    $movie_arr['data'] = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $movie_item = array(
            'id' => $id,
            'title' => $title,
            'year' => $year,
            'description' => $description,
            'poster' => $poster,
            'wallpaper' => $wallpaper
        );
        array_push($movie_arr['data'], $movie_item);
    }
    echo json_encode($movie_arr);
} else {
    $emptyArray = array();
    $emptyArray['data'] = array();
    echo false;
    echo json_encode($emptyArray);
}
