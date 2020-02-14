var count = 0;

module.exports = function requestCount(req, res, next) {
  
  count++
  console.log(count + ' ' + 'requests made')

  return next();

}