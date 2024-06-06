import login from "./index.js"
import dashboard from "./dashboard.js"
import weatherstation from "./weatherstation.js"
import reading from "./reading.js"

const mountRoutes = (app) => {
    app.use("/", login)
    app.use("/dashboard", dashboard)
    app.use("/weatherstation", weatherstation)
    app.use("/reading", reading)
};

export default mountRoutes
