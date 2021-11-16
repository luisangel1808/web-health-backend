import {config} from 'dotenv'

config()

export default{
    BucketName: process.env.BUCKET_NAME || '',
    Endpoint: process.env.ENDPOINT || '',
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
    jwtSecretVerify:process.env.JWT_SECRET_VERIFY,
    nodeMail:process.env.NODE_MAIL,
    nodeMailPassword:process.env.NODE_MAIL_PASSWORD,

}