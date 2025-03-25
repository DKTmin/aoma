import React from 'react'
import { Container, Table, Button, Card, Row, Col, Badge } from 'react-bootstrap'
import { Trash, PlusLg, DashLg, Cart as CartIcon, CreditCard } from 'react-bootstrap-icons'
import { useCart } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();
  const navigator = useNavigate()
  // Calculate total item count
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container className="py-5">
      <Card className="shadow-lg border-0">
        <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
          <div>
            <CartIcon className="me-2" size={24} />
            <span className="h4 mb-0">Giỏ Hàng</span>
          </div>
          <Badge bg="light" text="dark">
            {totalItems} Sản Phẩm
          </Badge>
        </Card.Header>

        {cartItems.length === 0 ? (
          <Card.Body className="text-center py-5">
            <img
              src="/empty-cart.svg"
              alt="Empty Cart"
              style={{ maxWidth: '300px', opacity: 0.7 }}
              className="mx-auto mb-4"
            />
            <p className="text-muted h5">Giỏ hàng của bạn đang trống</p>
          </Card.Body>
        ) : (
          <>
            <Table hover responsive className="mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="text-muted">Sản Phẩm</th>
                  <th className="text-muted">Đơn Giá</th>
                  <th className="text-muted text-center">Số Lượng</th>
                  <th className="text-muted">Tổng</th>
                  <th className="text-muted text-center">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="align-middle">
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={`/images/${item.image}`}
                          alt={item.title}
                          style={{
                            width: '70px',
                            height: '70px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                          className="me-3 shadow-sm"
                        />
                        <span className="fw-bold">{item.title}</span>
                      </div>
                    </td>
                    <td className="text-primary fw-bold">
                      {item.price.toLocaleString()} ₫
                    </td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '30px', height: '30px' }}
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <DashLg />
                        </Button>
                        <span className="mx-2 fw-bold">{item.quantity}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '30px', height: '30px' }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <PlusLg />
                        </Button>
                      </div>
                    </td>
                    <td className="text-success fw-bold">
                      {(item.price * item.quantity).toLocaleString()} ₫
                    </td>
                    <td className="text-center">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash className="me-1" /> Xóa
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Card.Footer className="bg-light">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <CartIcon className="me-2 text-primary" size={24} />
                    <span className="text-muted">Tổng Số Lượng: {totalItems} sản phẩm</span>
                  </div>
                </Col>
                <Col md={6} className="text-end">
                  <div className="d-flex flex-column align-items-end">
                    <h4 className="mb-2">
                      Tổng Cộng:
                      <span className="text-primary ms-2">
                        {calculateTotal().toLocaleString()} ₫
                      </span>
                    </h4>
                    <div className="d-flex gap-2">
                      <Button onClick={() => navigator('/')} variant="outline-secondary">
                        Tiếp Tục Mua Hàng
                      </Button>
                      <Button variant="primary" className="d-flex align-items-center">
                        <CreditCard className="me-2" /> Thanh Toán Ngay
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </>
        )}
      </Card>
    </Container>
  )
}

export default Cart