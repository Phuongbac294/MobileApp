import '../css/2_content.css';

function FormShell () {
    return (
        <form className="form_tank">
                    <label>Hình thức </label><input className="input" type="text"/><br></br>
                    <label>Biển số xe: </label><input className="input" type="text"/><br></br>
                    <label>Bình 12 kg: </label><input className="input" type="number"/><br></br>
                    <label>Bình 45kg: </label><input className="input" type="number"/><br></br>
                    <label>Bình 45kg 2 van: </label><input className="input" type="number"/><br></br>
                    <label>Khối lượng gas: </label><input className="input" type="number"/>Kg<br></br>
                    <input className="input" type="submit" value="Sumbit" />
        </form>
    )
}

export default FormShell;