import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (URLi vahetamine + HTMLi vahetamine):
// 1. npm i react-router-dom (lisab node_modules kausta selleks vajalikud koodijupid)
// 2. import BrowserRouter osas (võtab node_modules kaustast navigeerimise koodijupi)
// 3. ümbritseme <App /> BrowserRouteriga (annab navigeerimise võimekuse <App/> failile)
// 4. teeme URLi ja HTMLi seoseid App.jsx failis

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 1a. E 12.05 - Reacti algus, HTML+CSS
// 1b. T 13.05 - Navigeerimise algus
// 2. K 14.05 - Navigeerimise jätk (failid), useState, &&, ===, !
// 3. E 19.05 - funktsioonid, useRef, components, dünaamiline CSS: ? :
// 4. T 27.05 - kalkulaatoris useRef ja useState
// 5. N 29.05 kell 9.00-12.15
// 6. E 02.06 kell 14.00-17.15  (kell 15.15 Eleni kõne)
// 7. R 05.06 kell 9.00
// 8. E 09.06 kell 14.00
// 9. R 13.06 kell 9.00
//10. E 16.06 kell 14.00
//11. T 17.06 kell 9.00    (18.06 Elen reisile)
//12. E 23.06 kell 12.00
//13. N 26.06 kell 8.30-11.45
//14. E 30.06 kell 8.30
//15. N 03.07 kell 8.30 (04.07 Elen tagasi)
//16. E 07.07 kell 12.00  (organiseerin)
//17. N 10.07 kell 8.30   (14.07 Elen tööle)
//18. N 24.07??? kell 8.30-10.00
