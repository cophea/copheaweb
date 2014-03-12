'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('globleCtrl', ['$scope','$window','user','site','logout',function($scope,$window,user,site,logout) {
    $scope.name='globle';
    //当前登录者uid
    user.getmid().then(function(response){
      if(response.data.status){
        $scope.mid = response.data;
        //站点配置数据
        site.then(function(response){
          $scope.site = response.data;
        });
        //用户的基本资料
        user.getUser().then(function(response){
          $scope.userinfo = response.data;
          //console.log('globle:'+$scope.userinfo);
        });
      }else{
        $window.location.href="http://localhost:10088/cophea/copheaweb/";
      }
    });

    //登出
    $scope.logout=function(){
      logout();
    }
  }])
  .controller('operationCtrl', ['$scope','$window',function($scope,$window) {

  }])
  .controller('cardcategoryCtrl', [function() {

  }])
  .controller('memberCtrl', [function() {

  }])
  .controller('commodityCtrl', [function() {

  }])
  .controller('creditCtrl', [function() {

  }])
  .controller('analysisCtrl', [function() {

  }])
  .controller('settingCtrl', [function() {

  }])
  .controller('Ctrl', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    $scope.name ='liujun';
  })
  //------ 会员卡型 ----------
  .controller('cardAddCtrl', function($scope,$http,$location,cardcategory) {
    $scope.modalId="addCardCategory";
    $scope.modalTitle = '新建卡型';
    
    //$scope.cardcategorys = cardcategory.getlist();
    //$('#addCardCategory').modal('hide');
    
    $scope.addCard = function(card){
      alert('sss');
      var tmp = cardcategory.add();
      
      /*
      $http.post('api/Home/CardCategory/add',card).success(function(){
        $scope.card = angular.copy({});
        $('#addCardCategory').modal('hide');
      });
      */  
    }
    
  })
  .controller('cardEditCtrl', function($scope,$http,$location) {
    $scope.modalId="editCardCategory";
    $scope.modalTitle = '编辑卡型';
    $scope.editCard = function(card){
      console.log(card);
      $scope.card = angular.copy({});
      $('#addCardCategory').modal('hide');
    }
  })
  .controller('cardListCtrl',function($scope,$http,$location,cardcategory){
    $scope.cardcategorys = cardcategory.getlist();
  })
  //------------ 会员卡 -----------
  .controller('memberCardListCtrl',function($scope,$http,$location,cardcategory){
    $scope.membercards = cardcategory.getlist();
  })
  .controller('memberCardAddCtrl',function($scope,$http,$location){
    $scope.addMemberCard = function(membercard){
      alert(membercard.name);
      console.log(membercard);
      $http.post('api/Home/MemberCard/add',membercard).success(function(){
        //$scope.card = angular.copy({});
        //$('#addCardCategory').modal('hide');
      });
    }
  })
  .controller('vEditCtrl',function($scope){

  })
  .controller('memberCardDetailCtrl',function($scope){

  })
  .controller('accoutEditCtrl',function($scope,user){
    $scope.doEdit=function(userinfo){
      user.edit(userinfo).then(function(){
          alert('修改完成');
          $('#account_profile_edit').modal('hide');
      });
    }
  })
  .controller('accoutSecurityCtrl',function($scope,user){
    $scope.doChange = function(security){
      user.changePassword(security).then(function(response){
        if(response.data.status){
          alert('修改完成');
          $('#account_password_edit').modal('hide');
        }
      });
    }
  });