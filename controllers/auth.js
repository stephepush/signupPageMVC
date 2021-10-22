exports.getLogin = (req, res, next) => {
    res.render('auth/landing', {
        path: '/',
        pageTitle: 'Welcome! Login or Sign Up!'
    })
}

exports.postLogin = (req, res, next) => {

}