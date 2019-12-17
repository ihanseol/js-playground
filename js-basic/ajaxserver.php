<?php

/*Put your MySQL Connect stuff up here*/

//If no search string is passed, then we can't search
if(empty($_GET['q'])) {
    echo '&nbsp;';
} else {
    //Remove whitespace from beginning & end of passed search.
    $search = trim($_GET['q']);
    //Query the DB and store the result in a variable
    $query = mysql_query("SELECT name,url FROM table WHERE name LIKE '".$search."%' ORDER BY name ASC LIMIT 1");
    //If no rows are found, display message saying that nothing was found
    if(mysql_num_rows($  query) == 0) {
        echo 'Not Found.';
    }else {
        //Bust the returned rows into an array for easy usage
        $row = mysql_fetch_array($  query) or die(mysql_error());  
        //Display a link to the website using it's name & url from the DB
        echo "<a href=\"".$row['url']."\">".$row['name']."</a>";
    }
}

/*Close your MySQL Connection here*/

?> 
