import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 30;
    const [novaIadde, setNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    }

    const changeNewAge = () => {
        if (novaIadde === 45) {
            setNovaIdade(40);
        }else {
            setNovaIdade(45);
        }
    }

    useEffect(() => {
        console.log("Testando useEffect");
    })

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {novaIadde}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )
}

export default Hooks;