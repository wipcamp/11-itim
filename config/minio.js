import Minio from 'minio'
import ENV from './envConfig'

const s3Client = new Minio.Client({
  endPoint: ENV.MINIO_ENDPOINT,
  accessKey: ENV.AWS_KEY,
  secretKey: ENV.AWS_SECRET,
  useSSL: true // Default is true.
})

export default s3Client;


