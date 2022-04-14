const RenderCond = () => {

    const x = 2;

    return (
        <div>
            { x > 5 &&  <p>X é maior que 5</p> }
            { x > 5 ? <p>X é maior que 5</p> : <p>X é menor ou igual a 5</p> }
        </div>
    )
}

export default RenderCond;