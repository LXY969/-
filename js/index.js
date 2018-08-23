
// 规定好每张图片属于的位置和状态
var states =[{Zindex:1,width:120,height:150,top:69,left:134,opacity:0.2},
            {Zindex:2,width:130,height:170,top:59,left:0,opacity:0.5},
            {Zindex:3,width:170,height:218,top:24,left:110,opacity:0.7},
            {Zindex:4,width:224,height:238,top:14,left:263,opacity:1},
            {Zindex:3,width:170,height:218,top:24,left:470,opacity:0.7},
            {Zindex:2,width:130,height:170,top:59,left:620,opacity:0.5},
            {Zindex:1,width:120,height:150,top:69,left:500,opacity:0.2},
]
var count=0;
var lis = $('#box li');
var star
function moew(){
    lis.each(function(index,ele){
        var state = states[index];
        // $(ele).css({'z-index':state.Zindex,'width':state.width,'height':state.height,'top':state.top,'left':state.left,'opacity':state.opacity})
        $(ele).css({'z-index':state.Zindex}).finish().animate(state,1000)
    })
}
lis.each(function(index,ele){
    var state = states[index];
    // $(ele).css({'z-index':state.Zindex,'width':state.width,'height':state.height,'top':state.top,'left':state.left,'opacity':state.opacity})
    $(ele).css({'z-index':state.Zindex}).finish().animate(state,1000)
})

function next(){
    states.unshift(states.pop())
    moew()
}

// 下一张
$('.next').click(function(){
    // 原理 ：把数组中的最后一个元素移动到数组的第一个
   next()
})

// 上一张
$('.prev').click(function(){
    // 把数组的第一个元素移动到最后一位
    states.push(states.shift())
    moew()
})


// 自动轮播
var time =null;
function autoPlay(){
    time=setInterval(function(){
        next()
    },1000)
}


autoPlay()
// 停止轮播
$('#box section').add('#box li').hover(function(){
    clearInterval(time)
},function(){
    autoPlay()
})





// 将状态和位置赋给li
// $('.prev').click(function(){   
//     clearInterval(star) 
//     console.clear()
//     count++;
//     if(count>=states.length){
//         count=0
//     }else{
//         count=count
//     }
    
// lis.each(function(index,ele){
//     var num = index+count;
//     if(num>states.length-1){
//         num=num-states.length
//     }else{
//         num=num
//     }
//     console.log(num);
    
//     var state = states[num];
//     // $(ele).css({'z-index':state.Zindex,'width':state.width,'height':state.height,'top':state.top,'left':state.left,'opacity':state.opacity})
//     $(ele).css({'z-index':state.Zindex}).finish().animate(state,1000)
//     })
//    star = setInterval(move,2000)
// })

// $('.next').click(function(){
//     count--;
//    count=count<=-1?states.length-1:count;
//    lis.each(function(index,ele){
//        var num = index+count;
//        num=num>states.length-1?num-states.length:num;

//        var state = states[num];
//         $(ele).css({'z-index':state.Zindex}).finish().animate(state,1000)
//    })
// })

// function move(){
//      console.clear()

//     count--;
//     count=count<=-1?states.length-1:count;
//     lis.each(function(index,ele){
//         var num = index+count;
//         num=num>states.length-1?num-states.length:num;
//         console.log(num);
        
//         var state = states[num];
//          $(ele).css({'z-index':state.Zindex}).finish().animate(state,1000)
//     })
// }

// star =  setInterval(move,3000)

























