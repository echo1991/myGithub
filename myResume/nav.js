
window.onload = initLinkStyle;

function initLinkStyle() {//获取列表数 如果点击列表 调用clickNav函数
    if(document.getElementsByTagName('li')){
        var arrLink = document.getElementsByTagName('li');
        for(var i = 0; i < arrLink.length; i++) {
            var link = arrLink[i];
            link.onclick = clickNav;
        }
    }
}

/**
 * 执行点击事件
 * @param {Object} event 鼠标事件
 */
function clickNav(event) {
    var target = event.currentTarget;

    if(document.getElementsByTagName('li')){
        var arrLink = document.getElementsByTagName('li');
        for(var i = 0; i < arrLink.length; i++) {
            var link = arrLink[i];
            if(link.className == 'active') {//改变class
                link.className = 'noActive';
            }
        }
    }

    target.className = 'active';


}


