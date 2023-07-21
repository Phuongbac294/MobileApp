import '../css/2_content.css';
import DataUser from './27_dataUser';
import DataCar from './27_dataCar';
import DataProduct from './27_dataProduct';

function UpdateUser () {
    return (
        <div className="content_list">
            <h4 className="content_list-title">Cập nhật, chỉnh sửa dữ liệu hệ thống</h4>
            <DataUser/><br/>
            <DataCar/><br/>
            <DataProduct/>
        </div>
    )
}

export default UpdateUser;