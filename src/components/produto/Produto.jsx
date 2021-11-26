
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './produtoStyle.css';
function Produto() {
    return (
    
      <Container fluid>
         
    <Row>
      <Col sm={12}>
    
      
      <div className= "produtoList">
      <Button className="btnNovoProduto" variant="primary">Novo Produto</Button>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Estoque</th>
              <th>Preço</th>
              <th>Data do cadastro</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pálido ponto azul</td>
              <td>Uma visão do futuro da humanidade no espaço Capa comum</td>
              <td>12</td>
              <td>47,29</td>
              <td>25/11/2021</td>
              <td>Astronomia</td>
              <td>Exibir</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Pálido ponto azul</td>
              <td>Uma visão do futuro da humanidade no espaço Capa comum</td>
              <td>6</td>
              <td>47,29</td>
              <td>25/11/2021</td>
              <td>Astronomia</td>
              <td>Exibir</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Pálido ponto azul</td>
              <td>Uma visão do futuro da humanidade no espaço Capa comum</td>
              <td>10</td>
              <td>47,29</td>
              <td>25/11/2021</td>
              <td>Astronomia</td>
              <td>Exibir</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Pálido ponto azul</td>
              <td>Uma visão do futuro da humanidade no espaço Capa comum</td>
              <td>13</td>
              <td>47,29</td>
              <td>25/11/2021</td>
              <td>Astronomia</td>
              <td>Exibir</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Pálido ponto azul</td>
              <td>Uma visão do futuro da humanidade no espaço Capa comum</td>
              <td>2</td>
              <td>47,29</td>
              <td>25/11/2021</td>
              <td>Astronomia</td>
              <td>Exibir</td>
            </tr>
           
           
          </tbody>
        </Table>
      </div>
      
      
      </Col>
    </Row>
  </Container>
     
    );
  }
  
  export default Produto;
  