const RenderCond = ({ x, y }) => {

    return (
        <div>
            { x > 5 &&  <p>X é maior que 5</p> }
            { x > 5 ? <p>X é maior que 5</p> : <p>X é menor ou igual a 5</p> }
            <p>O valor de Y é: { y }</p>
        </div>
    )
}

export default RenderCond;