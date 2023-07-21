import '../css/2_content.css';
import FormCar from '../content/25_1_form_car'; 

function Car () {
    return (
        <div className="content_list">
            <h4 className="content_list-title">Nhập thông tin xuất nhập xe bồn</h4>
             <div className="content_form">
                <div className="form_list">
                   <FormCar/>
                </div>
            </div>
            <div className="form_result">HOÀN THÀNH NHẬP LIỆU</div>
            <div className="tank_statistical">
                <table className="statistical_list">
                    <tr>
                        <th colspan="8">Thông tin xuất nhập xe bồn</th>
                    </tr>
                    <tr className="table_menu">
                        <th colspan="2">Ngày</th>
                        <th>Giờ</th>
                        <th>Nội dung</th>
                        <th>Biển số xe</th>
                        <th>Loại hàng</th>
                        <th>Khối lượng</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>7h00</td>
                        <td>Xuất</td>
                        <td>29C-979.69</td>
                        <td>Dung Quất</td>
                        <td>14.500</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>17h00</td>
                        <td>Nhập</td>
                        <td>29C-979.69</td>
                        <td>Nhập khẩu</td>
                        <td>24.500</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Car;