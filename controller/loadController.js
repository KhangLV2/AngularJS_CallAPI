window.loadController = function ($scope, $http, $location) {
  $scope.mess = "Danh sách khách hàng";

  var apiUrl = "http://localhost:3000/hotel";

  $scope.getData = function () {
    $http.get(apiUrl).then(function (response) {
      if (response.status == 200) {
        $scope.danhSanh = response.data;
      }
    });
  };
  $scope.getData();

  //Xóa
  $scope.onDelete = function (deleteID) {
    let cofirm = window.confirm("Bạn có muốn xóa không");
    if (cofirm) {
      $http.delete(`${apiUrl}/${deleteID}`).then(function (response) {
        if (response.status == 200) {
          //gọi lại data để cập nhật lại bảng
          $scope.getData();
        }
      });
    }
  };

  //lấy ra id
  $scope.onEdit = function (id) {
    $location.path(`update/${id}`);
  };
};
