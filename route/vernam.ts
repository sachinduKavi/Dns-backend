import express from 'express'
const router = express.Router()


import { vernamEncode, vernamDecode } from '../controller/vernam';



router.post('/encode', vernamEncode)

router.post('/decode', vernamDecode)


export default router;