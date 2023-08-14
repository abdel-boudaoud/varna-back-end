<?php 

include("words.php");
include("tools.php");



$test = file_get_contents("book.txt");

$theWords = explode(" ", clean_text($test));
$testWords = [];
foreach($theWords as $word){
    if(not_common($word, $commonWords) && !$word == "" && !intval($word)){
        array_push($testWords, ['the word'=>$word, 'frequency'=>array_count_values($theWords)[$word]]);
    
    }
    
}



$vocabularyList = array_filter($testWords,function($word){
    if($word['frequency'] > 5){
        return $word;
    }
});


var_dump(get_final_list($vocabularyList))


?>



