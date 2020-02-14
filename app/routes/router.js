const router = require('express').Router();
const User = require('../models/User');

router.get("/", (req, res) => {
    const { page, perpage, sort } = req.query;
    User.pignate({}, { page: parseInt(page, 10), limit: parseInt(perpage, 10), sort: { nama: parseInt(sort) } }).then(result => res.send(result.docs))
});

//Menambah User
router.post("/", (req, res) => {
    User.create(req.body).then(data => res.send(data));
})

//Mengedit Data
router.get("/edit/:id", (req, res) => {
    User.findByld({ _id: req.params.id }).then(data => res.send(data));
})

router.put("/edit/:id", (req, res) => {
    User.findByldAndUpdate({ _id: req.params.id }, {
        $set: {
            nama: req.body.nama,
            email: req.body.email,
            nomor: req.body.nomor
        }
    }).then(data => {
        User.find({}.then(data => res.send(data)));
    });
});

//Menghapus User
router.delete("/:id", (req, res) => {
    const id = req.params.idUser.findByldAndRemove(id).then(data => res.send("Succesfully"))
});

module.exports = router;