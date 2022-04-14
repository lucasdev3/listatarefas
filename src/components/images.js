import carro1 from "../assets/carro 1.jpeg";

const Images = () => {
    return (
        <div>
            <img src="/carro 1.jpeg" alt="carro 1 public"/>
            <img src={carro1} alt="carro 1 assets"/>
        </div>
    )
}

export default Images;

