<?php 

include("words.php");
include("tools.php");



$test = file_get_contents("test-paragraph.txt");

$theWords = explode(" ", clean_text($test));
$testWords = [];
foreach($theWords as $word){
    if(not_common($word, $commonWords) && !$word == "" && !intval($word)){
        array_push($testWords, $word);
    
    }
    
}

var_dump($testWords);




