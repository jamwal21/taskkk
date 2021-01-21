import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";
import UserCard from "./components/UserCard";
import UserAddModal from "./components/UserAddModal";
import MOCK_DATA from "./MOCK_DATA.json";

function App() {
  const [userData, setUserData] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);

  const [user, setUser] = useState(null);

  const handleClose = () => {
    setShowAddModal(false);
  };
  const handleShow = () => setShowAddModal(true);

  useEffect(() => {
    //fetching the mock data first time when the app starts
    const readData = MOCK_DATA;
    setUserData(readData);
  }, []);

  const createData = (newData) => {
    //creating a new user
    const finalData = [newData, ...userData];
    setUserData(finalData);
  };

  const deleteData = (id) => {
    //deleting a user
    // console.log(id);
    const finalData = [...userData].filter((user) => user.id !== id);
    setUserData(finalData);
  };

  const updateData = (data) => {
    //updating a user
    const finalData = [...userData].map((item) => {
      if (item.id === data.id) {
        item = {
          ...item,
          username: data.username,
          phone: data.phone,
        };
      }
      return item;
    });

    setUserData(finalData);

    setUser(null);
    setUpdateUser(false);
  };

  return (
    <div className="App">
      <h1>
        Task{" "}
        <Button onClick={handleShow} className="mb-2 ml-2">
          Add user
        </Button>
      </h1>

      <UserAddModal
        user={user}
        updateUser={updateUser}
        show={showAddModal}
        handleClose={() => handleClose()}
        onSubmit={createData}
        onUpdate={updateData}
      />

      <Container fluid>
        <Row>
          {userData?.map((user) => (
            <UserCard
              key={user?.id}
              user={user}
              onDelete={deleteData}
              onUpdate={(data) => {
                setUser(data);
                setUpdateUser(true);
                handleShow();
              }}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
