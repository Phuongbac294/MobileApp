import '../css/2_content.css';

function DataProduct () {
    return (
        <div className="tank_statistical">
            <table className="statistical_list borden_blue">
                <tr>
                    <th colspan="8">Thông tin sản phẩm</th>
                </tr>
                <tr className="table_menu ">
                    <th >TT</th>
                    <th>MãSP</th>
                    <th>Tên</th>
                    <th>Khối lượng chứa</th>
                    <th>Loại</th>
                    <th>Thương hiệu</th>
                    <th>Số lượng</th>                    
                    <th>Thêm</th>
                </tr>
                <tr>
                    <td >1</td>
                    <td>V01</td>
                    <td>Bình gas 12 kg</td>
                    <td>12</td>
                    <td>Van đơn</td>
                    <td>Gia định</td>
                    <td>5000</td>
                    <td>Chỉnh sửa</td>
                </tr>
                <tr>
                    <td >2</td>
                    <td>V02</td>
                    <td>Bình gas 45 kg</td>
                    <td>45</td>
                    <td>Van đơn</td>
                    <td>An Phú</td>
                    <td>8000</td>
                    <td>Chỉnh sửa</td>
                </tr>
                <tr>
                    <td >3</td>
                    <td>V03</td>
                    <td>Bình gas 45 kg</td>
                    <td>45</td>
                    <td>Van kép</td>
                    <td>An Phú</td>
                    <td>7500</td>
                    <td>Chỉnh sửa</td>
                </tr>
            </table>
        </div>
        
    )
}

export default DataProduct;