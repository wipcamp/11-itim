import validID from './ValidationCitiZen'
const validNation = {
  handleValidation: (value) => {
    let registerDetail = value
    var phoneno = /^(([0-9]{3})) *([0-9]{3})*([0-9]{4})$/
    if (!phoneno.test(registerDetail.guardian_telno) ||
    !phoneno.test(registerDetail.telno)) {
      window.alert(`กรอกเบอร์ผิด ${registerDetail.telno} `)
      return false
    }
    for (let index in registerDetail) {
      if (registerDetail.hasOwnProperty(index)) {
        if (registerDetail[index] === '') {
          window.alert('โปรดกรอกข้อมูลให้ครบ')
          return false
        } else {
          if (validID.validNationalID(registerDetail.citizen_no)) {
            if (/^[a-zA-Z]+$/.test(registerDetail.nickname)) {
              window.alert('ชื่อเล่นภาษาไทยยนะ')
              return false
            } else {
              const gpaxc = registerDetail.gpax
              if (isNaN(gpaxc) || gpaxc.length !== 4) {
                window.alert(`กรอกเกรดผิด กรุณากรอกเป็น ทศนิยม 2 ตำแหน่ง เช่น 3.45 เป็นต้น`)
                return false
              } else {
                if (/^[a-zA-Z]+$/.test(registerDetail.firstname_th) || /^[a-zA-Z]+$/.test(registerDetail.lastname_th)) {
                  window.alert('กรอกชื่อและนามสกุลไทยผิด')
                  return false
                } else {
                  if (/^[a-zA-Z]+$/.test(registerDetail.firstname_en) && /^[a-zA-Z]+$/.test(registerDetail.lastname_en)) {
                    if (registerDetail.prefix_name === 'นาย' && registerDetail.gender === 'male') {
                      return true
                    }
                    if (registerDetail.prefix_name === 'นางสาว' && registerDetail.gender === 'female') {
                      return true
                    } else {
                      return true
                    }
                  } else {
                    window.alert('กรอกชื่อและนามสกุลอังกฤษผิด')
                    return false
                  }
                }
              }
            }
          } else {
            window.alert('กรอกบัตรประชาชนผิด')
            return false
          }
        }
      }
    }
  }

}
export default validNation
