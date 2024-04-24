import asyncHandler from "../utils/asyncHandler.util.js"

const registerController = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        message: "Register successfull by koushik"
    })
})

export default registerController