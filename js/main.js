
/*
 *--------------字符串命名说明--------------------
 * introduce = 介绍
 * sty1 ==the first  style   第一种样式
 * trs1 = the first transition language   第一组过渡语
 * lingtheight == gramm lightheight     高亮语法
 * scrollRight == 源码版向右移动
 * drawBoard ==画板，用于盛放简历内容
 * resume == 简历内容
 * str == 总的拼接字符串
 * 
 */

/*字符拼接区*/
	 var introduce='\n  \/*我叫张三，来自广东深圳*\/\n  \/*我今年10岁，毕业于哈佛商学院，吹牛大王专业*\/\n  \/*接触前端一年，我的理想是当一名前端工程师*\/\n  \/*来看看我为你准备的菜，先来点CSS，加点基本样式......*\/';
	var sty1='\n   body{\n    transition: all 1s;\n    background:#3f5263;\n     }\n    #sourceBoard{\n    font-family:"微软雅黑";\n    overflow:auto;\n    border:3px solid black;\n    border-radius:5px;\n    width:500px;\n    height:400px;\n    font-size:14px;\n    font-weight:900;\n  }';
	var trs1 = '\n  \/*似乎有点单调，那么就让语法高亮吧*\/';
    var lightheight = '\n  #sourceBoard{\n   background:#ffffcc\n  }\n    .token.property{\n   color:#905;\n   }\n   .token.comment{\n     color:#cc3300;\n}\n    .token.selector{\n    color:#690;\n     }\n  '; 
    var trs2 = '  \/*接下来，我需要准备一下简历。先将刚才写的样式踢到一边儿去*\/'
    var scrollRight = '\n  #sourceBoard{\n    -webkit-transform: rotateY(10deg);\n    -moz-transform: rotateX(10deg);\n     position:relative;\n    left:65%; } \n    \/*OK,接下来开始准备简历板*\/\n  '
    var drawBoard = '#drawBoard{\n  color:#fff;\n  float:left;\n  position:relative;\n  top:-440px;\n  width:860px;\n  height:600px;\n  border:5px solid black;\n   border-radius:5px;\n  overflow:auto;\n  }'
    var resume= '\n  # <center>张三_前端开发简历</center>\n  ----------------------------------------------\n  ## 工作经历: ## \n  ----------------------------------------------\n  ### 1.一二三四五六七八九学校：音乐教师 ### \n   "虽然跟前端无关，但是简历一定要写出来"。By腾讯HR \n\n  ### 2. 中国某某网 (政府媒体)：前端开发 ### \n  1.  专题设计\n  2.  频道维护\n  3.  对接后台搭建前端模版\n  4.  前端性能优化与前沿技术学习\n  5.  业务成就：\n  1.主导技术选型、方案设计、代码编写，完成中国某某网二级子频道页面进行响应式改版。\n      >改版前 : http://news.lanzhou.cn/system/2018/01/27/011502919.shtml\n      >改版后 : http://news.lanzhou.cn/system/2018/01/11/011492028.shtml \n----------------------------------------------\n  ### 技术栈 ### \n----------------------------------------------\n      0. JavaScript/jQuery\n  1. Bootstrap\n  2. Nodejs\n  3. AngularJs\n  4. CSS3\n  5. Ajax\n  6. Webpack\n  ### 项目汇总 ### \n  [https://github.com/ZQ-jhon/-](https://github.com/ZQ-jhon/-)  \n  ### 博客\n  ----------------------------------------------\n  1. CSDN博客：[我的CSDN博客](http://blog.csdn.net/qq_20264891)\n  2. GitHub博客：[我的GitHub博客](https://ZQ-jhon.github.io)'
    var trs3 = '\n  \/*对了，这个简历是markdown语法，应该改成html才看着舒服。\n  *接下来变个魔术\n  *倒数3个数字\n  *3......\n  *2......\n  *1......\n  *OK,这就是为您准备的菜，祝享用愉快！ */'
	var str = introduce.concat(sty1).concat(trs1).concat(lightheight).concat(trs2).concat(scrollRight).concat(drawBoard).concat(resume).concat(trs3);

	/*常规定义区*/
	var styleTag = document.getElementById('styleTag');
	var sourceBoard = document.getElementById('sourceBoard');
	var n = 0;

	 
/*源码版控制区*/	 
var controller= setInterval(put,90);
	 function put(){

			/*吐代码区域*/
			n++;
		
			if(n>0&&n<=929){
					sourceBoard.innerHTML =str.substring(0,n)
		
		
			    styleTag.innerHTML =str.substring(0,n);
	
			}
			
			/*溢出下拉*/
			if(n>=380){
					$('#sourceBoard').animate({
						scrollTop: 1000
						}, 50);
			}
			/*代码高亮*/
			if(n>=465&&n<=929){
				sourceBoard.innerHTML =  Prism.highlight(str.substring(0,n), Prism.languages.css);
			
			}
		
		/*创建pre简历板*/
			if(n>=672&&n<=929){
				
				if(document.getElementById('drawBoard')){
					console.log('drawBoard元素已经存在');
				
				}
				else{
					var drawBoard = document.createElement('pre');
				    drawBoard.id = 'drawBoard';
				    document.body.appendChild(drawBoard);
				  
				} 

			}
			
			/*简历板溢出下拉*/
			if(n>929&&n<1885){
			var drawBoard = document.getElementById('drawBoard');
				drawBoard.innerHTML =str.substring(929,n);
				
					$('#drawBoard').animate({
						scrollTop: 1000
						}, 50);
			}

		/*简历板写完之后，需要在sourceBoard中写入魔术代码*/	
	     if(n>=1885){
	     
	     	  sourceBoard.innerHTML =  Prism.highlight(str.substring(0,929), Prism.languages.css)+Prism.highlight(str.substring(1883,n), Prism.languages.css);
	     	  
	     	  
	     }
	     
	     /*魔术代码*/
	     if(n>=1977){
	     	var drawBoard = 	document.getElementById('drawBoard');
	     	drawBoard.innerHTML =marked(str.substring(929,1885));
	     	
	     		if(n>str.length){window.clearInterval(controller)}
	     }
				
		
				
		
			console.log(n)
			
			
		
	
};
