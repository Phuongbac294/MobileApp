import '../css/2_content.css';


function FormCar () {
    return (
        <form className="form_tank">
                    <label>Hình thức </label><input className="input" type="text"/><br></br>
                    <label>Biển số xe: </label><input className="input" type="text"/><br></br>
                    <label>Loại hàng: </label><input className="input" type="text"/><br></br>
                    <label>Khối lượng: </label><input className="input" type="number"/>Kg<br></br>
                    <input className="input" type="submit" value="Sumbit" />
        </form>
    )
}

export default FormCar;