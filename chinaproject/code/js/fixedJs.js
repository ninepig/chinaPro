function scrollx(p) { 
var d = document, dd = d.documentElement, db = d.body, w = window, o = d.getElementById(p.id), ie6 = /msie 6/i.test(navigator.userAgent), style, timer; 
if (o) { 
  cssPub = ";position:"+(p.f&&!ie6?'fixed':'absolute')+";"+(p.t!=undefined?'top:'+p.t+'px;':'bottom:0;'); 
  if (p.r != undefined && p.l == undefined) { 
   o.style.cssText += cssPub + ('right:'+p.r+'px;'); 
  } else { 
   o.style.cssText += cssPub + ('margin-left:'+p.l+'px;'); 
  } 
  if(p.f&&ie6){ 
   cssTop = ';top:expression(documentElement.scrollTop +'+(p.t==undefined?dd.clientHeight-o.offsetHeight:p.t)+'+ "px" );'; 
   cssRight = ';right:expression(documentElement.scrollright + '+(p.r==undefined?dd.clientWidth-o.offsetWidth:p.r)+' + "px")'; 
   if (p.r != undefined && p.l == undefined) { 
    o.style.cssText += cssRight + cssTop; 
   } else { 
    o.style.cssText += cssTop; 
   } 
   dd.style.cssText +=';background-image: url(about:blank);background-attachment:fixed;'; 
  }else{ 
   if(!p.f){ 
    w.onresize = w.onscroll = function(){ 
     clearInterval(timer); 
     timer = setInterval(function(){ 
      //双选择为了修复chrome 下xhtml解析时dd.scrollTop为 0 
      var st = (dd.scrollTop||db.scrollTop),c; 
      c = st - o.offsetTop + (p.t!=undefined?p.t:(w.innerHeight||dd.clientHeight)-o.offsetHeight); 
      if(c!=0){ 
       o.style.top = o.offsetTop + Math.ceil(Math.abs(c)/10)*(c<0?-1:1) + 'px'; 
      }else{ 
       clearInterval(timer); 
      } 
     },10) 
    } 
   } 
  } 
} 
} 