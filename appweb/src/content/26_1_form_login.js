import '../css/2_content.css';


function FormLogin () {
    return (
        <form className="form_tank">
                    <label>Username</label><input className="input" type="text"/><br></br>
                    <label>Password </label><input className="input" type="text"/><br></br>
                    <input className="input" type="submit" value="Sumbit" />
        </form>
    )
}

export default FormLogin;