exports.getIndex = (req, res, next) => {
    res.render('user/index', {
        path: '/',
        pageTitle: 'Your Feed'
    })
}