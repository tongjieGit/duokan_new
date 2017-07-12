var newBookImgArr = [];//存放ppt图片数组
var imgDataArr = [];
var imgNum = 0;
var newBookImgNum = 0;
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
        $.ajax({
            url: 'data/newBook.js?',
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
                    newBookImgArr = ajaxData;
                    // console.log("ajax ajaxData="+ajaxData);
                    // for (var i = 0; i < ajaxData.length; i++) {
                    //     newBookImgArr[i] = ajaxData[i].img;
                    // }
                    changeNewBookImg();
                }
            }
        });
    }); 
});

function changeImg(){
    $('#img_src').attr('src',imgDataArr[imgNum]);
    setInterval(function(){
        imgNum = (++imgNum)%(imgDataArr.length);
        $('#img_src').attr('src',imgDataArr[imgNum]);
        // console.log(imgDataArr[imgNum])
    },3000); 
}

function changeNewBookImg() {
    $('#newBook').attr('src',newBookImgArr[newBookImgNum].img);
    $('#newBookName').text(newBookImgArr[newBookImgNum].name);
    // console.log(newBookImgArr)
    setInterval(function () {
        newBookImgNum = (++newBookImgNum)%(newBookImgArr.length);
        // console.log(newBookImgArr[newBookImgNum])
        $('#newBook').attr('src',newBookImgArr[newBookImgNum].img);
        $('#newBookName').text(newBookImgArr[newBookImgNum].name);
    },1500);
}

