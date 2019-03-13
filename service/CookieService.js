import Cookies from 'js-cookie'

const CookiesService = {
  setCookie (name, value) {
    Cookies.set(name, value)
  },
  getCookie (name) {
    return Cookies.get(name)
  },
  removeCookie(name){
    Cookies.remove(name)
  },
  gettokenJWTCookie () {
    return Cookies.get('tokenJWT')
  },
  getEmailCookie () {
    return Cookies.get('email')
  },
  removeJWTAndWipIdCookie () {
    Cookies.remove('tokenJWT')
    Cookies.remove('wip_Id')
  }
}
export default CookiesService
