import { Response, Request } from "express";
import { checkFormat } from "../middleware/textFormat";


const alphabet = new Map<string, number>();
const reverseAlphabet = new Map<number, string>();
Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)).forEach((element: string, index: number) => {
    alphabet.set(element, index)
    reverseAlphabet.set(index, element)
})
alphabet.set(' ', 26)
reverseAlphabet.set(26, ' ')




// Vernam encode function
const vernamEncode = async (req: Request, res: Response) => {
    let proceed = true, message = null, content = null

    // Fetch plain text and the ky
    const plainText:string = req.body.content.toLowerCase()
    const key:string = req.body.key.toLowerCase()
    console.log(checkFormat(plainText), key)
    if(checkFormat(plainText) && checkFormat(key)) {
        let index = 0

        let cipherText = ""
        plainText.split('').forEach(element => {
            if(index >= key.length) index = 0;
            const letterResultNumber: number = ((alphabet.get(element) ?? 0) + (alphabet.get(key.charAt(index)) ?? 0)) % 27;
            
            // Convert to cipher text
            cipherText += reverseAlphabet.get(letterResultNumber)
            index++;
        });
        content = cipherText
    } else {
        proceed = false
        message = "Should only contains simple letters"
    }

    
    res.status(200).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


// Vernam decode
const vernamDecode = async (req: Request, res: Response) => {
    let proceed = true, message = null, content = null

    // Fetch plain text and the ky
    const cipherText:string = req.body.content.toLowerCase()
    const key:string = req.body.key.toLowerCase()
    
    if(checkFormat(cipherText) && checkFormat(key)) {
        let index = 0

        let plainText = ""
        cipherText.split('').forEach(element => {
            if(index >= key.length) index = 0;
            const letterResultNumber: number = ((alphabet.get(element) ?? 0) - (alphabet.get(key.charAt(index)) ?? 0) + 27) % 27;

            // Convert to cipher text
            plainText += reverseAlphabet.get(letterResultNumber)
            index++;
        });

        content = plainText
    } else {
        proceed = false
        message = "Should only contains simple letters"
    }


    res.status(200).json({
        proceed: proceed,
        content: content,
        message: message
    })
}


export {
    vernamEncode,
    vernamDecode
}