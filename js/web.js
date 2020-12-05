
//获取当前时间
var date=new Date();
var year=date.getFullYear();
//月
var month=(date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1);
//日
var day=date.getDate()<10?"0"+date.getDate():date.getDate();
//时
var hh=date.getHours()<10?"0"+date.getHours():date.getHours();
//分
var mm=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
//秒
var ss=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();

var nowTime = year+"-"+month+"-"+day+" "+hh+":"+mm+":"+ss;

document.getElementById("time1").innerHTML="核验时间： "+nowTime;
var Outtime=180;
setInterval(
function(){
	if(Outtime!=0)
	Outtime=Outtime-1;
	else
	Outtime=0;
	document.getElementById("time2").innerHTML=Outtime;
},1000);
//随机获得学号
var id=["201735030311","201723130318","201723130818","201798030101","201723130448"]
var idname=["吴伟华","陈一山","刘凯旋","赵文宇","刘晓军"];
var img_id=['1','2','3','4','5'];
var randomid = id[Math.floor(Math.random() * id.length)];
var randomname = idname[Math.floor(Math.random() * idname.length)];
var randomimg= img_id[Math.floor(Math.random() * img_id.length)];
document.getElementById("xuehao1").innerHTML=randomname+'-'+randomid;;
document.getElementById("xuehao2").innerHTML=randomid;
document.getElementById("img_id").src="./img/"+randomimg+".jpg";
