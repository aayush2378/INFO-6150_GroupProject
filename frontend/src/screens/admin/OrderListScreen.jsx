import React from 'react';
//import { LinkContainer } from 'react-router-bootstrap';
import { Table } from 'react-bootstrap';
import { FaTimes, FaCheck } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/orderApiSlice';
import { useNavigate } from 'react-router-dom';

const OrderListScreen = () => {
  const navigate = useNavigate();
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  console.log(orders);

  return (
    <>
      <h1>0rders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped hover responsive
          className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} 
              onClick={() => navigate(`/order/${order._id}`)}
              style={{ cursor: 'pointer' }}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td> {order.isPaid ? (
                  <span>
                  <FaCheck style={{ color: 'green', marginRight: '5px' }} />
                  {order.paidAt.substring(0, 10)}
                </span>
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}</td>
                <td> {order.isDelivered ? (
                  <span>
                  <FaCheck style={{ color: 'green', marginRight: '5px' }} />
                  {order.deliveredAt.substring(0, 10)}
                </span>
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}</td>
                {/* <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button className='btn-sm custom-detail-btn'>
                      Details <FaArrowRight />
                    </Button>
                  </LinkContainer>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>);
}

export default OrderListScreen
