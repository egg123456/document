MusicBox=function(){
var _this=this;
var  media= document.getElementById("musicBox"); //获取音乐播放器对象
//音乐列表
var  musicFiles=[{name:"犯错",url:"1.mp3"} ,
                  {name:"天使的翅膀",url:"2.mp3"},
                  {name:"无名轻音乐",url:"3.mp3"},
                  {name:"江南style",url:"4.mp3"},//错误的资源
                  {name:"相思风雨中",url:"5.mp3"}
                 ];
//当前正在播放的歌曲的索引               
var index=-1;
//当前正在播放的歌曲
var playingFile=null;
//播放模式
var playMode=1;
//下一首
this.nextMusic=function(){
	    //判断播放模式
        if(playMode=="1"){
             index+=1;
         }
        //判断当前播放的歌曲
         if(index==musicFiles.length){
             index=0;
         }
		//获取当前播放歌曲对象
         playingFile=musicFiles[index];
		//载入当前歌曲
         media.setAttribute("src",playingFile.url); 
        //播放歌曲
		 media.play();
		 //显示当前播放的歌曲名
		 $("#sn_status").text("当前播放的歌曲是："+playingFile.name);
        //设置播放列表的样式
         $("#ul_musicList").children().css({"background-color":"#FFF","border":"solid 1px #EEEEEE","color":"#000"});
        //设置播放列表中当前播放歌曲的样式
		 $( $("#ul_musicList").children()[index]).css({"background-color":"#2C7DE2","border":"solid 1px #206DDF","color":"#FFF"});
      
}
//初始化
this.init=function(){
//循环放入歌曲名称到：歌曲列表位置
for(var a in musicFiles){
  $("#ul_musicList").append("<li>"+musicFiles[a].name+"</li>");
}
//下一首
this.nextMusic();
//获取播放模式
$("#slt_playMode").change(function(){
         playMode=$("#slt_playMode").val();
         });
}

}