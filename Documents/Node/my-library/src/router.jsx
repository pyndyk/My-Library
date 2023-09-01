import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App.jsx'
import BookDetail from "./Components/bookDetail/bookDetail.jsx"
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/"> </Route>
                <Route element={<div>Not found</div>} path='*'> </Route>
                <Route element={<BookDetail />} path="/books/:id"> </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router