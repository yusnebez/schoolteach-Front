import React from 'react'

const Student = () => {
  return (
    <div>
      
    </div>
  )
}

export default Student




// import React, { useEffect } from 'react';
// import axios from 'axios';
// import {useHistory} from 'react-router-dom'

// const Student = () => {

//   const [tarea, setTarea] = React.useState('')
//   const [tareas, setTareas]:any[] = React.useState([])
//   // const [modoEdicion, setModoEdicion] = React.useState(false)
// //const [id, setId] = React.useState('')
//   // const [error, setError] = React.useState('')
//   const history = useHistory();

//   useEffect(() => {
    
//     if(localStorage.getItem('token')){
//         axios.get('http://localhost:3016/student/all',{
//                 headers:{
//                     token:localStorage.getItem('token')
//                 }
//              }).then((response) => {
//                 console.log(response.data)
                
//             });
//         }
    
//     });

//     const newStudent = () =>{
//         history.push('/Newstudent');
//     }  

//     const newTutor = () =>{
//         history.push('/Newtutor');
//     }

//   // // const agregarTarea = (e: { preventDefault: () => void; }) => {
//   //   e.preventDefault()
//   //   if(!tarea.trim()){
//   //     console.log('Elemento Vacío')
//   //     // setError('Escriba algo por favor...')
//   //     return
//   //   }
//   //   console.log(tarea)

//     setTareas([
//       ...tareas,
//       {nombreTarea:tarea}
//     ])

//     setTarea('')
//     // setError('')
//   }

//   const eliminarTarea = (id: any) => {
//     // const arrayFiltrado = tareas.filter(item => item.id !== id)
//     // setTareas(arrayFiltrado)
//   }

//   const editar = (item:any) => {
//     console.log(item)
//     // setModoEdicion(true)
//     setTarea(item.nombreTarea)
//     // setId(item.id)
//   }

//   const editarTarea = (e: { preventDefault: () => void; }) => {
//     e.preventDefault()
//     if(!tarea.trim()){
//       console.log('Elemento Vacío')
//       // setError('Escriba algo por favor...')
//       return
//     }

    
//     // setTareas(arrayEditado)
//     // setModoEdicion(false)
//     // setTarea('')
//     // setId('')
//     // setError('')
//   }


//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">Teacher Page</h1>
//       <hr/>
//       <div className="row">
//         <div className="col-8">
//           <h4 className="text-center">Lista de tareas</h4>
//           <ul className="list-group">
//             {

//               tareas.length === 0 ? (
//                 <li className="list-group-item">No hay estudiantes, añadelos</li>
//               ) : (
//                 tareas.map((item:any) => (
//                   <li className="list-group-item" key={item}>
//                     <span className="lead">{item.nombreTarea}</span>
  
//                     <button 
//                       className="btn btn-danger btn-sm float-right mx-2"
//                       onClick={() => eliminarTarea(item.id)}
//                     >
//                       Eliminar
//                     </button>
  
//                     <button 
//                       className="btn btn-warning btn-sm float-right"
//                       onClick={() => editar(item)}
//                     >
//                       Editar
//                     </button>
  
//                   </li>
//                 ))
//               )

//             }


//           </ul>
//         </div>
//         <div className="col-4 btn-group-vertical">
//             <h4 className="text-center">
//                 Acciones
//             </h4>
//             <button onClick= {() => newStudent()} className="btn btn-primary btn-block" type="button">Crear estudiante</button>
//             <button onClick= {() => newTutor()}  className="btn btn-dark btn-block" type="button">Crear tutor</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Student;
