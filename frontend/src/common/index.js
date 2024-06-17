const backend_url = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : `${backend_url}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backend_url}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backend_url}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backend_url}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backend_url}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backend_url}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backend_url}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backend_url}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backend_url}/api/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backend_url}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backend_url}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backend_url}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backend_url}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backend_url}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backend_url}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backend_url}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backend_url}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backend_url}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backend_url}/api/filter-product`,
        method : 'post'
    }
}


export default SummaryApi