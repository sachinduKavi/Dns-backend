import express from 'express'
const router = express.Router()


import { vernamEncode } from '../controller/vernam';



router.post('/encode', vernamEncode)


export default router;