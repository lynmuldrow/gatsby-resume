import React from "react"
import boxStyles from "./box.module.css"


export default ({ children }) => (

  <div className={boxStyles.box}>
    {children}
  </div>
)