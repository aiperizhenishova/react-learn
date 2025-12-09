import React, { useEffect, useState } from "react"

const Button = (props) => {
    const [click, setState] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${click}`
    })

    return(
        <button onClick={() => setState(click + 1)}>{props.text} {click}</button>
    )
}

Button.defaultProps = {
    text: "кнопка"
}

export default Button