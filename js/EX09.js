/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:16:09
 * @version $Id$
 */


 $(init)
 function init() {
 	
 	$("#myMap").hide();
 	$("#result").hide();
 	$("#myMap-two").hide();
 	$("#result-two").hide();
 	$("#myMap-three").hide();
 	
 	$("#one").click(function() {
 		$("#myMap").show();
 		$("#result").show();
 		//$("body").append("<div id='myMap'></div><div id='result'></div>");
 		$("#myMap-two").hide();
 		$("#result-two").hide();
 		$("#myMap-three").hide();
 		var map = new BMap.Map("myMap"); 
 		var point = new BMap.Point(120.141892, 30.258483);// 定位西湖
 		map.centerAndZoom(point, 15);
 		var myIcon = new BMap.Icon("market.png", new BMap.Size(30,26));       
 		var marker = new BMap.Marker(point,{icon: myIcon});     
 		map.addOverlay(marker); 
 		marker.enableDragging();    
 		marker.addEventListener("dragend", function(e){    
 			alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
 		});
 		var local = new BMap.LocalSearch(map, {
 			pageCapacity: 100,
 			renderOptions: {
 				map: map,
 				autoViewport: true,
 				panel:"result"
 			}
 		});
 		local.searchNearby("宾馆",point);

 	});
 	$("#two").click(function() {
 		$("#myMap-two").show();
 		$("#result-two").show();	
 		//$("body").append(" <div id='myMap-two'></div><div id='result-two'><p>起点：杭师大仓前校区</p><p id='terminal'>终点：宾馆</p></div>");
 		$("#myMap-three").hide();
 		$("#myMap").hide();
 		$("#result").hide();
 		var map = new BMap.Map("myMap-two"); 
        var point = new BMap.Point(120.141892, 30.258483);// 定位西湖
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);// 创建标注    
        map.addOverlay(marker);
        var start="杭州师范大学仓前新校区",end="宾馆";
        var transit = new BMap.TransitRoute(map, { 
        	renderOptions:{
        		map: map,
        		panel:"result-two"
        	} 
        });
        transit.search(start,end); 
    });
 	$("#three").click(function() {
 		$("#myMap-three").show();
 		//$("body").append("<div id='myMap-three'></div>");
 		$("#myMap-two").hide();
 		$("#result-two").hide();
 		$("#myMap").hide();
 		$("#result").hide();
 		var map = new BMap.Map("myMap-three",{enableMapClick:false}); 
             var point = new BMap.Point(120.01504, 30.296058);// 定位杭师大仓前新校区
             map.centerAndZoom("杭州师范大学仓前新校区", 18);
             var marker = new BMap.Marker(point);// 创建标注    
             var data_info = [
             [120.014297, 30.295125,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>体育场<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//体育馆
             [120.012298, 30.296259,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>篮球场<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//篮球场
             [120.017315, 30.294875,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑1号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//博文苑1
             [120.017185, 30.295397,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑2号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//2
             [120.016248, 30.294782,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑3号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//3
             [120.016167, 30.29502,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑4号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//4
             [120.01648, 30.295717,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑5号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//5
             [120.016252, 30.295856,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑6号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//6
             [120.015298, 30.296122,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑7号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//7
             [120.015168, 30.296391,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑8号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//8
             [120.015767, 30.29653,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑9号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//9
             [120.015734, 30.296972,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑10号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//10
             [120.022206, 30.29873,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>博文苑11号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//图书馆
             [120.01581, 30.293667,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>食堂<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//食堂
             [120.017212, 30.293729,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>2号食堂<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//2
             [120.020652, 30.295035,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园1号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//1恕园
             [120.020419, 30.295725,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园2号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//2
             [120.018671, 30.294364,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园3号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//3
             [120.019074,30.295278,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园7号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//7
             [120.020594, 30.296801,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园9号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//9
             [120.020441, 30.29696,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园10号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//10
             [120.019814, 30.296392,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园11号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//11
             [120.019819, 30.296789,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园12号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//12
             [120.019123, 30.29652,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园13号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//13
             [120.019334, 30.296672,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园14号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//14
             [120.020809, 30.297171,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园15号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//15
             [120.020571, 30.297381,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园16号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//16
             [120.019736, 30.297097,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园17号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//17
             [120.017735, 30.296665,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园19号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//19
             [120.0201, 30.297748,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园20号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//20
             [120.019543, 30.297393,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园21号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//21
             [120.017501, 30.296887,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园24号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//24
             [120.018317, 30.297455,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>公共艺术部<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//公共艺术部
             [120.020351, 30.29795,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园27号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//27
             [120.019763, 30.298013,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园28号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//28
             [120.019305, 30.297911,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园29号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],
             [120.018379, 30.29795,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园30号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//30
             [120.017495, 30.297982,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园35号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"],//35
             [120.014032, 30.297222,"<img id='pic' src='img/pic.png'> "
             +"<p id='name'>恕园38号楼<span id='price'>￥XXX</span></p>"
             +"<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i> "
             +"<p id='common'>X.X/X分   XXX条评论</p>"]//38
             ];
	         var opts = {width : 230,     // 信息窗口宽度
				height: 160,     // 信息窗口高度
				padding:0,
				//title : "1" , // 信息窗口标题
				//enableMessage:true//设置允许信息窗发送短息
			};
			for(i=0;i<data_info.length;i++){
		         var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		         var content = data_info[i][2];
	   	             map.addOverlay(marker);               // 将标注添加到地图中
	   	             addClickHandler(content,marker);
	   	         }
	   	         function addClickHandler(content,marker){
	   	         	marker.addEventListener("click",function(e){
	   	         		openInfo(content,e)}
	   	         		);
	   	         }
	   	         function openInfo(content,e){
	   	         	var p = e.target;
	   	         	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	            	var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}
});
};

