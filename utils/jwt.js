const jsonwebtoken = require("jsonwebtoken");

const { JWT_SECRET, JWT_AUDIENCE, JWT_ISSUER } = process.env;

const jwt = {
  generate: ({ id, role }) => {
    return new Promise((resolve, reject) => {
      const payload = { id, role };
      const secret = JWT_SECRET;
      const options = {
        algorithm: "HS512",
        expiresIn: "1d",
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
      };
      jsonwebtoken.sign(payload, secret, options, (error, token) => {
        if (error) {
          reject(error);
        } 
          resolve(token);
        
      });
    });
  },

  decode: (token) => {
    return new Promise((resolve, reject) => {
      const options = {
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
      };
      jsonwebtoken.verify(token, JWT_SECRET, options, (error, payload) => {
        if (error) {
          reject(error);
        }
        resolve(payload);
      });
    });
  },
};

module.exports = jwt;
