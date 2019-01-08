const check = {

  validNationalID: (id) => {
    if (id == null || id.length !== 13) {
      return false
    }
    let i; let sum = 0
    for ((i = 0), (sum = 0); i < 12; i++) {
      sum += parseInt(id.charAt(i)) * (13 - i)
    }
    let mod = sum % 11
    let check = (11 - mod) % 10
    if (check === parseInt(id.charAt(12))) {
      return true
    }
    return false
  }
}
export default check
