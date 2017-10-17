$(function(){
    /*产生扑克牌，有由花色数字组成
    * 梅花：c
    * 方片：d
    * 红桃：h
    * 黑桃：s
    * */
    let color = ['c','d','h','s'];
    let poke = [];
    let flag = {};
    /*
    * {hua:'c',num:1},{hua:'h',num:2}
    * 加入flag后[{hua:'c',num:1},{hua:'h',num:2}]
    * c_1:true,h_2:true   hua_num
    * */
    /*for(let i=0;i<52;i++){
        let hua = color[Math.floor(Math.random()*color.length)];
        let num = Math.floor(Math.random()*13+1);
        while(flag[`${hua}_${num}`]){
            hua = color[Math.floor(Math.random()*color.length)];
            num = Math.floor(Math.random()*13+1);
        }
       poke.push({hua,num});
       flag[`${hua}_${num}`]=true;

    }
    console.log(poke);*/
    while(poke.length < 52){
        let hua = color[Math.floor(Math.random()*color.length)];
        let num = Math.floor(Math.random()*13+1);
        if(!flag[`${hua}_${num}`]){
            poke.push({hua,num});
            flag[`${hua}_${num}`]=true;
        }
    }
    let index = 0;   // 记录当前发的第几张
    /*poke[index] => {hua:c,num:10}   obj.num+obj.hua+'.png'*/
    for(let i=0;i<7;i++){
        for(let j=0;j<=i;j++){
            let left = 300-50*i + 100*j,
                top = 50*i;
            $('<div>').addClass('poke box')
                // .html(`${poke[index]['hua']}---${poke[index]['num']}`).appendTo('.zhuozi')
                .css({backgroundImage:`url(img/${poke[index].num}${poke[index].hua}.png)`}).appendTo('.zhuozi')
                .delay(index*10).animate({left,top,opacity:1});
            index++;


        }
    }

    // 剩余的牌
    for(;index<poke.length;index++){
        $('<div>').addClass('poke box')
            /*.attr('num',poke[index].num)*/
            // .html(`${poke[index]['hua']}---${poke[index]['num']}`).appendTo('.zhuozi')
            .css({backgroundImage:`url(img/${poke[index].num}${poke[index].hua}.png)`}).appendTo('.zhuozi')
            .delay(index*10).animate({left:0,top:'460px',opacity:1});


    }
    //  游戏
    // 使用事件委派  第一次点击是选中，第二次点击才是判断
    /*
    *
    *
    *
    * */
    let first = null;
    $('.zhuozi').on('click','.box',function(e){
        let element = e.target;
        $(element).css('box-shadow','0 0 0 3px #0A95DA').animate({top:'-=10'})
    })
        /*if(!first){
            // 第一次点击
            first=e.target;
        }else{
            // 第二次点击
        }*/
    })


