const jwt = require("jsonwebtoken");
const config = require("../configs/jwtEncryptionKey");

exports.verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
    
  if(!token) {
    if (req.url.includes("user")) {
      next();
    }else {
      return res.status(403).send({message: "No token provided"});
    }
  }else{
    jwt.verify(token, config.key, (err, decoded) => {
      if(err) {
        return res.status(401).send({ message: "Unauthorized"});
      }
      // console.log(decoded);
      // req.userId = decoded.id;
      next();
    });
  }
}
