import React, { useEffect, useState } from 'react'
import {} from  './Alert.css'
import ReactDOM from 'react-dom'

function Alert({bgcolor,children}) {

    const [show,setshow] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>setshow(false),3000)
        return ()=>{
            clearTimeout(timer)
        }

    },[show])

    // root-portals
    return ReactDOM.createPortal(
            <div className="AlertPopup">
            { show && (
                 
                 <div className={`alert fade show transportcapacitybooking__Alert  ${bgcolor === 'bgSuccess' ? 'bgSuccess' : 'nortification' } animateOpen  `} role="alert" autoClose>
            
                   <div className=" ">
                     {children ? children :" A simple primary alert—check it out! " }
                   </div>
                 {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button> */}
             </div>
             )}

            </div>
       
    ,document.getElementById("root-portals"))
}

export default Alert
