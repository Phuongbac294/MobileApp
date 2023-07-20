import '../css/2_content.css';

function FormTank () {
    return (
        <form className="form_tank">                    
                    <label>Loại gas: </label><input className="input" type="number"/><br></br>
                    <label>Level: </label><input className="input" type="number"/> mm<br></br>
                    <label>Pressure: </label><input className="input" type="number"/> bar<br></br>
                    <label>Temp liquid: </label><input className="input" type="number"/> độ C <br></br>
                    <label>Temp vaporize: </label><input className="input" type="number"/> độ C <br></br>
                    <label>Tỷ trọng hơi ở 15 độ C: </label><input className="input" type="number"/> kg/lít <br></br>
                    <label>MW - khối lượng Mol phân tử: </label><input className="input" type="number"/> <br></br>
                    <input className="input" type="submit" value="Sumbit" />
        </form>
    )
}

export default FormTank;