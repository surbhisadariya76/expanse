import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';


function CarList() {
  const dispatch = useDispatch();
  // const cars = useSelector((state)=>{
  //   return state.cars.data;
  // })

  const {cars,name,searchTerm }= useSelector(({form,cars: {data,searchTerm}})=>{  
    const  filteredCars =data.filter((car)=>
     car.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     return{
      cars:filteredCars,
      name:form.name,
      searchTerm: searchTerm
     }
  })


  const handleCarDelete=(car)=>{
    dispatch(removeCar(car.id))
  }

  const renderedCars = cars.map((car)=>{
/// decide if this car should bo bold

const bold = searchTerm && car.name.toLowerCase().includes(searchTerm.toLowerCase())

    return(
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button type="button" className="button is-danger" onClick={()=>{handleCarDelete(car)}}>Delete</button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList