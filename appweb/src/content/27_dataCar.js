import '../css/2_content.css';

function DataCar () {
    return (
        <div className="tank_statistical">
            <table className="statistical_list">
                <tr>
                    <th colspan="6">Thông tin xe vận chuyển</th>
                </tr>
                <tr className="table_menu">
                    <th >TT</th>
                    <th>Biển số</th>
                    <th>Tải trọng</th>
                    <th>Loại xe</th>
                    <th>Thương hiệu</th>
                    <th>Thêm</th>
                </tr>
                <tr>
                    <td >1</td>
                    <td>29C-209.43</td>
                    <td>500</td>
                    <td>Bán tải</td>
                    <td>Toyota</td>
                    <td>Chỉnh sửa</td>
                </tr>
                <tr>
                    <td >2</td>
                    <td>29A-514.70</td>
                    <td>4 chỗ</td>
                    <td>sidan</td>
                    <td>Toyota</td>
                    <td>Chỉnh sửa</td>
                </tr>
            </table>
        </div>
        
    )
}

export default DataCar;