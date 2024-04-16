import { useState } from 'react';

function InputCreate() {
    const [title, setTitle] = useState("")
    const envio = async (event) => {
        event.preventDefault(); 
        const urlApi = "http://localhost:3000/create"
        console.log("entro")
        try {
            const response = await fetch(urlApi, {
                method: 'POST', // Método HTTP
                headers: {
                  'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify({ title: title }), // Convertimos el payload de JS a JSON
              })
              if (response.ok) {
                
                console.log("Peticion creada")
              }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    
    return (
        <>
            <form onSubmit={envio}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                />
                <button type="submit">Enviar</button>
            </form>
           
        </>
    );
}

export default InputCreate;