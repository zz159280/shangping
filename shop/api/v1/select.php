<?php
include("./config.php");

$pageIndex = $_GET['pageIndex'];
$count = $_GET["count"];

$sqlAll = "select * from shop";
$resAll = mysql_query($sqlAll);
$countAll = mysql_num_rows($resAll); 
$pageCount = ceil($countAll / $count);
$start = ($pageIndex-1)*$count;
$sql = "select * from shop limit $start, $count";
$res = mysql_query($sql);

$shop = array();

while($row = mysql_fetch_assoc($res)){
  array_push($shop, $row);
}
$json = array(
  "res_code" => 1,
  "res_message" => "查询成功",
  "res_body" => array(
    "data" => $shop,
    "pageCount" => $pageCount
  )
);
echo json_encode($json);

mysql_close();



?>