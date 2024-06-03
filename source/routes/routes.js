import login from "./index.js"
import dashboard from "./dashboard.js"
import weatherstation from "./weatherstation.js"

const mountRoutes = (app) => {
    app.use("/", login)
    app.use("/dashboard", dashboard)
    app.use("/weatherstation", weatherstation)
};

export default mountRoutes
