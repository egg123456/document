MusicBox=function(){
var _this=this;
var  media= document.getElementById("musicBox"); //��ȡ���ֲ���������
//�����б�
var  musicFiles=[{name:"����",url:"1.mp3"} ,
                  {name:"��ʹ�ĳ��",url:"2.mp3"},
                  {name:"����������",url:"3.mp3"},
                  {name:"����style",url:"4.mp3"},//�������Դ
                  {name:"��˼������",url:"5.mp3"}
                 ];
//��ǰ���ڲ��ŵĸ���������               
var index=-1;
//��ǰ���ڲ��ŵĸ���
var playingFile=null;
//����ģʽ
var playMode=1;
//��һ��
this.nextMusic=function(){
	    //�жϲ���ģʽ
        if(playMode=="1"){
             index+=1;
         }
        //�жϵ�ǰ���ŵĸ���
         if(index==musicFiles.length){
             index=0;
         }
		//��ȡ��ǰ���Ÿ�������
         playingFile=musicFiles[index];
		//���뵱ǰ����
         media.setAttribute("src",playingFile.url); 
        //���Ÿ���
		 media.play();
		 //��ʾ��ǰ���ŵĸ�����
		 $("#sn_status").text("��ǰ���ŵĸ����ǣ�"+playingFile.name);
        //���ò����б����ʽ
         $("#ul_musicList").children().css({"background-color":"#FFF","border":"solid 1px #EEEEEE","color":"#000"});
        //���ò����б��е�ǰ���Ÿ�������ʽ
		 $( $("#ul_musicList").children()[index]).css({"background-color":"#2C7DE2","border":"solid 1px #206DDF","color":"#FFF"});
      
}
//��ʼ��
this.init=function(){
//ѭ������������Ƶ��������б�λ��
for(var a in musicFiles){
  $("#ul_musicList").append("<li>"+musicFiles[a].name+"</li>");
}
//��һ��
this.nextMusic();
//��ȡ����ģʽ
$("#slt_playMode").change(function(){
         playMode=$("#slt_playMode").val();
         });
}

}