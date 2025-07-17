import infoSchema from "../models/informacion.js"

const infoControler = {
create: async (req, res)=>{
    try {
        const {nameDessert, ingredients, howToMake, category, image, userId} = req.body
        const newinfo = new infoSchema({nameDessert, ingredients, howToMake, category, image, userId});
        const infoCre = await newinfo.save()
        res.status(201).json({allOk: true, message: "info created", data: infoCre})
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error creating info",
            data: error.message
        })
    }
},
readAll: async (req, res)=>{
    try {
        const infos = await infoSchema.find()
        res.status(200).json({
            allOk: true,
            message: `all info are showed `,
            data: infos
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error reading all info",
            data: error.message
        })
    }
},
readUserPosts: async (req, res)=>{
    try {
        const {userId} = req.params
        const info = await infoSchema.find({userId})
        if (!info) {
            res.status(404).json({
            allOk: false,
            message: `posts with userId:${userId}, not found `,
            data: error.message
        })
        }
        res.status(200).json({
            allOk: true,
            message: `posts with userId:${userId}, found `,
            data: info
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error reading info",
            data: error.message
        })
    }
},
readByIdAndCat: async (req, res)=>{
    try {
        const {category, _id} = req.params
        const info = await infoSchema.find({category, _id})
        if (!info) {
            res.status(404).json({
            allOk: false,
            message: `info with id:${_id}, not found `,
            data: error.message
        })
        }
        res.status(200).json({
            allOk: true,
            message: `info with id:${_id}, found `,
            data: info
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error reading info",
            data: error.message
        })
    }
},
// getName: async (req, res)=>{
//     try {
//         const {name} = req.params
//         const infoName = await infoSchema.find({name})
//         if (infoName != name) {
//             res.status(404).json({
//             allOk: false,
//             message: `info with name:${name}, not found `,
//             data: error.message
//         })
//         }
//         res.status(200).json({
//             allOk: true,
//             message: `info with name:${name}, found `,
//             data: infoName
//         })
//     } catch (error) {
//         res.status(500).json({
//             allOk: false,
//             message: "error get name info",
//             data: error.message
//         })
//     }
// },
getFlavorAndName: async (req, res)=>{
    try {
        const {name, flavor} = req.params
        const infoFlavorAndName = await infoSchema.find({flavor, name})
        if (!infoFlavorAndName) {
            res.status(404).json({
            allOk: false,
            message: `info with name:${name}, not found `,
            data: error.message
            
        })
        } 
        res.status(200).json({
            allOk: true,
            message: `info with name: ${name}, found `,
            data: infoFlavorAndName
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error get name info",
            data: error.message
        })
    }
},
update: async (req, res)=>{
    try {
        const {id} = req.params
        const {nameDessert, ingredients, howToMake, category, image, userId} = req.body
        const infoUpdate = await infoSchema.findByIdAndUpdate(id, {nameDessert, ingredients, howToMake, category, image, userId})
        if (!infoUpdate) {
            res.status(404).json({
            allOk: false,
            message: `info with id:${id}, not found `,
            data: null
        })
        }
        res.status(200).json({
            allOk: true,
            message: `info with id:${id}, was update `,
            data: infoUpdate
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error update info",
            data: error.message
        })
    }
},
delete: async (req, res)=>{
    try {
        const {id} = req.params
        const infoUpdate = await infoSchema.findByIdAndDelete(id)
        if (!infoUpdate) {
            res.status(404).json({
            allOk: false,
            message: `info with id:${id}, was not found`,
            data: null
        })
        }
        res.status(200).json({
            allOk: true,
            message: `info with id:${id}, was deleted `,
            data: null
        })
    } catch (error) {
        res.status(500).json({
            allOk: false,
            message: "error delete info",
            data: error.message
        })
    }
},
}

export default infoControler