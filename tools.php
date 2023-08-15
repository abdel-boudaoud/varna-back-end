<?php
include('words.php');



function get_words_by_level($level){
   global $a1, $a2, $b1, $b2, $c1;
   if($level == "A1"){
       return  $a1;
   }elseif($level == "A2"){
       return $a2;

   }else if($level == "B1"){
       return $b1;
   }else if($level == "B2"){
       return $b2;
   }else if($level == "C1"){
       return $c1;
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
   $words  = array_column($firstList, 'the word');
   $frequency = array_column($firstList, 'frequency');

   array_multisort($words, SORT_ASC, $frequency, SORT_ASC, $firstList);


   return $firstList;
}

