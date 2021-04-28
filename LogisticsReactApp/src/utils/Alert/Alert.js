import React, { useEffect, useState } from 'react'
import {} from  './Alert.css'
import ReactDOM from 'react-dom'

function Alert({bgcolor,children}) {

    const [show,setshow] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>setshow(false),1000)
        return ()=>{
            clearTimeout(timer)
        }

    },[show])

    // root-portals
    return ReactDOM.createPortal(

            <div>
            { show && (
                <div className="wrapper">
                 <div className={`alert fade show AlertPopup transportcapacitybooking__Alert  ${bgcolor} `} role="alert" autoClose>
            
                   <div className=" ">
                      {children ? children :" A simple primary alert—check it out! " }
                   </div>
                    {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> */}
               </div>
             </div>
             )}

            </div>
       
    ,document.getElementById("root-portals"))
}

export default Alert
