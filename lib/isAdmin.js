module.exports = function(req, res, next) {
    // Check if the user is logged in
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        // Check if the user is an admin
        if (req.user.username === "admin") {
            next();
        } else {
            res.send("You are not authorized to access this page :(");
        }
    }
}