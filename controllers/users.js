const user = require('../models/user')

module.exports = {
    index: async(req, res) => {
        try {
            const users = await user.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    data: "data masih kosong"
                })
            }
            
        } catch (error) {
            res.status(400).json({success: false})
        }
      },

    // get user by id
    show: async(req, res) => {
        try {
            const users = await user.findById(req.params.id)
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "data berhasil diubah"
            })
            
        } catch (error) {
            res.status(400).json({success: false})
        }
      },


    store: async (req, res) => {
        try {
            const users = await user.create(req.body)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }       
    },

      update: async(req, res) => {
        try {
            const users = await user.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "data berhasil diubah"
            })
            
        } catch (error) {
            res.status(400).json({success: false})
        }
      },

      delete: async (req, res) => {
        try {
            await user.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      }
}