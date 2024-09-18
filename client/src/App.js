import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import EventRegister from "./pages/EventRegister";
import EventParticipants from "./pages/EventParticipants";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className=" w-full max-w-[1360px] m-auto bg-primary min-h-[100vh] h-full">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Navigate to='/events'/>}></Route>
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id/register" element={<EventRegister />} />
        <Route path="/events/:id/participats" element={<EventParticipants/>}/>
        <Route path="/events/create" element={<CreateEvent/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
