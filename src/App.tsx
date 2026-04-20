import { useEffect, useState } from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdVerified, MdVerifiedUser } from "react-icons/md";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import "./App.css";

function App() {
    const [Process, setProcess] = useState("");
    const [showModal, setShowModal] = useState(false);

            useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    setShowModal(false);
                    setProcess("");
                }
            };
            document.addEventListener("keydown", handleEsc);
            
            return () => {
                document.removeEventListener("keydown", handleEsc);
            };


        }, []);

        const handleConsultar = () => {
            if (Process.length < 20) return alert("Numero de processo invalido");

            setShowModal(true);
        };
        
        const hadleRepetConsultar = () => {
            setShowModal(false);
            setProcess("");
        };

    return (
        <div className="Consult">
            <h1>Advocato</h1>
            <h2>Consulta de processos de forma simples</h2>
            <input
                type="number"
                value={Process}    
                required
                maxLength={20}
                placeholder="Insira o número do processo"
                onChange={(e) => setProcess(e.target.value)}
            />
            <button onClick={handleConsultar}>Consultar</button> <button  className="Resetprocess" onClick={hadleRepetConsultar}><BsArrowCounterclockwise/></button>
            <br />
            <p>Consulte seus processos de forma clara e rápida</p>
            
            <div className="info">
                <h2 className="info-title"><AiOutlineFileProtect/> Como funciona</h2> 
                <ol>
                   <li> <strong>1</strong> Digite o numero do processo
                   </li>
                   <li> <strong>2</strong> Nos buscamos as movimentações
                   </li>
                   <li>
                    <strong>3</strong> Veja o que aconteceu!
                   </li>
                </ol>
            </div>
            <div className="features">
                <p> <MdVerifiedUser/>Dados Publicos</p><p>Sem cadastro</p> <p>Gratuito</p>
            </div>

            {showModal && (
                <div  onClick={() => setShowModal(false)}>
                    <div  onClick={(e) => e.stopPropagation()}>
                        <div className="Resumeprocess">
                            <details>
                                <summary><FaComments/>Resumo simplificado</summary>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <p></p>
                            </details>
                        </div>
                        <div className="Resumeprocess">
                            <details>
                                <summary><FaComments/>Informação técnicas</summary>
                                <ul>

                                </ul>
                                <p></p>
                            </details>
                        </div>
                    </div>
                    <br />
                </div>
            )}
        </div>
    );
}

export default App;
