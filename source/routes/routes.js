import login from "./index.js"
import dashboard from "./dashboard.js"

const mountRoutes = (app) => {
    app.use("/", login)
    app.use("/dashboard", dashboard)
};

export default mountRoutes
