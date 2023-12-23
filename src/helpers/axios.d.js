const axiosOptions = (target, count) => {
<<<<<<< HEAD

    return {   
    baseURL: "https://jsonplaceholder.typicode.com/",
    url:target,
    params:{
    _limit:count
    }
 }
=======
  return {
    baseURL: import.meta.env.VITE_DB_URL,
    url: target,
    params: {
      _limit: count
    }
  }
>>>>>>> 340b5e19c2e3d2794cb78d258557759ea0eb766a
}
export default axiosOptions