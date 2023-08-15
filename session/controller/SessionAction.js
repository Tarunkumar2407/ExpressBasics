const homePage = (req, res) => {
    res.send("Bro this is the homepage")
}

class SessionAction {
    static getSessionInfo = (req, res) => {
        res.send("getting session info")
        console.log(req.session)
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        console.log(req.session.cookie.originalMaxAge)
        console.log(req.sessionID)
}
    static deleteSession = (req, res) => {
        req.session.destroy(() => {
            console.log("Session deleted")
            // console.log(`${req.session.id}`)
        })
        res.send("Session successfully deleted")
    }
    static regenerateSession = (req, res) => {
        req.session.regenerate(()=> {
            console.log("session regenerated")
        })
        res.send("Session successfull regenerated")
    }

    static setGetVariable = (req, res) => {
        req.session.device = "Mobile"
        if(req.session.count){
            req.session.count++;
        }else{
            req.session.count = 1;
        }
        res.send(req.session.count)
    }
    static setdevice = (req, res) => {
        if(req.session.device){
            res.send(`Device: ${req.session.count}`)
        }else{
            res.send(`Device not found`)
        }
    }
    
}
export { homePage , SessionAction }