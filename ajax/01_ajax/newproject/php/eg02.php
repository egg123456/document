<?php
    $userName = $_GET['userName'];//从前台获取get请求信息(userName字段)
    if($userName=='admin'){
        echo '用户名已存在';
    }else{
        echo $userName.'用户名可以使用';
    }
?>