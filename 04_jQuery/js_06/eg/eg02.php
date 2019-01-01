<?php
    $userName = $_GET['userName'];
    if ($userName == 'admin') {
        echo '用户已存在';
    }else{
        echo.$userName.'用户名可以使用';
    }
?>