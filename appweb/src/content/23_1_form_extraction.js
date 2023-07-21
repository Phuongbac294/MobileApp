import '../css/2_content.css';

function FormExtraction () {
    return (
        <form className="form_tank">
                    <label>Ca chiết nạp </label><input className="input" type="number"/><br></br>
                    <label>Bình 12 kg </label><input className="input" type="number"/><br></br>
                    <label>Bình 45kg</label><input className="input" type="number"/><br></br>
                    <label>Bình 45kg 2 van</label><input className="input" type="number"/><br></br>
                    <input className="input" type="submit" value="Sumbit" />
        </form>
    )
}

export default FormExtraction;