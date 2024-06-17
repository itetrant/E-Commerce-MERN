const productModel = require("../../models/productModel")

const getProductController = async(req,res)=>{
    try{

        // Lấy các tham số page và limit từ query string, với giá trị mặc định là 1 và 10
        var page = parseInt(req.query.page) || 1;
        var limit = parseInt(req.query.limit) || 10;
        if (limit > 50) limit = 50;
        if (page < 1) page = 1;
        
        // Tính toán số tài liệu cần bỏ qua
        const skip = (page - 1) * limit;

        const allProduct = await productModel.find().sort({ createdAt : -1 }).skip(skip).limit(limit);

        res.json({
            message : "All Products",
            success : true,
            error : false,
            data : allProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = getProductController