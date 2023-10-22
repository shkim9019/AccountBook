const Button = ({text, name, onClick}) => {
    const classNm = [`py-1 justify-self-center text-center rounded cursor-pointer align-middle ${name} `].join("");
    return (
        <div >
            <button 
                className = {classNm} 
                onClick = {onClick}
            >{text}</button>
        </div>
    )
}

export default Button;