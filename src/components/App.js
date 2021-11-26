import "bootstrap/dist/css/bootstrap.min.css";
import Produto from "./produto/Produto.jsx";
import ProdutoDetalhe from "./produto/ProdutoDetalhe.jsx";
import Pedido from "./pedido/pedido.jsx";

function App() {
  return (
    <>
      <Produto />
      <ProdutoDetalhe /> {/*  Vai ser tembutido no componente cliente */}
      <Pedido />
    </>
  );
}

export default App;
