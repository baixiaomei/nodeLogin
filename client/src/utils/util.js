const random = (n = 1) => {
  var rnd = 0
  for (var i = 0; i < n; i++) {
    rnd += Math.floor(Math.random() * 45)
  }
  return rnd
}

export default random
