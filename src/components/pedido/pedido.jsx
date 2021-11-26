import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./pedidoStyle.css";
function Pedido() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div className="pedidoList">
            <Card style={{ }}>
              <Card.Body>
                <Card.Title>Meu Pedido</Card.Title>
                <Card.Text>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pálido Ponto Azul</td>
                        <td>1</td>
                        <td>45,00</td>
                        <td>45,00</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Form.Label>Total apagar : R$ 45,00</Form.Label>
                </Card.Text>
                <Button variant="primary">Pagar</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Pedido;
