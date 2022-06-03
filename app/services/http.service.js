import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const configOptions = config;

    configOptions.baseURL = 'https://fe-task.getsandbox.com';

    return config;
  },
  (error) => console.log(error)
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
