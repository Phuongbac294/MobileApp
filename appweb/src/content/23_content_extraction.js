import '../css/2_content.css';
import FormExtraction from './23_1_form_extraction';

function Extraction () {
    return (
        <div className="content_list">
             <h4 className="content_list-title">Nhập thông tin chiết nạp</h4>
             <div className="content_form">
                <div className="form_list">
                   <FormExtraction/>
                </div>
            </div>
            <div className="form_result">HOÀN THÀNH NHẬP LIỆU</div>
            <div className="tank_statistical">
                <table className="statistical_list">
                    <tr>
                        <th colspan="9">Thông tin chiết nạp</th>
                    </tr>
                    <tr className="table_menu">
                        <th colspan="2">Ngày</th>
                        <th>Giờ</th>
                        <th>Ca 1</th>
                        <th>Ca 2</th>
                        <th>Ca 3</th>
                        <th>Ca 4</th>
                        <th>Tổng</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>17h00</td>
                        <td>9.000</td>
                        <td>5.000</td>
                        <td>9.000</td>
                        <td>5.000</td>
                        <td>28.000</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                    <tr>
                        <td colspan="2">22/07/2023</td>
                        <td>17h00</td>
                        <td>10.000</td>
                        <td>5.000</td>
                        <td>9.000</td>
                        <td>5.000</td>
                        <td>29.000</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Extraction;