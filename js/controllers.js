/**
 * Created by HundanC on 2016-11-17.
 */
angular.module("myapp",[]).controller("mycon",function($scope,$http){
    $scope.search="";

    //获取搜索引擎数据
    $http.get("json/SE_sites.json").success(function (data) {
        //console.log('%c--搜索引擎--:','font-size:20px;color:#f03;');
        //console.log(data);
        $scope.SE_sites = data;
        $scope.mysite=$scope.SE_sites[0];
    });

    //获取网址数据
    $http.get("json/websites.json").success(function (data) {
        //console.log(data);
        $scope.websites = data;
        //console.log($scope.websites);
    });

    //搜索按钮favorite
    $scope.fun_search = function(){
        //console.info($scope.search);
        //window.location.href=$scope.mysite['url']+$scope.search;
        //window.open($scope.mysite['url']+$scope.search,"_blank");
    };

    //enter键-搜索
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            $scope.fun_search();
        }
    };


    //判断客户端是否为PC
   /* if(IsPC()){
        //func_background_init();//启用背景特效
        //func_flower();
        //rain();
    }*/
});