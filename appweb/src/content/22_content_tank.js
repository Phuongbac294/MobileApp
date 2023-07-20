import '../css/2_content.css';
import FormTank from './22_1_form_tank';

// const tankInput = () => {
//     return (
        
//     )};

function Tank () {
    return (
        <div className="content_list">
            <h4 className="content_list-title">Nhập thông tin bồn chứa</h4>
            <div className="content_form">
                <div className="form_list">
                    <h5 className="form_tank-title">Bồn chứa 1</h5>
                    <FormTank/>
                </div>
                <div className="form_list">
                    <h5 className="form_tank-title">Bồn chứa 2</h5>
                    <FormTank/>
                </div>
                <div className="form_list">
                    <h5 className="form_tank-title">Bồn chứa 3</h5>
                    <FormTank/>
                </div>
                <div className="form_list">
                    <h5 className="form_tank-title">Bồn chứa 4</h5>
                    <FormTank/>
                </div>
                <div className="form_list">
                    <h5 className="form_tank-title">Bồn chứa 5</h5>
                    <FormTank/>
                </div>
            </div>
            <div className="form_result">HOÀN THÀNH NHẬP LIỆU</div>
            <div className="tank_statistical">
                <table className="statistical_list">
                    <tr>
                        <th colspan="10">Thông tin kho gas bồn</th>
                    </tr>
                    <tr className="table_menu">
                        <th colspan="2">Ngày</th>
                        <th>Giờ</th>
                        <th>Bồn 1</th>
                        <th>Bồn 2</th>
                        <th>Bồn 3</th>
                        <th>Bồn 4</th>
                        <th>Bồn 5</th>
                        <th>Tổng</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td colspan="2">23/07/2023</td>
                        <td>17h00</td>
                        <td>12.000</td>
                        <td>15.000</td>
                        <td>45.000</td>
                        <td>30.000</td>
                        <td>25.000</td>
                        <td>127.000</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                    <tr>
                        <td colspan="2">22/07/2023</td>
                        <td>17h00</td>
                        <td>10.000</td>
                        <td>10.000</td>
                        <td>40.000</td>
                        <td>30.000</td>
                        <td>30.000</td>
                        <td>120.000</td>
                        <td>Chỉnh sửa</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Tank;