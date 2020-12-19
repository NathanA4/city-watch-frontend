import axios from 'axios';

export const CityStore = {
    namespaced: true,
    state: {
        loading: false,
        cityData: null,
        allCities: []
    },
    getters: {
        loading: (state) => {
            return state.loading;
        },
        cityData: state => {
            return state.cityData;
        },
        allCities: state => {
            return state.allCities;
        }
    },
    mutations: {
        startLoading(state) {
            state.loading = true;
        },
        stopLoading(state) {
            state.loading = false;
        },
        setAllCities: (state, payload) => {
            state.allCities = payload;
        },
        setCityData: (state, payload) => {
            state.cityData = payload;
        }
    },
    actions: {
        getAllCities({commit}) {
            commit('startLoading');
            axios.get('city').then(({data}) => {
                commit('setAllCities', data);
                commit('stopLoading');
            });
        },
        getCityById({commit}, cityId) {
            commit('startLoading');
            axios.get(`city/${cityId}`).then(({data}) => {
                commit('setCityData', data);
                console.log(data)
                commit('stopLoading');
            });
        },
    }
};
