'use strict';

/* Services */

var baseurl = 'http://localhost:10088/cophea/copheaserver/';
var weburl = 'http://localhost:10088/cophea/copheaweb/';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  //---------------- 用户 service ------------------
  .factory('user',function($http){
    var factory = {};
  	//获取当前用户id
    factory.getmid = function(){
      var url = baseurl + "api/Account/getmid?callback=JSON_CALLBACK";
      return $http.jsonp(url).success(function(response){
        return response;
      });
  	}
    //获取用户信息
  	factory.getUser = function(){
      var url = baseurl + "api/Account/getuser?callback=JSON_CALLBACK";
      return $http.jsonp(url).success(function(response){
        return response;
      });
  	}
    //修改信息
    factory.edit = function(userinfo){
      var url = baseurl + "api/Account/doSaveProfile?callback=JSON_CALLBACK";
      return $http.put(url,userinfo).success(function(response){
        
      });
    }
    //修改密码 
    factory.changePassword = function(security){
      var url = baseurl + "api/Account/doModifyPassword?callback=JSON_CALLBACK";
      return $http.put(url,security).success(function(response){
        
      });
    }
  	return factory;
  })
  //---------------- 站点 service ------------------
  .factory('site',function($http){
    var url = baseurl + "api/Account/getsite?callback=JSON_CALLBACK";
    return $http.jsonp(url).success(function(response){
      return response;
    });
  })
  //---------------- 卡型 service ------------------
  .factory('cardcategory',function($http){
  	var cards = [
  		{'name':'aa'},
  		{'name':'bb'},
  		{'name':'cc'}
  	];
  	var factory = {};
  	//获取卡型列表
    factory.getlist = function($http){
	  	return cards;
	  	/*
	  	return $http.get('api/Home/MemberCard/lists').success(function(data) {
	  		return data;
	    });
  		*/	
  	}
    //新建卡型
  	factory.add = function($http){
      cards.push({'name':'dd'});
      console.log(cards);
      return cards;
      /*
  		return $http.get('api/Home/MemberCard/lists').success(function(data) {
	  		return data;
	    });
      */
  	}
  	return factory;
  })
  //---------------- 登出 service ------------------
  .factory('logout',function($http,$window){
    var url = baseurl + "api/Passport/logout?callback=JSON_CALLBACK";
    return function(){
      $http.jsonp(url).success(function(){
        $window.location.href=weburl;
      });
    }
  });
