const mountRoutes = (app) => {
    app.get('/', (request, response) => {
        response.render("index");
    });
    
    app.get('/dashboard', (request, response) => {
        response.render("dashboard")
    });

    app.get('/station', (request, response) => {
        response.render("station")
    });
};

export default mountRoutes