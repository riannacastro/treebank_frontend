import React from "react";
import './css/Button.css';

type BtnProps = {
  text: string
  class?: string
}

const Button = (props : BtnProps) => {
  return (
    <button className={props.class ? props.class : "primary"}>{props.text}</button>
  )
}

export { Button }