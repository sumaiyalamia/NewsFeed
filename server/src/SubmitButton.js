import React from  'react';

function SubmitButton(props) {
  return (
   
            <button
               className='btn'
               disabled={props.disabled}
               onClick={()=>this.props.onClick()}>
                {props.text}
            </button>
     
  );
}


export default SubmitButton;