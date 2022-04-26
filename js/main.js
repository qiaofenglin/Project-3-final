var x=20;
var y=20;
function random(a,b){
    return Math.round(Math.random()*(a-b)+b);
}


function fly(ele,obj,cb){
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var i = true;
        for(var attr in obj){
            var eNow = parseInt(getStyle(ele,attr));
            let speed = (obj[attr] - eNow)/10;
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
            if(eNow !== obj[attr]){
                i = false;
            }
            ele.style[attr] = eNow + speed + "px";
        }
        if(i){
            clearInterval(ele.t);
            if(cb){
                cb();
            }
        }
    }, 30);
}

function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}




function Spider(obj){
  fly(obj,{
    left:random(0,document.documentElement.clientWidth - 20),
    top:random(0,document.documentElement.clientHeight - 20)
    },()=>{
      Spider(obj);
  })
}

function init(){
return false;
  for(var i=0;i<40;i++){
    var div = document.createElement("div");
    div.className = "spider";
    document.body.appendChild(div);
    div.style.left = x + "px";
    div.style.top = y + "px";
    Spider(div);
  }
}
window.addEventListener('load', init);





function $(id) {
    return document.getElementById(id);
}
window.onload = function() {
    var index = 0;
    var timer = null;
    var pic = $("pic").getElementsByTagName("li");
    var num = $("num").getElementsByTagName("li");
    var oDiv = $("wrap");

    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(run, 2000); //鼠标移出后重新开始定时器
    }

    timer = setInterval(run, 4000); //定时器

    function run() { //用于定时器的函数
        index++;
        if (index >= pic.length) {
            index = 0;
        }
        change(index);
    }

    for (var i = 0; i < num.length; i++) {
        num[i].index = i; //把索引值存起来
        num[i].onmouseover = function() {
            change(this.index);
        }
    }

    function change(curindex) { //用于切换图片的函数
        for (var i = 0; i < pic.length; i++) {
            pic[i].style.display = "none";
            num[i].className = "";
        }
        pic[curindex].style.display = "block";
        num[curindex].className = "active";
        index = curindex;
    }
}

