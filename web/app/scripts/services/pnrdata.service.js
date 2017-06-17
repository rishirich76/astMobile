'use strict';

var app = angular.module('astMobApp');

app.service('pnrService', ['$http', '$log', function($http, $log) {
    this.getPnrdata = function(text, cb) {
        console.log("In PNR service , PNR :  " + text);
        $http({
            method: 'GET',
            url: 'http://localhost:8080/journeyplanner/cjp/app/rest/agentaction/ast/pnractiondata',
            params: {pnr: text}
        }).then(
            function success(res) {
                if (res.data != null && res.data.pnrdata != null) {
                    var result = res.data;
                    console.log("In PNR service response :  " + JSON.stringify(res.data.pnrdata));
                    return res.data.pnrdata;
                } else {
                    return 'NO RESPONSE FROM SERVICE';
                }
            },
            function error(res) {
                $log.error('In error response');
                return 'No response from server Or Server is down';
                // if (res.data == null) {
                //      return 'No response from server Or Server is down';
                //  }
                //  else {
                //      return res.data;
                //  }
            }
        );

    };
}]);