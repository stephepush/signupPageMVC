exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Welcome! Login or Sign Up!'

    })
}

exports.postLogin = (req, res, next) => {

}