import login from "./index.js"
import dashboard from "./dashboard.js"
import user from './user.js'

const mountRoutes = (app) => {
    app.use("/", login)
    app.use("/dashboard", dashboard)
    app.use("/user", user)
};

export default mountRoutes
