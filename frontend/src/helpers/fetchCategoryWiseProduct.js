const { default: BackendApi } = require("../common")

const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(BackendApi.categoryWiseProduct.url,{
        method : BackendApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}

export default fetchCategoryWiseProduct