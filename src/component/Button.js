const Button = ({text, name, onClick}) => {
    const classNm = [` text-center bg-gray-300 ${name} `].join("");
    return (
        <div className={classNm} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;