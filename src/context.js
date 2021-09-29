import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast: false,
    pets: false
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let allPrice = rooms.map(room=>room.price)
    let maxPrice = Math.max(...allPrice)
    let allSizes = rooms.map(room=>room.size)
    let maxSize = Math.max(...allSizes)
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice: maxPrice,
      maxSize: maxSize
    });
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getroom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event=>{
    const target = event.target;
    const value = target.type ==="checkbox" ? target.checked : target.value
    const name = event.target.name;
    this.setState({
      [name]: value
    },this.filterRooms)
  }
  filterRooms = ()=>{
   let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state
   let tempRooms = [...rooms]
   capacity = parseInt(capacity);
   if(type !== 'all'){
     tempRooms = tempRooms.filter(room=>type === room.type)
   }
   if(capacity !==1){
     tempRooms = tempRooms.filter(item=>item.capacity >= capacity)
   }
 
     tempRooms = tempRooms.filter(item=>item.price <= price)
     tempRooms = tempRooms.filter(item=> item.size >= minSize && item.size <= maxSize)
     if(breakfast){
       tempRooms = tempRooms.filter(item=>item.breakfast === true)
     }
     if(pets){
      tempRooms = tempRooms.filter(item=>item.pets === true)

     }
   this.setState({
     sortedRooms: tempRooms
   })
    
  }
  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getroom,handleChange:this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export function withConsumer(Component) {
  return function ConsumerWrapper(props) {
     return  <RoomConsumer> 
     {value => <Component {...props} context={value} />} 
     </RoomConsumer>
  }
}
export { RoomProvider, RoomConsumer, RoomContext };
