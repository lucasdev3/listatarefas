const AnotherComponent = () => {

    const handleClick = () => {
        console.log("Button Click!");
    }
    
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
        </div>
    )
}

export default AnotherComponent;