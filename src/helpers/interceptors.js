import axios from "axios";

export function axiosAuthSetup() {
  axios.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("jwt");
      const domain = localStorage.getItem("domain");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (domain) {
        config.headers.domain = domain;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
