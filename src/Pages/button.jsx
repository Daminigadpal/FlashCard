import React from 'react';
const Element=()=>{
    return(
        <div>
    <input type="text" placeholder="name"/>
    <input type="text" placeholder='last'/>
    <textarea type="textarea" placeholder='Description'/>
    </div>
    )
}

class Button extends React.Component (){

    // state={
        // showinputs = true,

    // }
    showinputs="true"

    OnhitBtn = () => {
        this.showinputs=false
    }


render(){
    return(
    <div>

    <button onClick={this.OnhitBtn}> welcome Message</button>
<Element/>

    </div>
    )

    }
    


}
export default Button;