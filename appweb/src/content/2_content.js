import '../css/2_content.css';
import Total from './21_content_total';
import Tank from './22_content_tank';
import Extraction from './23_content_extraction';
import Shell from './24_content_shell';
import Car from './25_content_car';
import {Routes, Route} from 'react-router-dom'

function Content () {
    
    return (
        <div className="content">
            <Routes>
                <Route path="/total" element={<Total/>} />
                <Route path="/tank" element={<Tank/>} />
                <Route path="/extraction" element={<Extraction/>} />
                <Route path="/shell" element={<Shell/>} />
                <Route path="/car" element={<Car/>} />                
            </Routes>
        </div>
    )
}

export default Content;