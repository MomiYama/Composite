arel.sceneReady(function(){
	$("#op>div").each(function(){$(this).niceScroll()});
	
	var allPois = arel.Scene.getObjects();
	for(var i=0;i<allPois.length;i++){
		arel.Events.setListener(allPois[i], function(obj,type,params){
			openPopup(obj,type,params);
		});
	}

});

function routeSearch(targetLatLng,name){
	arel.Scene.getLocation(function(e){
		var currentLocation = ""+ e;
		var currentLatLng = currentLocation.replace(/,[0-9\.]+$/,"");
		var targetName = encodeURIComponent(name);
	});
}

function openPopup(obj,type,params){
	
	if( type && (type === arel.Events.Object.ONTOUCHENDED) ){
		$("#popup").html('<div class="description"><div class="scroller-container"><div class="content-header"></div></div></div><div class="strings" onclick="closePopup();"></div></div></div><div class="buttons"><div class="scroller-container"><ul></ul><div class="opCloseButton close" onclick="closePopup();">閉じる</div></div></div>');		

		
		var thumbnail = "";
		if((typeof obj.getThumbnail() !== "undefined") && (obj.getThumbnail().length > 0)){
			thumbnail = obj.getThumbnail();
		}
		
		var title = "";
		if((typeof obj.getTitle() !== "undefined") && (obj.getTitle().length > 0)){
			title = obj.getTitle();
		}
		
		var description = "";
		if((typeof obj.getParameter("description") !== "undefined") && (obj.getParameter("description").length > 0)){
			description = obj.getParameter("description");
		}
		
		var movie = "";
		if((typeof obj.getParameter("movie") !== "undefined") && (obj.getParameter("movie").length > 0)){
			movie = obj.getParameter("movie");
		}
		
		var webUrl = "";
		if((typeof obj.getParameter("url") !== "undefined") && (obj.getParameter("url").length > 0)){
			webUrl = obj.getParameter("url");
		}
		
		var nextLocation = "";
		if((typeof obj.getParameter("nextLocation") !== "undefined") && (obj.getParameter("nextLocation").length > 0)){
			nextLocation = obj.getParameter("nextLocation");
		}
		
		var nextTitle = "";
		if((typeof obj.getParameter("nextTitle") !== "undefined") && (obj.getParameter("nextTitle").length > 0)){
			nextTitle = obj.getParameter("nextTitle");
		}
		
		var nextLocationA = "";
		if((typeof obj.getParameter("nextLocationA") !== "undefined") && (obj.getParameter("nextLocationA").length > 0)){
			nextLocationA = obj.getParameter("nextLocationA");
		}
		
		var nextLocationB = "";
		if((typeof obj.getParameter("nextLocationB") !== "undefined") && (obj.getParameter("nextLocationB").length > 0)){
			nextLocationB = obj.getParameter("nextLocationB");
		}
		
		var lastLocation = "";
		if((typeof obj.getParameter("lastLocation") !== "undefined") && (obj.getParameter("lastLocation").length > 0)){
			lastLocation = obj.getParameter("lastLocation");
		}
		
		$("#popup .thumb").html('<img src="'+thumbnail+'">');
		$("#popup .content-data>div").html(title);
		$("#popup .strings").html(description);
		
		var buttons = "";
		
		$("#popup .buttons>.scroller-container>ul").html(buttons);
		
		$("#nav").hide();
		$("#popup").delay(400).fadeIn(200).delay(100).queue(function(){
			$("#popup>div").each(function(){
				$(this).niceScroll();
			});
			$(this).dequeue();
		});
		
	}
}


function closePopup(){
	$('.content-box:visible').fadeOut(200).queue(function(){
		$("#popup").html("");
		$(this).dequeue();
	});
	$("#nav").delay(200).fadeIn(200);
}


function movieDir(){
	var pathName = location.href;
	var dirAry = pathName.match(/\/[a-zA-Z0-9\-_\.]+/g);
	var dirHtml = dirAry[dirAry.length-2];
	var dirArel = dirAry[dirAry.length-1];
	var moviePath = pathName.replace(dirHtml, "").replace(dirArel, "") + "/video/";
	return moviePath;
}

function toggleInfoWindow(){
	$("#nav").toggle();
	$("#infoWindow").fadeToggle(200);
}

function showOp(){
	$("#infoWindow:visible").fadeOut(200);
	$("#op").delay(100).fadeIn(200);
}

