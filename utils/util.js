const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//手机验证正则表达式
const checkMobilePhone = (phone)=> {
	var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	if(!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}
}
const percent = (point, n) => { //point数值 n保留几位小数(都为number)
  return Math.round(point * 100 * Math.pow(10, n)) / Math.pow(10, n) + "%";
}
module.exports = {
  formatTime: formatTime,
  checkMobilePhone: checkMobilePhone,
  percent
}
