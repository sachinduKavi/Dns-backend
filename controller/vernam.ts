import { Response, Request } from "express";


const alphabet = new Map<string, number>();
const reverseAlphabet = new Map<number, string>();
Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)).forEach((element: string, index: number) => {
    alphabet.set(element, index)
    reverseAlphabet.set(index, element)
})
alphabet.set(' ', 26)


const vernamEncode = async (req: Request, res: Response) => {
    let proceed = true, message = null

    

    // Fetch plain text and the ky
    const plainText:string = req.body.content.toLowerCase()
    const key:string = req.body.key.toLowerCase()
    let index = 0

  
    let cipherText = ""
    plainText.split('').forEach(element => {
        if(index > key.length) index = 0;
        const letterResultNumber: number = ((alphabet.get(element) ?? 0) + (alphabet.get(key.charAt(index)) ?? 0)) % 27;
        
        // Convert to cipher text
        cipherText += reverseAlphabet.get(letterResultNumber)
        index++;
    });

    

    res.status(200).json({
        proceed: proceed,
        content: cipherText,
        message: message
    })
}


export {
    vernamEncode
}