import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'
import Room from './Room';
const uniqueItems = (items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,
        minSize,maxSize,breakfast,pets
    } = context;
    let types = uniqueItems(rooms,'type');
    types = ['all',...types];
    types = types.map((item,index)=>{
        return <option value={item} key={index}>
                {item}
             </option>
    })
    let people  = uniqueItems(rooms,'capacity')
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}
                     className="form-control"
                     onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end of select type */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity}
                     className="form-control"
                     onChange={handleChange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input className="form-control" type="range" value={price} name="price"
                     id="price" min={minPrice} max={maxPrice}
                     onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input className="size-input" type="number" name="minSize" id="size" value={minSize} onChange={handleChange}/>
                        <input className="size-input" type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange}/>

                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" checked={breakfast} id="breakfast" onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" checked={pets} id="pets" onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
            
        </section>
    )
}
