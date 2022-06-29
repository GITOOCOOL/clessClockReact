const Button = ({timer, handleClick, turn}) => {
    const btnClass = 'btn ' + turn 
    return (
        <button className={btnClass} onClick={handleClick} >
            {Math.floor(timer / 60)} : {timer % 60}
        </button>
    ) 
}

export default Button