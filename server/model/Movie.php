<?php
class Movie
{
    private $conn;
    private $table = 'movies';
    public $search;

    public $title;
    public $year;
    public $description;
    public $poster;
    public $wallpaper;
    public $id;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $query = 'INSERT into ' . $this->table . '(title, year, description, poster, wallpaper) values(:title, :year, :description, :poster, :wallpaper);';

        $temp = $this->conn->prepare($query);

        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->poster = htmlspecialchars(strip_tags($this->poster));
        $this->wallpaper = htmlspecialchars(strip_tags($this->wallpaper));

        $temp->bindParam(':title', $this->title);
        $temp->bindParam(':year', $this->year);
        $temp->bindParam(':description', $this->description);
        $temp->bindParam(':poster', $this->poster);
        $temp->bindParam(':wallpaper', $this->wallpaper);

        if ($temp->execute()) return true;
        else return false;
    }

    public function read()
    {
        $query = 'SELECT * from ' . $this->table . ' movie';
        $temp = $this->conn->prepare($query);
        $temp->execute();
        return $temp;
    }

    public function update()
    {
        $query = 'UPDATE ' . $this->table . ' set title=:title, year=:year, description=:description, poster=:poster, wallpaper=:wallpaper where id=:id;';

        $temp = $this->conn->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->poster = htmlspecialchars(strip_tags($this->poster));
        $this->wallpaper = htmlspecialchars(strip_tags($this->wallpaper));

        $temp->bindParam(':id', $this->id);
        $temp->bindParam(':title', $this->title);
        $temp->bindParam(':year', $this->year);
        $temp->bindParam(':description', $this->description);
        $temp->bindParam(':poster', $this->poster);
        $temp->bindParam(':wallpaper', $this->wallpaper);

        if ($temp->execute()) return true;
        else return false;
    }

    public function delete()
    {
        $query = 'DELETE from ' . $this->table . ' where id=:id';
        $statement = $this->conn->prepare($query);
        $statement->bindParam(':id', $this->id);
        $statement->execute();
        return $statement;
    }
    
    public function search()
    {
        $query = 'SELECT * from ' . $this->table . ' where title=:title or year=:year';
        $temp = $this->conn->prepare($query);
        if (isset($this->search)) {
            $temp->bindParam(':title', $this->search);
            $temp->bindParam(':year', $this->search);
        } else {
            $query = 'select * from ' . $this->table;
        }
        $temp->execute();
        return $temp;
    }
}
