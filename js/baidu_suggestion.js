/**
 * Created by HundanC on 2017-2-5.
 */
$(function(){
    //document.getElementById("search_keyword").focus();
    var txtObj = document.getElementById("alertSpan");

    //回调函数，用于获取用户当前选择的文字
    function show(str){
        txtObj.innerHTML = str;
    }
    var params = {
        "XOffset": 0,                   //提示框位置横向偏移量,单位px
        "YOffset": 0,                   //提示框位置纵向偏移量,单位px
        "width": 205,                   //提示框宽度，单位px
        "fontColor": "#666",            //提示框文字颜色
        "fontColorHI": "#222",          //提示框高亮选择时文字颜色
        "fontSize": "16px",             //文字大小
        "fontFamily": "微软雅黑",       //文字字体
        "borderColor": "#d8d8d8",       //提示框的边框颜色
        "bgcolorHI": "#e8e8e8",         //提示框高亮选择的颜色
        "sugSubmit": true,              //在选择提示词条是是否提交表单
    };
    BaiduSuggestion.bind("suggestion",params,show);
});
