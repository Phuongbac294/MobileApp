import '../css/1_menu.css';
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <ul className= "menu_list">
                <li className= "menu_item" ><NavLink to="/home">Anphu energy</NavLink></li>
                <li className= "menu_item"><NavLink to="/total">Tổng hợp</NavLink></li>
                <li className= "menu_item"><NavLink to="/tank">Bồn</NavLink></li>
                <li className= "menu_item"><NavLink to="/extraction">Chiết nạp</NavLink></li>
                <li className= "menu_item"><NavLink to="/shell">Xuất nhập gas bình</NavLink></li>
                <li className= "menu_item"><NavLink to="/car">Xuất nhập gas bồn</NavLink></li>
            </ul>
            <ul className= "menu_list">
            <li className= "menu_item"><NavLink to="/updateData">Cập nhập dữ liệu</NavLink></li>
            <li className= "menu_item"><NavLink to="/login">Đăng nhập</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;