import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QRGenerator } from './components/qr-generator';
import { RedeemForm } from './components/redeem-form';
// import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRGenerator />} />
        <Route path="/redeem" element={<RedeemForm />} />
      </Routes>
      {/* <Toaster /> */}
    </BrowserRouter>
  );
}

export default App;