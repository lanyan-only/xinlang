$(function(){


  //更多
  $(".gengduo").bind("tap",function(e){
    $("#slide-out").css({"left":0});
    e.stopPropagation();
  })
   $(".left").bind("tap",function(e){
    $("#slide-out").css({"left":'105%'});
    e.stopPropagation();
  })
    $('#slide-out').bind("tap",function(e){

         e.stopPropagation();
    });
    $(document).bind("tap",function(e){
      /*if(e.target==$("#slide-out").get(0)||$("#slide-out").get(0).contains("li")){
        return;
          } 
      */
      $("#slide-out").css({"left":"105%"});
    })

  
  //引导页
if(localStorage.state){
	$(".slider").remove();
	$("#container").css({visibility:'visible'});
}else{
	//另一种	
  $("#enter").tap(function(){
  	$(".slider").remove();
  	$("#container").css({visibility:'visible'});
  	localStorage.state='true';
  })
}
  var lanmus=[
    {id:1,name:'社会'},
    {id:2,name:'明星'},
    {id:3,name:'时尚'},
    {id:4,name:'娱乐'},
    {id:5,name:'娱乐'},
    {id:6,name:'娱乐'},
    {id:7,name:'娱乐'},
    {id:8,name:'娱乐'},
    {id:9,name:'娱乐'},
  ]
   var liebiaos=[
   {id:1,title:'人大代表热议习近平重要讲话',content:'习近平连续三年参加上海代表团审议,和代表们共商国是>>',src:'img/12-huiyi.png',pinglun:'190万评论',cateid:1},
   {id:2,title:'山西书记:有副市长贪腐6.44亿',content:'王儒林谈山西三大腐败案例:有领导让企业3.9亿买公务机>>',src:'img/shuji.png',pinglun:'21359评论',cateid:1},
   {id:3,title:'官员吞掉送礼纸条给商人办事',content:'纸条上写:给你3000万要不要,厅长看了把纸现场吞了>>',src:'img/li.png',pinglun:'1评论',cateid:2},
   {id:4,title:'崔天凯:美误判南海要付出代价',content:'我驻美大使:呼吁美国不要重蹈历史上曾经的战略误判>>',src:'img/nanhai.png',pinglun:'13639评论',cateid:2},
   {id:5,title:'张兰 本地人 21岁 身高165',content:'喜欢我就约我见面吧 不爱兜圈子',src:'img/zhanglan.png',pinglun:'赞助',cateid:2},
   {id:4,title:'崔天凯:美误判南海要付出代价',content:'我驻美大使:呼吁美国不要重蹈历史上曾经的战略误判>>',src:'img/nanhai.png',pinglun:'13639评论',cateid:2},
   {id:6,title:'Selina阿中离婚 吴宗宪心疼:离得好',pinglun:'3月7日',src:"img/tuijian/tuijian1.png",cateid:2},
   {id:7,title:'这是谁的中超？中超"洋枪依赖症"已病入膏肓',src:'img/tuijian/tuijian2.png',pinglun:'3月7日',cateid:3},
   {id:8,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:4},
   {id:9,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:5},
   {id:10,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:6},
   {id:11,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:7},
   {id:12,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:8},
   {id:13,title:'穆帅一走 切尔西变英超抢分王狂甩曼城阿森纳',src:'img/tuijian/tuijian3.png',pinglun:'3月7日',cateid:9}
   
  ]
  //把栏目id记录到li身上
  $(".tabs li").each(function(i){
  	$(this).data('index',lanmus[i].id);
  })
 //每个li点击的时候
  $(".tabs li").click(function(){
  	var lanmuId=$(this).data('index');
  	var shuju=liebiaos.filter(function(v,i){

  		return v.cateid==lanmuId;
  		
  	})
  	$("#list").empty();
  	
  	shuju.forEach(function(v,i){
  		var el=$("#yangben").clone();
	  	  el.attr('id','');
	  	  el.find('.sikebox img').attr('src',v.src);
	  	  el.find(".sikebox p").text(v.title);
	  	  el.find('.sikebox .say').text(v.content);
        el.find('.sikebox .pinglun').text(v.pinglun);

        el.data('index',v.id);
  		  $("#list").append(el);
  	})
  })
 
	var moren=liebiaos.filter(function(v,i){
		return v.cateid==1;
	})
	moren.forEach(function(v,i){
		var el=$("#yangben").clone();
	  	  el.attr('id','');
	  	  el.find('.sikebox img').attr('src',v.src);
        el.find(".sikebox p").text(v.title);
        el.find('.sikebox .say').text(v.content);
        el.find('.sikebox .pinglun').text(v.pinglun);
	  	  el.data('index',v.id);
  		  $("#list").append(el);
  })







	// 轮播
  var banner=document.querySelectorAll(".banner");
	var content=document.querySelector(".content");
	var lis=document.querySelectorAll(".btnbox ul li");
    var num=1;

    var move=function(){
    	if(num==3){
    		
    		num=0;
    	}
    	
    	for (var i = 0; i <lis.length; i++) {
    		lis[i].style.background="white";
    		lis[num].style.background="red";
        banner[i].style.zIndex=2;
    	}
      banner[num].style.opacity=1;
      banner[num].style.zIndex=4;
        num+=1;
    }
    var t=setInterval(move,2000);
    for (var i = 0; i < lis.length; i++) {
    	lis[i].index=i;
    	lis[i].onmouseover=function(){
    		for (var j = 0; j < lis.length; j++) {
    			lis[j].style.background="white";
          banner[j].style.zIndex=2;
          banner[j].style.opacity=0;
    		}
    		clearInterval(t);
    		lis[this.index].style.background="red";
        banner[num].style.zIndex=4;
        banner[num].style.opacity=1;
    		
    	}
    	lis[i].onmouseout=function(){
    		t=setInterval(move,2000);
    		num=this.index+1;
    	}
    }
    $('.footbox li').click(function(){
        $('.footbox li div').css({color:'#333'});
        $(this).find('div').css({color:'red'});
        $(".footbox li p").css({color:'#333'}); 
        $(this).find('p').css({color:'red'});
    })


})

//app webview  plus
document.addEventListener("plusready",function(){
  	$("#list").delegate('.col','tap',function(){
  		var index=$(this).data('index');
  		var w=plus.webview.create('show.html','show',{},{xx:index});
  		w.show();
  	})
})