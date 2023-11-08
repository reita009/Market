import * as C from "./styled";
import * as B from "../Buttons/index";

const Header = () => {
  return (
    <>
      <C.Header>
        <div className="container">
          <div className="left-area">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="address">
              enviar para Julio <br /> <div>Rua Inglaterra 18</div>
            </div>
          </div>

          <div className="center">
            <form className="search">
              <input
                type="text"
                className="form-control "
                id="exampleFormControlInput1"
                placeholder="Buscar produtos, marcas e muito mais..."
              />
              <B.ButtonSearch>
                <button className="button-19" role="button">
                  Buscar
                </button>
              </B.ButtonSearch>
            </form>
            <div className="nav">
              <div className="nav-list">
                <li>Categorias</li>
                <li>Oferta do dia</li>
                <li>Histórico</li>
                <li>Supermercado</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Contato</li>
              </div>
            </div>
          </div>
        </div>
      </C.Header>
    </>
  );
};

export default Header;
