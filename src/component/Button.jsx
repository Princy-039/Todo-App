import React from 'react'
import PropTypes from 'prop-types';

function Button(props) {
   
  return (
      <button className={props.className} onClick={(props.onClick)}> {props.btnText} </button>
  )
}
Button.PropTypes={
    className:PropTypes.string,
    onClick:PropTypes.function,
    btnText:PropTypes.string
}

export default Button

