<?php
   header('Content-Type:text/html;Charset=utf-8');
   $book1 = array('id' =>'00001', 'bookname' => 'JavaScript', 'price' => 90, 'tips' => 'JavaScript教程');
   $book2 = array('id' =>'00002', 'bookname' => 'JQuery', 'price' => 59, 'tips' => 'JQuery教程');
   $book3 = array('id' =>'00003', 'bookname' => 'HTML5', 'price' => 89, 'tips' => 'HTML5教程');
   $book4 = array($book1,$book2,$book3);
   echo json_encode($book4);
?>