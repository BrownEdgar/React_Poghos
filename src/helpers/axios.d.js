const axiosOptions = (target,count) => {
    return {
            baseURL: import.meta.env.VITE_DB_URL,
            url:target,
            params: {
                _limit:count
            }


    }
}

export default axiosOptions