
import { useState } from "react"



const ChatInput = () => {
    const [textArea, setTextArea] = useState("");




  return (
    <div className="chat-input">

<textarea onChange={(e)=>setTextArea(e.target.value)} value={textArea}/>

<button className="secondary-button"> Submit </button>








    </div>
  )
}
export default ChatInput