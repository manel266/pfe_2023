import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions";
import Axios from "axios";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { profilePicture } from "./constPicture";
import { Link } from "react-router-dom";
const Users = (props) => {
  const [show, setShow] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [dataState, SetDataState] = useState([]);
  const usersData = useSelector((state) => state.users);
  const [userDetailModal, setuserDetailModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  const handleCloseProductDetailsModal = () => {
    setuserDetailModal(false);
  };
  const showUserDetailsModal = (user) => {
    setUserDetails(user);
    setuserDetailModal(true);
  };
  const renderUserDetailsModal = () => {
    if (!userDetails) {
      return null;
    }

    return (
      <Modal
        show={userDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={"User Details"}
        size="lg"
      >
        <Row>
          <Col md="6">
            <img
              src={profilePicture}
              alt="profile"
              style={{ height: "180px", width: "180px" }}
            />
          </Col>

          <Col md="6">
            <Col md="6">
              <label className="key">#IDUser</label>
              <p className="value">{userDetails.chiffre}</p>
            </Col>
            <Col md="6">
              <label className="key">firstName</label>
              <p className="value">{userDetails.firstName}</p>
            </Col>

            <Col md="6">
              <label className="key">lastName</label>
              <p className="value">{userDetails.lastName}</p>
            </Col>
            <Col md="6">
              <label className="key">email</label>
              <p className="value">{userDetails.email}</p>
            </Col>
            <Col md="6">
              <label className="key">Country</label>
              <p className="value">{userDetails.country ?? "tunis"}</p>
            </Col>
            <Col md="6">
              <label className="key">Sexe</label>
              <p className="value">{userDetails.sexe ?? "F"}</p>
            </Col>
            <Col md="6">
              <label className="key">Statut </label>
              <p className="value">{userDetails.statut ?? "blogger"}</p>
            </Col>
            <Col md="6">
              <label className="key">contact number </label>
              <p className="value">{userDetails.contactNumber ?? "25832500"}</p>
            </Col>
            <Col md="6">
              <label className="key">number of site created</label>
              <p className="value">{userDetails.contactNumber ?? "4"}</p>
              <Link to={`/${userDetails._id}/details`}>
                sites created by {userDetails.firstName}
              </Link>
            </Col>
          </Col>
        </Row>
      </Modal>
    );
  };

  const renderUsers = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm" className="TableProducts">
        <thead>
          <tr>
            <th></th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.length > 0
            ? usersData.map((user) => (
                <tr key={user._id}>
                  <td>{user.chiffre}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => showUserDetailsModal(user)}>
                      info
                    </button>
                    <button
                      onClick={() => {
                        Axios.delete(
                          `http://localhost:5000/api/admin/${user._id}`
                        ).then(() => {
                          dispatch(getUsers());
                        });
                      }}
                    >
                      del
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };
  const submitClientForm = () => {
    const Form = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  };
  const renderAddUserModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New user"}
        onSubmit={submitClientForm}
      >
        <Input
          label="firstName"
          value={firstName}
          placeholder={`firstName`}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <Input
          label="lastName"
          value={lastName}
          placeholder={`lastName`}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="email"
          value={email}
          placeholder={`email`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="password"
          value={password}
          placeholder={`password`}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    );
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <h3>Users</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderUsers()}</Col>
        </Row>
      </Container>

      {renderUserDetailsModal()}
    </Layout>
  );
};

export default Users;
