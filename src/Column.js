import React from "react"

function Column(props) {
    const style = {
        height:100, 
        textAlign: "center"
    }

    style.height = props.height

    return (
      <div style={{textAlign: "center"}}>
        <h6>NWB</h6>
        <div className="column" style={style}>
            {props.height}
        </div>
      </div>
    )
}

export default Column