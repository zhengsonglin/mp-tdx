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

const getRandomFromArray = (arr, len, isRepeat) =>{// 数组，长度， 是否可重复
  let shuffled = [...arr].slice(0), l = shuffled.length, result =[]

  for(let n=0;n<len; n++){

      if(isRepeat){   //可重复
          let r = Math.floor(Math.random(l)*10)
          result.push(shuffled[r])
      }else{
          let r = Math.max(0, Math.floor(Math.random()*shuffled.length) - 1)
          result.push(shuffled.splice(r, 1)[0])
      }
  }

  return result
}

module.exports = {
  formatTime: formatTime,
  checkMobilePhone: checkMobilePhone,
  percent,
  getRandomFromArray
}
