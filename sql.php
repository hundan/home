<?php
 
/*替换为你自己的数据库名*/
$dbname = 'd9047bf0d0ab4';
/*填入数据库连接信息*/
$host = '192.168.1.97';
$port = 30072;
$user = 'aec09a2aa87c4';//用户名
$pwd = 'b9222b8eb7eb4';//密码
 /*以上信息都可以在数据库管里页面查找到*/
 
/*接着调用mysql_connect()连接服务器*/
$link = @mysql_connect("{$host}:{$port}",$user,$pwd,true);
if(!$link) {
    die("Connect Server Failed: " . mysql_error());
}
else{
	 die("Connect Server Success!" );
}
/*连接成功后立即调用mysql_select_db()选中需要连接的数据库*/
if(!mysql_select_db($dbname,$link)) {
    die("Connect Database Failed: " . mysql_error($link));
}
else{
	die("Connect Database Success!" );
}
 
/*至此连接已完全建立，就可对当前数据库进行相应的操作了*/
//创建一个数据库表
/*$sql = "create table if not exists test_mysql(
        id int primary key auto_increment,
        no int, 
        name varchar(1024),
        key idx_no(no))";
$ret = mysql_query($sql, $link);
if ($ret === false) {
    die("Create Table Failed: " . mysql_error($link));
} else {
    echo "Create Table Succeed<br />";
}   */
 
/*显式关闭连接，非必须*/
mysql_close($link);
?>
 
<?php