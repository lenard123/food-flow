import ReactDOM from "react-dom/client";
import Root from "./Root";
import './bootstrap';

const app = document.getElementById('root')

if (app) {
    const page = app.dataset['page']
    ReactDOM.createRoot(app).render(<Root page={page}/>)
}