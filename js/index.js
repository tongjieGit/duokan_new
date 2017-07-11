var imgData = [];//存放ppt图片数组
var imgDataArr = [];
var imgNum = 0;
var pptAjaxObj = null;
$(function() {
    $(window).load(function() {
        $.ajax({
            url: 'data/img.js?',
            type: 'get',
            data: {
                // pageidx: 1,
                // pagenum: 100,
                // starttime: starttime,
                // endtime: endtime,
            },
            success: function(data) {
                if(typeof(data) != "undefined" && data.length > 0){
                    var ajaxData = eval('('+data+')');
                    // console.log("ajax ajaxData="+ajaxData);
                    for (var i = 0; i < ajaxData.length; i++) {
                        imgDataArr[i] = ajaxData[i].img;
                    }
                    changeImg();
                }
            }
        });
    });
 
});

function changeImg(){
    $('#img_src').attr('src',imgDataArr[imgNum]);
    setInterval(function(){
        imgNum = (++imgNum)%5;
        $('#img_src').attr('src',imgDataArr[imgNum]);
        // console.log(imgDataArr[imgNum])
    },3000); 
}



