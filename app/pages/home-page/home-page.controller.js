angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.search = '';
  homePageVm.pagination = { current_page: 0, pages: 0 };
  homePageVm.buttonText = 'Load More';

  activate();

  function activate() {
    let getParam = window.location.href.split('=')[1];
    if (getParam) {
      homePageVm.search = getParam.toLocaleLowerCase();
    }
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.pagination.current_page = data.current_page + 1;
      homePageVm.pagination.pages = data.pages;
    });
  }

  homePageVm.fetchMore = function () {
    homePageVm.buttonText = '... loading';
    Employees.loadMoreEmployees(homePageVm.pagination.current_page).then(({ data }) => {
      homePageVm.buttonText = 'Load More';
      homePageVm.pagination.current_page = data.current_page + 1;
      homePageVm.pagination.pages = data.pages;
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  };
}
