module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'Morate biti ulgovani');
        return res.redirect('/login');
    }
    next();
}