function log(reqq, res,next){
    console.log("Logging...")
    next()
}

module.exports = log