<?php

// 검색 문자열을 받지 않으면 검색을 수행할 수 없다.
if(empty($_GET['state'])) {
    echo "<city>No State Sent</city>";
} else {
    // 검색의 처음과 끝에서 공백문자를 제거한다
    $search = trim($_GET['state']);
    switch($search) {
      case "MO" :
         $result = "[ { 'value' : 'stlou', 'title' : 'St. Louis' }, " . 
                   "{ 'value' : 'kc', 'title' :' Kansas City' } ]";
         break;
      case "WA" :
         $result = "[ { 'value' : 'seattle', 'title' : 'Seattle' }, " .
                   "  { 'value' : 'spokane', 'title' : 'Spokane' }, " .
                   "  { 'value' : 'olympia', 'title' : 'Olympia' } ]";
         break;
      case "CA" :
         $result = "[ { 'value' : 'sanfran', 'title' : 'San Francisco' }, " .
                   "  { 'value' : 'la',      'title' : 'Los Angeles'   }, " .
                   "  { 'value' : 'web2',    'title' : 'Web 2.0 City'  }, " .
                   "  { 'value' : 'barcamp', 'title' : 'BarCamp'       } ]";
         break;
      case "ID" :
         $result = "[ { 'value' : 'boise', 'title' : 'Boise' } ]";
         break;
      default :
         $result = "[ { 'value' : '', 'title' : 'No Cities Found' } ]";
         break;
    }

    echo $result;
}
?>