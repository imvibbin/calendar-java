import "./Test.css";
import fundo from "../assets/fundo.jpg";
const Test = () => {
  return (
    <>
      <div className="celda row justify-content-center">
        <div
          className="col-6 border border-white ms-1"
          style={{
            borderRadius: "10px",
            width: "250px",
            height: "50px",
            backgroundColor: "#5852FF",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="Image">
            <img
              src={fundo}
              alt="fundo"
              style={{ width: "10%", height: "70%", margin: "0 0 0 0" }}
            />
          </div>
          <div className="text-container">
            <p style={{ margin: 0 }}>Hola</p>
            <p style={{ margin: 0 }}>adios</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
