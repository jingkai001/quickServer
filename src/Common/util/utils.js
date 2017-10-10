function formatTime (str,format="{0}年{1}月{2}日 {3}时{4}分{5}秒") {
  const reg = /^(\d{4})[-/:.](\d{1,2})[-/:.](\d{1,2}) +(\d{1,2})[-/:.](\d{1,2})[-/:.](\d{1,2})$/
  let ary = []
  str.replace(reg, function () {
    ary = Array.prototype.slice.call(arguments).slice(1, 7)
  })
  return format.replace(/{(\d+)}/g, function () {
    var num = ary[arguments[1]]
    return num.length === 1 ? "0" + num : num
  })
}
