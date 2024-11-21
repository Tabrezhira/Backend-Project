const asyncHandler = (fnq) => {
    return (req, res, next) => {
        Promise.resolve(fnq(req, res, next)).
        catch((err) =>next(err))
        
    }

}


export {asyncHandler}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         awaitfn(req, res, next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             sucess:false,
//             message: err.message
//         })
//     }

// }

