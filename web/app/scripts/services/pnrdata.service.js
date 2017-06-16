'use strict';

var app = angular.module('astMobApp');

var pnrService = app.service('pnrService', function(param) {

    console.log('Hi....');
    $http.get("/json/pnrdataresponse.json").success(function(response){
        console.log(response);
        return response;
    });


    // var applicationUrl;

    // if($location.host() == 'localhost' && $location.port() == '9000'){
    //    applicationUrl = "http://localhost:9000"+url;
    // }
    // else{
    //     var portNo = $location.port();
    //     var portToAppend = "";
    //     if(portNo > 0){
    //         portToAppend = ":"+ portNo;
    //     }
    //     applicationUrl = $location.protocol()+"://"+$location.host()+portToAppend+"/ast"+url;
    // }
    
    // return $http({
    //     method: AppConstants.POST,
    //     url: applicationUrl,
    //     dataType: AppConstants.DEFAULT_DATATYPE,
    //     /*data: params,*/
    //     headers: AppConstants.DEFAULT_HEADER
    //     }).then(function (response) {
    //         return response;
    // });
});