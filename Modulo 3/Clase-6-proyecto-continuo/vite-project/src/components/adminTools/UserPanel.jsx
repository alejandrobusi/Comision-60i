import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import { alertGeneric } from '../../utils/alertCustom';
import { messages } from '../../utils/messages';

const UserPanel = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [changeFlag, setChangeFlag] = useState(false);


  const getAllUsers = async() => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${URL_BASE}/users`);
      setUsers(data);
    } catch (error) {
      alertGeneric(messages.genericGetError, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = async() => {
    setShowEditModal(false);
    try {
      setIsLoading(true);
      await axios.patch(`${URL_BASE}/users/edit/${selectedUser._id}`, selectedUser);
      setChangeFlag(!changeFlag);
    } catch (error) {
      alertGeneric(messages.genericErrorPost, 'Uppss...', 'error');
    } finally {
      setSelectedUser(null);
      setIsLoading(false);
    }
  }

  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  }

  useEffect(() => {
    getAllUsers();
  }, [changeFlag]);

  const deleteUser = async(id) => {
    try {
      if (confirm('Este paso no es reversible. estas seguro?')) {
        setIsLoading(true);
        await axios.delete(`${URL_BASE}/users/delete/${id}`);
      } else {
        return;
      }
      setChangeFlag(!changeFlag);
    } catch (error) {
      alertGeneric(messages.genericErrorPost, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeStatus = async(e, user) => {
    setShowEditModal(false);
    try {
      setIsLoading(true);
      await axios.patch(`${URL_BASE}/users/edit/${user._id}`, {...user, disabled: !e.target.checked});
      setChangeFlag(!changeFlag);
    } catch (error) {
      alertGeneric(messages.genericErrorPost, 'Uppss...', 'error');
    } finally {
      setSelectedUser(null);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          { isLoading 
            ? <LoadingScreen />
            : (
              <Table striped bordered hover variant='dark' className='my-4'>
                <thead>
                  <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Nombre</th>
                    <th className='text-center'>Apellido</th>
                    <th className='text-center'>Email</th>
                    <th className='text-center'>Estado</th>
                    <th className='text-center'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, index) => (
                      <tr key={index}>
                        <td className='text-center'>{user.id}</td>
                        <td className='text-center'>{user.name}</td>
                        <td className='text-center'>{user.lastName}</td>
                        <td className='text-center'>{user.email}</td>
                        <td className='text-center'>
                          <Form.Check aria-label="option 1" onChange={(e) => handleChangeStatus(e, user)} checked={!user.disabled}/>
                        </td>
                        <td className='text-center'>
                          <Col className='d-flex justify-content-center'>
                            <Button className='btn-sm btn-danger mx-2' onClick={() => deleteUser(user._id)}>Eliminar</Button>
                            <Button className='btn-sm' variant="success" onClick={() => handleEdit(user)}>
                              Editar
                            </Button>
                          </Col>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            )
          }

        <Modal show={showEditModal} onHide={handleSaveEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Editar usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  value={selectedUser ? selectedUser.name : ''}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el Apellido"
                  value={selectedUser ? selectedUser.lastName : ''}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      lastName: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese el correo electrónico"
                  value={selectedUser ? selectedUser.email : ''}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
        </Col>
      </Row>
    </Container>
  )
}

export default UserPanel
