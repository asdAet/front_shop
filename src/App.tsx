// import { Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";

// import { Navbar } from "./components/Navbar.tsx";

import AdvertisingDashboard from "./page/PageDashboard";

function App() {
  return (
    // <Container className="navbars mb-4">
    //   {/* <Navbar /> */}
    //   <Routes>
    //     {/* <Route path="/home" element={<Home />} />
    //     <Route path="/store" element={<Store />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/homes" element={<Homes />} />
    //     <Route path="/auth" element={<Auth />} /> */}
    //   </Routes>
    // </Container>
    <>
      <link rel="icon" href="src\assets\img\avatar.png" />
      <title>Deep Shop</title>
      <div className="App">
        {/* Вот тут вы рендерите свой Dashboard */}
        <AdvertisingDashboard />
      </div>
    </>
  );
}

export default App;
