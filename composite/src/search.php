<?php

/*
Copyright © 2014 Momiji Yamamoto. All rights reserved.
*/

/*
imgのwidthは横幅。heightは縦幅。srcは画像URI。 
styleのtopは、画面左上からのピクセル位置。
background-colorは代表的な色名,RGB16進数の色指定でも可
positionは基本absolute。relativeやfixedという、相対位置にすると、画面がスクロールしても同じ場所に置き続けることもできる。
*/

require_once '../library/arel_xmlhelper.class.php';
 


//use the Arel Helper to start the output with arel
//start output
ArelXMLHelper::start(NULL, "../html/arel/index.php");


/*--------------------------------------------------------------------------------*/
$oObject = ArelXMLHelper::createLocationBasedPOI(
	"0", //id
	"タグに表示させる、場所の名前等", //title
	array(ジオタグを配置する座標), //location(ex:1234,5678,0)
	"画像のURI", //thumb
	"画像のURI" //icon
);

$oObject->addParameter("description", "<img style=\"opacity: 1;\" src=\"***" width=\"100%\" height=\"90%\">
	<br>ここに画像の説明文<br><br><div id=\"website\" onclick=\"openUrl('リンク先のURL',false);\">詳しくはこちら</div>");

ArelXMLHelper::outputObject($oObject);


/*--------------------------------------------------------------------------------*/

/*使用例

$oObject = ArelXMLHelper::createLocationBasedPOI(
	"1", //id
	"〜大学", //title
	array(35.123456, 139.123456, 0), //location
	"http://abc.def.jp/composite/image/icon.png", //thumb
	"http://abc.def.jp/composite/image/icon.png" //icon
);

$oObject->addParameter("description", "<img style=\"opacity: 1;\" src=\"http://abc.def.jp/composite/image/picture.jpg\" width=\"100%\" height=\"90%\">
	<br>〜大学のキャンパスはこんな感じです。行ってみてください。<br><br><div id=\"website\" onclick=\"openUrl('http://-univ.ac.jp',false);\">大学ホームページはこちら</div>");

ArelXMLHelper::outputObject($oObject);

*/

//end the output

ArelXMLHelper::end();
