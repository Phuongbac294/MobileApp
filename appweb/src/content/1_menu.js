import '../css/1_menu.css';
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <ul className= "menu_list">
                <li className= "menu_item" >Anphu energy</li>
                <li className= "menu_item"><NavLink to="/total">Tổng hợp</NavLink></li>
                <li className= "menu_item"><NavLink to="/tank">Bồn</NavLink></li>
                <li className= "menu_item"><NavLink to="/extraction">Chiết nạp</NavLink></li>
                <li className= "menu_item"><NavLink to="/shell">Xuất nhập gas bình</NavLink></li>
                <li className= "menu_item"><NavLink to="/car">Xuất nhập gas bồn</NavLink></li>
            </ul>
            <ul className= "menu_list">
            <li className= "menu_item">Đăng ký</li>
            <li className= "menu_item">Đăng nhập</li>
            </ul>
        </div>
    )
}

export default Menu;