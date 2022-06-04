angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.search = '';

  activate();

  function activate() {
    let getParam = window.location.href.split('=')[1];
    if (getParam) {
      homePageVm.search = getParam.toLocaleLowerCase();
    }
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }
}
