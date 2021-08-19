import axios from "axios";
const apiUrl = "https://devgov3.azurewebsites.net/";

const state = () => ({
  user: null,
  isLoggingIn: false,
});

const getters = {
  isLoggedIn: (state) => {
    return state.user ? true : false;
  },
};

const actions = {
  login({ dispatch, commit }, credentials) {
    commit("loggingIn", true);
    axios
      .post(`${apiUrl}auth/credential`, { ...credentials })
      .then(({ data }) => {
        const jwt = data.access_token;
        localStorage.setItem("jwt", jwt);
        dispatch("getUser");
      })
      .catch((err) => {
        commit("loggingIn", false);
      });
  },
  getUser({ commit }) {
    commit("loggingIn", true);
    axios
      .get(`${apiUrl}auth/me`)
      .then(({ data }) => {
        commit("setUser", data);
        commit("loggingIn", false);
        localStorage.setItem("domain", data.activeDomain);
      })
      .catch((err) => {
        commit("loggingIn", false);
      });
  },
  logout({ commit }) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("domain");
    commit("setUser", null);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  loggingIn(state, isLoggingIn) {
    state.isLoggingIn = isLoggingIn;
  },
};

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
