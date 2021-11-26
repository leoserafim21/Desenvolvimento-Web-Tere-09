import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./produtoDetalheStyle.css";
function ProdutoDetalhe() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <div className="produtoDetalhe">
            <Card className="produtoCard">
              <Col>
                <img src="PalidoPontoAzul.jpg"  alt="" fluid />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>Pálido Ponto Azul – Carl Sagan</Card.Title>
                  <Card.Text>
                    Por que gastar fortunas com programas espaciais quando há
                    tantos problemas aguardando solução a poucos metros de
                    nossas casas? Para Sagan, um dia o conhecimento do espaço
                    poderá significar nossa sobrevivência como espécie. ‘Pálido
                    ponto azul’ revela como as descobertas científicas alteraram
                    nossa percepção de quem somos e do lugar que ocupamos no
                    Universo – e nos incita a refletir sobre o uso que daremos a
                    esse conhecimento.
                  </Card.Text>
                  <Form.Label>R$ 45,00</Form.Label>
                  <Form>
                    <Button variant="primary" type="submit">
                      Comprar
                    </Button>
                  </Form>
                </Card.Body>
              </Col>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProdutoDetalhe;
