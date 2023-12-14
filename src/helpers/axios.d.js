const axiosOptions = (target, count) => {

    return {   
    baseURL: "https://jsonplaceholder.typicode.com/",
    url:target,
    params:{
    _limit:count
    }
 }
}
export default axiosOptions