import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuTopo from "../menu/MenuTopo";
import React, { Component, useState , useEffect} from "react";
import Api from "../api/Api";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";


function ProdutoDetalhe() {
  const [produto,setProduto] = useState([]);

  const {id} = useParams();
  
  useEffect(()=>{
    
    console.log(id)
    Api.get(`/produto/${id}`).then(listar);

    function listar (response) {
      setProduto(response.data)
    }

    
  });

 return (
   <>
   <Container fluid>
        <MenuTopo></MenuTopo>
        <Row>
          <Col sm={12}>
            <div>
              <h1>Listar pedidos </h1>
              {console.log(produto)}
              
                <li key={produto.id}>
                  <h2>
                    {" "}
                    <strong>produto: </strong>
                  </h2>
                  {produto.produto}
                  <p> descrição</p>
                  {produto.descricao}
                  descrição:
                  {produto.foto}
                  valor do pedido:
                  {produto.valor}
                  <button> comprar </button>
                  <p>foto: </p>
                  <img src={produto.fotoLink} alt="" />
                  
                </li>
              )
            </div>
          </Col>
        </Row>
      </Container>
   </>

 );

    
  
}
export default ProdutoDetalhe;
