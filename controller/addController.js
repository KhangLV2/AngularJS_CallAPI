window.addController = function ($scope, $http, $location) {
  var apiUrl = "http://localhost:3000/hotel";

  $scope.onChangSubmit = function () {
    var flag = true;

    $scope.kiemTra = {
      name: false,
      cmnd: false,
      email: false,
      gioiTinh: false,
      ngaySinh: false,
      phone: false,
      country: false,
      loaiPhong: false,
      time: false,
      thanhToan: false,
    };

    if (!$scope.inputValue || !$scope.inputValue.name) {
      flag = false;
      $scope.kiemTra.name = true;
    }

    let numberPattern = /^\d+$/;
    if (!$scope.inputValue || !$scope.inputValue.cmnd) {
      flag = false;
      $scope.kiemTra.cmnd = true;
      $scope.hienThi2 = false;
    } else if (!numberPattern.test($scope.inputValue.cmnd)) {
      $scope.hienThi2 = true;
    } else {
      $scope.hienThi2 = false;
    }

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!$scope.inputValue || !$scope.inputValue.email) {
      flag = false;
      $scope.kiemTra.email = true;
      $scope.hienThi3 = false;
    } else if (!re.test($scope.inputValue.email)) {
      $scope.hienThi3 = true;
    } else {
      $scope.hienThi3 = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.gioiTinh) {
      flag = false;
      $scope.kiemTra.gioiTinh = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.ngaySinh) {
      flag = false;
      $scope.kiemTra.ngaySinh = true;
    }

    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!$scope.inputValue || !$scope.inputValue.phone) {
      flag = false;
      $scope.kiemTra.phone = true;
    } else if (!vnf_regex.test($scope.inputValue.phone)) {
      $scope.hienThi4 = true;
    } else {
      $scope.hienThi4 = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.country) {
      flag = false;
      $scope.kiemTra.country = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.loaiPhong) {
      flag = false;
      $scope.kiemTra.loaiPhong = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.time) {
      flag = false;
      $scope.kiemTra.time = true;
    }

    if (!$scope.inputValue || !$scope.inputValue.thanhToan) {
      flag = false;
      $scope.kiemTra.thanhToan = true;
    }

    if (flag) {
      var newItem = {
        ...$scope.inputValue,
      };

      $http.post(apiUrl, newItem).then(function (response) {
        if (response.status == 201) {
          $location.path("hien-thi");
        }
      });
    }
  };
};
