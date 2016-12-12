function fnConfig($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"./html/index.html",
            caseInsensitiveMatch:true,
            resolve:{
              loadPlugin:function ($ocLazyLoad) {
                  return $ocLazyLoad.load([
                      {
                          files:["./css/index.css"]
                      }
                  ])
              }
            }
        })
        .state("index.home",{
            url:"/home",
            templateUrl:"./html/home.html",
            controller:"homeCon",
            resolve:{
                loadPlugin:function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files:["./css/home.css"]
                        }
                    ])
                },
                getdata:function ($http) {
                    return $http.get("./lib/liveback.json");
                }
            }
        })
        .state("index.content",{
            url:"/content/:idx",
            templateUrl:"./html/content.html",
            controller:"contentCon",
            resolve:{
                loadPlugin:function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files:["./css/index.css"]
                        }
                    ])
                }
            }
        })
        .state("index.find",{
            url:"/find",
            templateUrl:"./html/find.html",
            caseInsensitiveMatch:true,
            resolve:{
                loadPlugin:function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files:["./css/home.css"]
                        }
                    ])
                }
            }
        })
        .state("index.mine",{
            url:"/mine",
            templateUrl:"./html/mine.html",
            caseInsensitiveMatch:true,
            resolve:{
                loadPlugin:function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files:["./css/home.css"]
                        }
                    ])
                }
            }
        })
        .state("index.exit",{
            url:"/exit",
            templateUrl:"./html/exit.html",
            caseInsensitiveMatch:true,
            resolve:{
                loadPlugin:function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files:["./css/home.css"]
                        }
                    ])
                }
            }
        });

    $urlRouterProvider.otherwise("/index/home")

}

angular.module("myApp").config(fnConfig);