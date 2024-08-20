import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// Components
import Restaurant from "./components/restaurant/restaurant";
import SigninForm from "./components/SigninForm/SigninForm";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import ResForm from "./components/restaurant/restaurantForm";
import MyRestaurants from "./components/MyRestaurant/MyRestaurant";
import RestaurantDetails from "./components/restaurant/restaurantDetails";
import MyResDetails from "./components/MyRestaurant/MyResDeatails";
import BookingList from "./components/Booking/BookingList";
import MyResBookings from "./components/MyRestaurant/MyResBookings";
//Services
import * as authService from "../src/services/authService";
import * as resService from "./services/restaurant";
import * as bookingService from "./services/bookingService";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [restaurants, setRestaurant] = useState([]);
  const [Bookings, setBookings] = useState([]);
  const [myrestaurant, setmyrestaurant] = useState([]);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllres = async () => {
      const resData = await resService.index();

      setRestaurant(resData);
      if (user.isRestaurant) {
        setmyrestaurant(
          resData.filter((res) => {
            if (res.owner.username == user.username) {
              return res;
            }
          })
        );
      }
    };
    if (user) fetchAllres();
  }, [user]);


  useEffect(() => {
    const fetchAllbooks = async () => {
      const bookData = await bookingService.index();
      
      setBookings(bookData);
      
      
    };
    if (user) fetchAllbooks();
  }, [user]);

  const fetchAllbooks = async () => {
    const bookData = await bookingService.index();
    
    setBookings(bookData);
    
    
  };




  const handleAddRestaurant = async (restrData) => {
    const newRestaurant = await resService.create(restrData);
    setRestaurant([...restaurants, newRestaurant]);
    navigate("/restaurants");
  };

  const handleAddBooking = async (bookingData, resId) => {
    const newBooking = await bookingService.create(bookingData, resId);
    setBookings([...Bookings, newBooking]);
    fetchAllbooks();
    navigate("/restaurants");
  };


  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />

      <Routes>
        {user ? (
          // Protected Routes:
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route
              path="/restaurants"
              element={<Restaurant restaurants={restaurants} />}
            />
            <Route
              path="/addRestaurant"
              element={<ResForm handleAddRestaurant={handleAddRestaurant} />}
            />
            <Route
              path="/MyRestaurants"
              element={<MyRestaurants myrestaurant={myrestaurant} />}
            />
             <Route
              path="/booking"
              element={<BookingList Bookings={Bookings}/>}
            />

            {/* show my restauarnt details */}
            <Route
              path="/MyRestaurants/:resId"
              element={<MyResDetails myrestaurant={myrestaurant} />}
            />

            {/* show my restauarnt Bookings*/}
            <Route  
              path="/restaurants/:resId/Booking"
              element={<MyResBookings />}
            />


            <Route
              path="/restaurants/:resId"
              element={
                <RestaurantDetails handleAddBooking={handleAddBooking} />
              }
            />
          </>
        ) : (
          // Public Route:
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
