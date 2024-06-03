import login from "./index.js"
import dashboard from "./dashboard.js"
import station from "./station.js"

const mountRoutes = (app) => {
    app.use("/", login)
    app.use("/dashboard", dashboard)
    app.use("/station", station)
};

export default mountRoutes
