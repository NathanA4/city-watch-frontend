export const env = {
    prod: process.env.NODE_ENV === 'production',
    apiUrl: process.env.VUE_APP_API_URL,
    frontUrl: process.env.VUE_APP_FRONT_URL,
};
