import { useState } from "react";
import { createHotel } from "../services/hotelService";

function AddHotel() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    pricePerNight: "",
    rooms: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createHotel(form);
    alert("Hotel Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Location" onChange={e => setForm({...form, location: e.target.value})} />
      <input placeholder="Price" onChange={e => setForm({...form, pricePerNight: e.target.value})} />
      <input placeholder="Rooms" onChange={e => setForm({...form, rooms: e.target.value})} />
      <button>Add Hotel</button>
    </form>
  );
}

export default AddHotel;
