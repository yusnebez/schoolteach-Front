import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'



const Login = () => {
  
        const [name, setName] = React.useState('')
        const [email, setEmail] = React.useState('')
        const [pass, setPass] = React.useState('')
        const [error, setError] = React.useState('')
        const history = useHistory();

        const procesarDatos = (e: { preventDefault: () => void }) =>  {
            e.preventDefault()
            if(!email.trim() || !pass.trim()){
                console.log('Datos vacíos email!')
                setError('Datos vacíos email!')
                return
            }
            if(!pass.trim()){
                console.log('Datos vacíos pass!')
                setError('Datos vacíos pass!')
                return
            }
            if(pass.length < 4){
                console.log('6 o más carácteres')
                setError('6 o más carácteres en pass')
                return
            }
            console.log('correcto...')
            setError('')
        
            if(localStorage.getItem('token')){
            axios.post('http://localhost:3015/students/signup',{
                email,
                name,
                password: pass,
                headers:{
                    token:localStorage.getItem('token')
                }
            }).then((response) => {
                console.log('estudiante creado',response.data.token)
                history.push('/Teacher')
                
                // setLogueado(response.data);
                
                });

            }
        }
             
        return(
            <div className="mt-5">
                <h3 className="text-center">Registro de usuarios</h3>
                <hr/>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                        <form onSubmit={procesarDatos}>
                            {
                                error ? (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                ) : null
                            }
                            <input 
                                type="name" 
                                className="form-control mb-2"
                                placeholder="Ingrese su nombre"
                                onChange={ e => setName(e.target.value) }
                                value={name}
                            />
                            <input 
                                type="email" 
                                className="form-control mb-2"
                                placeholder="Ingrese email"
                                onChange={ e => setEmail(e.target.value) }
                                value={email}
                            />
                            <input 
                                type="password" 
                                className="form-control mb-2"
                                placeholder="Ingrese Contraseña"
                                onChange={ e => setPass(e.target.value) }
                                value={pass}
                            />
                            <button 
                                className="btn btn-lg btn-dark btn-block"
                                type="submit"
                            >
                                Registrar
                            </button>
                            <button 
                                className="btn btn-sm btn-info btn-block"
                                type="button"
                            >
                                ¿Ya tienes cuenta?
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
export default Login
