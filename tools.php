<?php

//check if one of the common words array contains a certain word
function notCommon($word, $wordsArray){
   if(in_array($word, $wordsArray)){
    return true;
   }else{
    return false;
   }
}

?>