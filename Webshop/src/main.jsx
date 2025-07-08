import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { CartSumContextProvider } from './context/CartSumContextProvider.jsx';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </StrictMode>,
)


// 1a. E 12.05 - Reacti algus, HTML+CSS
// 1b. T 13.05 - Navigeerimise algus
// 2. K 14.05 - Navigeerimise jätk (failid), useState, &&, ===, !
// 3. E 19.05 - funktsioonid, useRef, components, dünaamiline CSS: ? :
// 4. T 27.05 - kalkulaatoris useRef ja useState, FIREBASE
// 5. N 29.05 kell 9.00-12.15 kontrollid (if/else, return), Toastify, lõpus natuke array'sid
// 6. E 02.06 kell 14.00-17.15 arrays: sort, filter, .push, .splice
// 7. R 05.06 kell 9.00  faili kasutamise algus, HALDA: .push, .splice
// 8. E 09.06 kell 14.00 objektid
// 9. R 13.06 kell 9.00 ostukorv, tõlge, localStorage
//10. E 16.06 kell 14.00 useParams: yks, muuda. ostukorvi kogusumma
//11. T 17.06 kell 9.00 kokkuarvutused, otsing, Number(). bootstrap, leaflet, emailjs
//12. E 23.06 kell 12.00 API otspunktid
//13. N 26.06 kell 9.00 alustame Webshop (eng projekt) --> kujundus
//14. E 30.06 kell 9.00 --> andmebaas
//15. N 03.07.kell 9.00 context (globaalne muutuja), TypeScript
//16. E 07.07 kell 12.30:  kogus ostukorvis, mobiilivaade
//17. N 10.07 kell 9.00-12.15  12.30-15.45   (14.07 Elen tööle) --> alamkomponentides andmete saatmine
//18. N 24.07??? kell 9.00-10.30

