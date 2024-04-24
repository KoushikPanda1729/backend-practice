// const asyncHandler = (requestHandler) => (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next))
//         .catch((error) => {
//             console.log("Error in async Handler >> ", error);
//             return null;
//         })
// }

// export default asyncHandler

// ====================================================================

const asyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    } catch (error) {
        console.log("Error in async Handler >> ", error);
    }
}

export default asyncHandler