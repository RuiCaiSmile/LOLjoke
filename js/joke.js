$(function(){
	//启用弹出层
	$('.modal').modal();
	//输入数据，riftimg是地图显示，contentimg是弹出层显示
	var json =[{
		"name":"theshy",
		"title":"The Shy领域",
	    "txt":"传说中的LPL上单Boss——The Shy在此出没，强行收过路费无数",
	    "riftimg":"images/theshy.png",
	    "contentimg":"images/theshycontent.jpg",
	    "video":"",
	    "width":"150px",
	    "top":"90px",
	    "left":"180px"
	    },{
	    "name":"seven",
		"title":"7777777",
	    "txt":"你个小X崽子又在暗示我",
	    "riftimg":"images/777777.png",
	    "contentimg":"images/theshycontent.jpg",
	    "video":"",
	    "width":"80px",
	    "top":"550px",
	    "left":"860px"
	    },{
	    "name":"mouse",
		"title":"专业开车",
	    "txt":"追光者",
	    "riftimg":"images/mousetexi.png",
	    "contentimg":"images/theshycontent.jpg",
	    "video":"",
	    "width":"260px",
	    "top":"240px",
	    "left":"320px"
	    }];
	//显示joke
	function WarNeverChange(){
		$(json).map(function(index,item){
			var t = this;
			//召唤师峡谷地图显示
			t.box = $("<a class='"+item.name+" modal-trigger' href='#modalmsg'></a>").appendTo($(".rift"));
			t.img = $("<img src='"+item.riftimg+"' class='itemimg' alt='"+item.name+"' ctitle='"+item.title+"' cimg='"+item.contentimg+"' ctxt='"+item.txt+"' cvedio='"+item.video+"'/>").appendTo($(t.box));
			$(t.img).css({
				"width" :item.width,
				"position":"absolute",
				"top":item.top,
				"left":item.left
			});
		});	
	}
	WarNeverChange();
	//modals
	$(".itemimg").click(function(e){
		$("#modalmsg").html("");
		var content = $("<div class='modal-content'></div").appendTo($("#modalmsg"));
		var footer = $("<div class='modal-footer'></div>").appendTo($("#modalmsg"));
		$("<h4>"+$(this).attr("ctitle")+"</h4>").appendTo($(content));
		$("<p>"+$(this).attr("ctxt")+"</p>").appendTo($(content));
		$("<img class='' src='"+$(this).attr("cimg")+"' alt='"+$(this).attr("alt")+"img' />").appendTo($(content));
		$("<a class='btn-floating waves-effect waves-light red'><i class='material-icons'>movie</i></a>").appendTo($('.modal-footer'));
	});

	
});
