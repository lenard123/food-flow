import ReactDOM from "react-dom/client";
import './bootstrap';
import Router from "./Router";

const app = document.getElementById('root')

if (app) {
    const page = app.dataset['page']
    ReactDOM.createRoot(app).render(<Router page={page}/>)
}