const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const createResponse = function (res, status, content) {
    res.status(status).json(content);
};

const signup = async function (req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        createResponse(res, 400, { status: "Tüm alanlar gerekli!" });
        return;
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    try {
        let savedUser = await user.save();
        let generatedToken = savedUser.generateToken();
        createResponse(res, 200, { token: generatedToken });
    } catch (error) {
        createResponse(res, 400, { status: "Hata oluştu!" });
    }
};

const login = async function (req, res) {
    if (!req.body.email || !req.body.password) {
        createResponse(res, 400, { status: "Tüm alanlar gerekli!" });
        return;
    }

    passport.authenticate("local", (err, currentUser) => {
        if (currentUser) {
            let generatedToken = currentUser.generateToken();
            createResponse(res, 200, { token: generatedToken });
        } else {
            createResponse(res, 400, { status: "Kullanıcı adı ya da şifre hatalı!" });
        }
    })(req, res);
};

module.exports = {
    signup,
    login,
};
