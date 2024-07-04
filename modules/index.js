import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/nodetask3')
console.log('DB connected')
export default mongoose