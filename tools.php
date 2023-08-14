<?php
include('words.php');
//check if one of the common words array contains a certain word
function not_common($word, $wordsArray)
{
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
