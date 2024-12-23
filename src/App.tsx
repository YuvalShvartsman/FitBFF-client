import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";
import Modal from "./components/shared/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gold-100 size-11 w-full font-light">
      <button onClick={() => setOpen(true)}>open modal</button>
      <button>dsaklndkjsandjksandsa</button>
      <Modal
        title="My first Modal"
        open={open}
        allowClickOutside={false}
        handleClose={() => setOpen(false)}
        showCloseButton={true}
        size="medium"
        actionLabel="Make me coffee"
        onAction={() => setOpen(false)}
      />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
