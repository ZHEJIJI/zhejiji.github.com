/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 14:42:22
 * @version $Id$
 */

 $(init)
 function init() {
 	$(".ui-box-small").click(function() {
 		$("body").append("<div class='ui-box-large-border'><div class='ui-box-large'></div></div>");
 		$(".ui-box-large-border").click(function() {
 			$(".ui-box-large-border").hide();
 		});
 	});
 	$(".ui-li-two-box").hide();
 	$(".ui-li-three-box").hide();
 	$(".ui-li-one").click(function() {
 		$(this).css("background-color","#c0c0c0");
 		$(".ui-li-two").css("background-color","#fff");
 		$(".ui-li-three").css("background-color","#fff");
 		$(".ui-li-two-box").hide();
 		$(".ui-li-three-box").hide();
 		$(".ui-li-one-box").slideDown();
 	});
 	$(".ui-li-two").click(function() {

 		$(this).css("background-color","#c0c0c0");
 		$(".ui-li-one").css("background-color","#fff");
 		$(".ui-li-three").css("background-color","#fff");
 		$(".ui-li-one-box").hide();
 		$(".ui-li-three-box").hide();
 		$(".ui-li-two-box").slideDown();
 	});
 	$(".ui-li-three").click(function() {
 		$(this).css("background-color","#c0c0c0");
 		$(".ui-li-one").css("background-color","#fff");
 		$(".ui-li-two").css("background-color","#fff");
 		$(".ui-li-two-box").hide();
 		$(".ui-li-one-box").hide();
 		$(".ui-li-three-box").slideDown();
 	});
 	var num=3;
 	$(".ui-top").on('click', '.ui-line-delete',function() {
 		$(this).parent().remove();
 		$(".ui-line").each(function(){
 			var ind = $(this).index() + 1;
 			$(this).children(".ui-line-data").text(ind);
 		});
 		num--;
 	});
 	$(".ui-button").click(function() {
 		num++;
 		var add = $("<div class='ui-line'><div class ='ui-line-data'> "+ num +" </div>"
 			+ "<div class = 'ui-line-mid'></div> "
 			+ "<div class = 'ui-line-delete'>Delete</div></div>");
 		$(".ui-top").append(add);
 	});
 };