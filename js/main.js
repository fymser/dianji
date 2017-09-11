/**
 * Created by jingwenzheng on 2017/9/11.
 */
$(function(){

    requestHitokoto();


    $("#clickreq").click(function () {

        requestHitokoto();

        $("#cover").attr("src","https://pic.freejishu.com/images/2016/08/31/c4b13c12ac85e5f0c45f96750782c626.jpg");


        $("#back").append( "<img src='"+"https://pic.freejishu.com/images/2016/08/31/c4b13c12ac85e5f0c45f96750782c626.jpg"+"'>");

    });

});


var requestHitokoto = function () {

    $.getJSON("https://sslapi.hitokoto.cn/?encode=json", function(json) {
        content = json["hitokoto"]; //获取格言内容
        author = json["from"]; //获取格言作者

        $("#content").html( content);
        $("#author").html("——" + author);
    });
};