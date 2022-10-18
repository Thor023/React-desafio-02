import Boton from "./Boton";

const Input = (props) => {
  return (
    <>
      <form onSubmit={props.formulario} className="form-main">
      {props.error ? (
            <p className="name-error">Favor ingresa tu nombre</p>
          ) : null}
        <div className="form-group">
          <label>Nombre</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa un texto"
            onChange={(e) => props.name(e.target.value)}
            value={props.dataName}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa una contraseña"
            onChange={(e) => props.password(e.target.value)}
            value={props.dataPassword}
          />
        </div>
        <div>
          {props.dataPassword === "252525" ? <Boton /> : null}

        </div>
      </form>
    </>
  );
};

export default Input;
