

const Button = ({children,onTouch}) => {
    return (
        <button onClick={onTouch}>{children}</button>
    )
}

export default Button