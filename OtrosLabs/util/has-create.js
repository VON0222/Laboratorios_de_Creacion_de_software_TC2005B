module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_labs') >= 0)) {
        return response.redirect('/acceso/available');
    }
    next();
}