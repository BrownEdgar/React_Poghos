<<<<<<< HEAD
const axiosOptions = (target,count) => {
    return {
            baseURL: import.meta.env.VITE_DB_URL,
            url:target,
            params: {
                _limit:count
            }


    }
}

=======
const axiosOptions = (target, count) => {
  return {
    baseURL: import.meta.env.VITE_DB_URL,
    url: target,
    params: {
      _limit: count
    }
  }
}
>>>>>>> 2295e469cc115c9befa8bd29a66e7c21753c84f2
export default axiosOptions