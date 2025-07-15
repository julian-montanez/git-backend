import jwt from "jsonwebtoken"

export function getToken (payload) {
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, "chuleta", {expiresIn: "1h"}, (error, token)=>{
            if (error) {
                reject(error)
            } else {
                resolve(token)
            }
        })
    })
}