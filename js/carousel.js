window.onload=function(){
    var aImgs=document.querySelectorAll('.banner-box .carou img');
    var left=document.querySelector('.banner-box .perv');
    var right=document.querySelector('.banner-box .next');
    var aLis=document.querySelector('.caro-bottom li');
    // console.log(aImgs);
    // console.log(left);
    // console.log(right);
    var index=0;
    var lastIndex=0;
    right.onclick = function(){
        lastIndex=index;
        aImgs[lastIndex].className='';
        aLis[lastIndex].className='';
        index++;
        index %= aImgs.length;
        aImgs[index].className='on';
        aLis[index].className='active';
    }
    //左边按钮类似
    left.onclick = function(){
        //记录上一张图片的下标
        lastIndex = index;
        //清除上一张图片的样式
        aImgs[lastIndex].className = '';
        aLis[lastIndex].className = '';

        index--;
        if (index < 0) {
            index = aImgs.length - 1;
        }
        //设置当前图片的样式
        aImgs[index].className = 'on';
        aLis[index].className = 'active';
    }
}