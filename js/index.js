$(function(){
	$btn=$('.btn');
	//$max.slideToggle(500);
	$as=$('.navright')
	$btn.click(function(){
		$as.slideToggle(500);
	})
	var $box=$('.box')
	
	var $innerli=$('.inner li');
	//console.log($innerli)
  	$innerli.css({
  		height:$box.height()
  	})
	
	// $boxli=$('.box li');
	// console.log($boxli)
	// var $btu=$('.box .btu');
	// var $boxli=$('.box li')
	// //console.log($boxli)
	// $ww=$box.height();
	// //console.log($btu)
	// $btu.click(function(){
	// 	var $i=$btu.index()
	// 	console.log($i)
	// 	$boxli.css({
	// 		 top:($btu.index()+1)*(-$ww)+"px"
	// 	})
	// })
})