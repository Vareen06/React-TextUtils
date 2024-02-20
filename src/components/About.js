import React, {/* useState*/ } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color=='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor:  props.mode==='dark'?'#042743':'white'
    }
    
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button"  style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze The Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" 
                style={myStyle}   data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free To Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count and word count.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is Word counter software works in any web browsers.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
            </div> */}
    </div>
  )
}
