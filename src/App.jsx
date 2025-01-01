import { useState } from "react";


function App() {
  const [encryption, setEncryption] = useState(true)
  const [showNotification, setShowNotification] = useState(false);

  
  const triggerNotification = () => {
    setShowNotification(true);

    
    setTimeout(() => {
      console.log('hello worlds')
      setShowNotification(false); 
    }, 3000);
  };
  return (
    
    <div className="App">
      {/* Conditionally render the hidden notification */}
      {showNotification && (
        <div className="hidden">
          <p>You have a new notification!</p>
        </div>
      )}
      <div className="header">
          <pre>
            Text Encryptor - <br />
              Secure Your Data
          </pre>
          <br/>
          <h2>"Here, we use the Vernam cipher—a secure method
            that combines your text with a secret key to encrypt it.
            Each character of your text is mixed with a corresponding
            key character, ensuring strong encryption. Enter your plain
            text to begin encryption!"</h2>
        </div>
        <div className="container">
        <div className="form-group">
          <label>{encryption ? "Plain Text" : "Cipher Text"} : </label>
          <textarea placeholder="Type your text here..."></textarea>
        </div>
        <div className="form-group">
          <label>Enter Your Key:</label>
          <input type="text" placeholder="Type your key here..." onChange={(e) => {
            console.log(e)
            setMethod(e.target.value)
          }}/>
        </div>
        <div className="form-group">
          <label>Operation:</label>
          <div className="operation-toggle">
            <button disabled={encryption} onClick={() => {
              triggerNotification()
              setEncryption(pre => !pre)
            }}>Encrypt</button>
            <button disabled={!encryption} onClick={() => setEncryption(pre => !pre)}>Decrypt</button>
           
          </div>
        </div>
        {/* <button className="submit">SUBMIT</button> */}
        <div className="form-group">
          <label>Your Result:</label>
          <textarea readOnly placeholder="Your result..."></textarea>
        </div>
      </div>
      <div className="header2">
          <pre>
            Text Decryptor - <br />
             Break the cipher
          </pre>
          <br/>
          <h2>
          "For decryption, we use the Vernam cipher to reverse the process. 
          Your encrypted text is combined with the same secret key to restore the original message.
           Enter your cipher text to unlock the plain text!"
          </h2>
      </div>
    </div>
  );
}

export default App;
