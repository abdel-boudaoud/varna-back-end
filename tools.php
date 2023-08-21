<?php
include('words.php');



function get_words_by_level($level){
   global $a1, $a2, $b1, $b2, $c1;
   $levels = [
      "A1"=>$a1, 
      "A2"=>$a2,
      "B1"=>$b1,
      "B2"=>$b2,
      "C1"=>$c1, 
   ];

   if(array_key_exists($level, $levels)){
      return $levels[$level];
   }
   
}

//check if one of the common words array contains a certain word
function not_common($word, $level)
{
   $wordsArray = get_words_by_level($level);
   if (in_array($word, $wordsArray)) {
      return false;
   } else {
      return true;
   }
}


function clean_text($string)
{
   $lower = strtolower($string);
   $cleanedText = str_replace([".", ",", "\r", "\n", "“", "*"], " ", $lower);
   return $cleanedText;
}



function get_final_list($array)
{
   $firstList = array_unique($array, SORT_REGULAR);
   


   return $firstList;
}

