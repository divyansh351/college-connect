module.exports.registerUser = async (req, res, next) => {
    try {
        // .login() and .register() methods provided by passport.js
        const { email, admission_no, is_admin, password } = req.body;
        const user = new User({ email, admission_no, is_admin });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to College-Connect!');
            res.redirect('/courses');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}