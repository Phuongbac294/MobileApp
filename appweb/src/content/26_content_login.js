import '../css/2_content.css';
import FormLogin from '../content/26_1_form_login';

function Login () {
    return (
        <div className="content_list">
            <h4 className="content_list-title">Đăng nhập vào hệ thống</h4>
            <div className="form_list">
            <FormLogin/>
            </div>
        </div>
    )
}

export default Login;