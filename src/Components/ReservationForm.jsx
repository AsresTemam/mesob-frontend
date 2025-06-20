import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { backendUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'


const ReservationForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    guests: '1'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(backendUrl + '/api/reservations/create', formData)
      toast.success("Reservation created successfully!")

      setFormData({
        name: '',
        email: '',
        phone: '',
        time: '',
        guests: '1',
        date: ''
      })
    } catch (error) {
      console.log(error);
      
      
    }
  }

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour <= 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12
      const startPeriod = hour < 12 ? 'AM' : 'PM'

      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
      const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM'

      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`)
    }
    return slots
  }

  return (
    <div className='min-h-screen bg-[#ffe2b7] p-6 md:p-12'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>
        <form onSubmit={handleSubmit} className='md:col-span-2 bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-amber-400 uppercase tracking-wider'>Reserve a Table</h2>
          <h1 className='text-3xl font-bold mb-4'>Dine With Us- <span className='text-amber-500'>Reserve Now</span></h1>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Full Name</label>
              <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Full Name' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'/>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Email</label>
              <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' />
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Phone Number</label>
              <input type="tel" name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number' required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'/>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Reservation Date</label>
              <input type="date" name='date' value={formData.date} onChange={handleChange} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300' />
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Time of Reservation</label>
              <select name="time" value={formData.time} onChange={handleChange} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'>
                <option value="">Select Time</option>
                {generateTimeSlots().map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className='grid gap-1.5'>
              <label htmlFor="" className='font-bold'>Number of Guests</label>
              <select name="guests" value={formData.guests} onChange={handleChange} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'>
                {[...Array(10).keys().map((i) =>(
                  <option key={i + 1} value={i + 1}>{i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}</option>
                ))]}
              </select>
            </div>
          </div>
          <button type="submit" className='w-full mt-4 bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-500 transition'>Book Now</button>
        </form>

        <div className='bg-black text-gray-100 p-8 rounded-lg shadow-md space-y-10'>
          <div>
            <h3 className='text-lg font-bold'>Address</h3>
            <p>123, Asmerom street, Cardif, UK</p>
          </div>
          <div>
            <h3 className='grid gap-1.5'>Opening Hours</h3>
            <p>Mon - Fri: 11am - 10pm</p>
            <p>Sat - Sun: 9am - 11pm</p>
          </div>
          <div>
            <h3 className='grid gap-1.5 mb-2'>Stay Connected</h3>
            <div className='flex justify-center md:justify-start gap-4 mt-3 text-2xl text-amber-500'>
                        <a href="https://www.facebook.com/MesobethiopianRestauransheffield" target="_blank" rel="noopener noreferrer">
                          <FaFacebook className='text-3xl cursor-pointer' />
                        </a>
                        <a href="https://twitter.com/mesobrestaurant" target="_blank" rel="noopener noreferrer">
                          <FaTwitter className='text-3xl cursor-pointer' />
                        </a>
                        <a href="https://instagram.com/mesobrestaurant" target="_blank" rel="noopener noreferrer">
                          <FaInstagram className='text-3xl cursor-pointer' />
                        </a>
                        <a href="https://youtube.com/@mesobrestaurant" target="_blank" rel="noopener noreferrer">
                          <FaYoutube className='text-3xl cursor-pointer' />
                        </a>
                      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm