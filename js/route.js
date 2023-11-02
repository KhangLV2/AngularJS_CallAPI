var myRoute = angular.module("myRoute", ["ngRoute"]);
myRoute.config(function ($routeProvider) {
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "view/home.html",
    })
    .when("/lien-he", {
      templateUrl: "view/contact.html",
    })
    .when("/dat-phong", {
      templateUrl: "view/form.html",
      controller: addController,
    })
    .when("/hien-thi", {
      templateUrl: "view/table.html",
      controller: loadController,
    })
    .when("/update/:id", {
      templateUrl: "view/formUpdate.html",
      controller: updateController,
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
