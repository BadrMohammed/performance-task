import httpService from './http.service';

const fetchTeamPerformanceData = ()=> {
  httpService
    .get('/performance')

    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { fetchTeamPerformanceData };
