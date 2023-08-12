
const homePage = (req, res)=> {
     
     res.send("this is home page bro...")
}

class CookiesAction {
 static set_cookie = (req, res) => {
    res.cookie('username', 'Tarun')
     res.send("cookie set...")
 }
 static get_cookie = (req, res) => {
    console.log(req.cookies)
    res.send("cookie get...")
 }

 static delete_cookie = (req, res) => {
    res.clearCookie("username")
    res.send("cookie deleted...")
 }
}

export { CookiesAction, homePage }
