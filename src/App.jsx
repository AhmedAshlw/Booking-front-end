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
import BookingForm from "./components/Booking/BookingForm";
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
  }, []);
  const fetchAllres = async () => {
    const resData = await resService.index();

    setRestaurant(resData);
    if (user.isRestaurant) {
      setmyrestaurant(
        resData.filter((res) => {
          if (res.owner._id == user._id) {
            return res;
          }
        })
      );
    }
  };

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


//RESTAURANT HANDLERS

  const handleAddRestaurant = async (restrData) => {
    const newRestaurant = await resService.create(restrData);
    setRestaurant([...restaurants, newRestaurant]);
    fetchAllres();
    navigate("/MyRestaurants");
  };

  const handleUpdateRes = async (resId,formData) => {
    const updatedRestaurant = await resService.update(resId,formData);
    fetchAllres();
    
    navigate(`/MyRestaurants/${resId}`);
  };
 
  const handleDeleteRes = async (resId) => {
    const DeletedRestaurant = await resService.deleteRes(resId);
    fetchAllres();
    fetchAllbooks();
    navigate(`/MyRestaurants`);
  };

// BOOKING HANDLERS
  const handleAddBooking = async (bookingData, resId) => {
    const newBooking = await bookingService.create(bookingData, resId);
    setBookings([...Bookings, newBooking]);
    fetchAllbooks();
    navigate("/booking");
  };

  const handleUpdateBook = async (bookId,formData) => {
    const updatedBook = await bookingService.update(bookId, formData);
    fetchAllbooks();
    navigate(`/booking`);
  };

  const handleDeleteBook = async (BookId) => {
    const deletedBook = await bookingService.deleteBook(BookId);
    fetchAllbooks();
    navigate('/booking');
  };
//Rating handler

const  handleAddRating =async(resId,formData)=>{
const rate = await resService.AddRating(resId,formData)
fetchAllres();


}






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
              element={<BookingList Bookings={Bookings} handleDeleteBook={handleDeleteBook}/>}
            />

             <Route
                path="/restaurants/:bookId/edit"
                element={<BookingForm handleUpdateBook={handleUpdateBook} />}
              />
            {/* show my restauarnt details */}
            <Route
              path="/MyRestaurants/:resId"
              element={<MyResDetails myrestaurant={myrestaurant} handleDeleteRes={handleDeleteRes} />}
            />

            {/* show my restauarnt Bookings*/}
            <Route  
              path="/restaurants/:resId/Booking"
              element={<MyResBookings />}
            />
            {/* update restaurant*/}
               
               <Route  
              path="/update/:resId"
              element={<ResForm handleUpdateRes={handleUpdateRes}/>}
            />
            <Route
              path="/restaurants/:resId"
              element={
                <RestaurantDetails handleAddBooking={handleAddBooking} handleAddRating={handleAddRating} />
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

