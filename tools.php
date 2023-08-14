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
   $cleanedText = str_replace([".", ",", "\r", "\n"], " ", $lower);
   return $cleanedText;
}






