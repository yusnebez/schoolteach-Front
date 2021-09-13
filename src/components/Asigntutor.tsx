import React from 'react'
import axios from 'axios'
import { stringify } from 'querystring'


const Asigntutor = () => {
    
    const [tutor,setTutor]:any = React.useState()
    const [student,setStudent]:any = React.useState([])
    const [idstudent,setIdstudent]:any = React.useState([])
    const [studentAsignado,setStudentAsignado]:any = React.useState([])
    const idTeacher = "6131532e63c3202f5597ecbd"
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [emailAsignado, setEmailAsignado]: any = React.useState([])

     React.useEffect(() => {
        if(localStorage.getItem('token')){
          axios.get('http://localhost:3007/student/all',{
            headers:{
                token:localStorage.getItem('token')
            }
         }).then((response) => {
          setStudent(response.data);
        });}
      },[setStudent]);
      
      const enviar = () => { 
        axios.post('http://localhost:3007/teacher/updateid',{
          id:idTeacher,
          student: idstudent,
        headers:{
              token:localStorage.getItem('token')
          }
       }).then((response) => {
        
      });}
    
      const asignarid = (_id: string, name: string, email: string) => {
        console.log(name)
        setIdstudent([
          ...idstudent,_id])
        setStudentAsignado([
          ...studentAsignado, name
        ])
        setEmailAsignado([
          ...emailAsignado,email
        ])
      }
      console.log(studentAsignado)
      const eliminarId = (_id: any) => {
        const arrayFiltrado = idstudent.filter((item:any) => item !== _id)
          setIdstudent(arrayFiltrado)
          setModoEdicion(true)
      }
    
      

        console.log(idstudent)

        return (
          <div className="container mt-5">
            <h1 className="text-center">Lista de usuarios</h1>
            <hr/>
            <div className="row">
              <div className="col-12">
                <h4 className="text-center">Usuarios para asignar</h4>
                <ul className="list-group">
                  {
                      student.map((item:any) => (
                        <li className="list-group-item" key={item._id}>
                          <span className="lead">{item.name}</span>
                          <span className="lead">{item.email}</span>
                          <button 
                            className="btn btn-warning btn-sm float-right mx-2"
                            onClick={() => asignarid(item._id, item.name, item.email)}
                          >
                            Asignar
                          </button>
                          
                        </li>
                      ))
                  }
                  </ul>
                  <ul className="list-group">
                      {
                        studentAsignado.map((item:any) => (
                          <li className="list-group-item" key={item}>
                               <span className="lead">{item}</span>
                          </li>
                        ))
                      } 
                  </ul>
                  <ul className="list-group">
                      {
                        emailAsignado.map((item:any) => (
                          <li className="list-group-item" key={item}>
                               <span className="lead">{item}</span>
                          </li>
                        ))
                      }
                  </ul>

                          {/* <button 
                            className="btn btn-warning btn-sm float-right mx-2"
                            onClick={() => asignarid(item._id)}
                          >
                            Asignar
                          </button> */}
                          {/* {
                          modoEdicion ? (
                          <button className="btn btn-danger btn-sm float-right" 
                          onClick={() => eliminarId(item._id)}> Eliminar </button>
                          ) : (
                          <button className="btn btn-danger btn-sm float-right"
                          onClick={() => eliminarId(item._id)}> Eliminado </button>
                          ) */}
                          
                          {/* <button 
                            className="btn btn-danger btn-sm float-right"
                            onClick={() => eliminarId(item._id)}
                          >
                          { modoEdicion ? ( 'Eliminar') : ( 'Eliminado' ) }
                          </button> */}
                        {/* </li> */}
                      ))
                  
                  <button 
                    className="btn btn-danger btn-sm float-right mx-10"
                    onClick={() => enviar()}
                    >
                     Enviar
                  </button>
                
              </div>
            </div>
        </div>
        );
      }
      
export default Asigntutor;



          



