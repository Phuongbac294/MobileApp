import '../css/2_content.css';

function DataUser () {
    return (
        <div className="tank_statistical">
            <table className="statistical_list borden_green">
                <tr>
                    <th colspan="10">Thông tin nhân viên</th>
                </tr>
                <tr className="table_menu ">
                    <th >TT</th>
                    <th>MãNV</th>
                    <th>Họ và tên</th>
                    <th>Ngày sinh</th>
                    <th>CCCD</th>
                    <th>Địa chỉ</th>
                    <th>Điện thoại</th>
                    <th>Chúc vụ</th>
                    <th>Quyền hạn</th>
                    <th>Thêm</th>
                </tr>
                <tr>
                    <td >1</td>
                    <td>A01</td>
                    <td>Nguyễn Sỹ Phương</td>
                    <td>29-04-1983</td>
                    <td>027083136306</td>
                    <td>Nội Duệ, Tiên Du, Bắc Ninh</td>
                    <td>09777809587</td>
                    <td>Kỹ thuật</td>
                    <td>Admin</td>
                    <td>Chỉnh sửa</td>
                </tr>
                <tr>
                    <td >2</td>
                    <td>A02</td>
                    <td>Nguyễn Sỹ Thức</td>
                    <td>02-08-1975</td>
                    <td>027083136306</td>
                    <td>Nội Duệ, Tiên Du, Bắc Ninh</td>
                    <td>0914999029</td>
                    <td>Kỹ thuật</td>
                    <td>không</td>
                    <td>Chỉnh sửa</td>
                </tr>
            </table>
        </div>
        
    )
}

export default DataUser;