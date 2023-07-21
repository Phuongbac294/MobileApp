import '../css/2_content.css';
import FormShell from './24_1_form_shell';

function Shell () {
    return (
        <div className="content_list">
            <h4 className="content_list-title">Nhập thông tin xuất nhập gas bình</h4>
             <div className="content_form">
                <div className="form_list">
                   <FormShell/>
                </div>
            </div>
            <div className="form_result">HOÀN THÀNH NHẬP LIỆU</div>
            <div className="tank_statistical">
                <table className="statistical_list">
                    <tr>
                        <th colspan="11">Thông tin chiết nạp</th>
                    </tr>
                    <tr className="table_menu">
                        <th colspan="2">Ngày</th>
                        <th>Giờ</th>
                        <th>Nội dung</th>
                        <th>Biển số xe</th>
                        <th>Bình 12</th>
                        <th>Bình 45 đơn</th>
                        <th>Bình 45 kép</th>
                        <th>Tổng vỏ</th>
                        <th>Tổng khối lượng</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>7h00</td>
                        <td>Xuất</td>
                        <td>29C-979.69</td>
                        <td>0</td>
                        <td>20</td>
                        <td>20</td>
                        <td>40</td>
                        <td>1.800</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>17h00</td>
                        <td>Nhập</td>
                        <td>29C-979.69</td>
                        <td>0</td>
                        <td>20</td>
                        <td>20</td>
                        <td>40</td>
                        <td>200</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Shell;