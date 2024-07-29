import { useState } from "react";

export const Login = () => {
    const[senha,setPassword] = useState('');
    const[email,setEmail] = useState('');
   const handleEntrar = () =>{
    console.log(email)
    console.log(senha)
   }
    
    return (
        <div>
            <form>
                <label >
                    <span>Email</span>
                    <input value={email} onChange={e => setPassword(e.target.value)}/>
                </label>
                <label >
                    <span>Senha</span>
                    <input  type="password" value={senha} onChange={e => setEmail(e.target.value)}/>
                  
                </label>

                <button type ="button" onClick={handleEntrar} >
                    Entrar   
                </button>
            </form>  
        </div>
    );
}
