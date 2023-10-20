const Header = ({title, leftChild, rightChild}) => {
    return (
        <div className="Header">
            <h1 className="py-10 text-center text-5xl">{title}</h1>
        </div>
    )
}

export default Header;