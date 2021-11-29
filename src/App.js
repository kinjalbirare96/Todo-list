import React, { useEffect, useState } from 'react';
import './App.css';
import Table from '../src/components/common/table';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from './actions/userAction';
import { getUserTableColumn } from './utility/commonMethod';
import AddUser from './components/addUser';

function App() {
  const dispatch = useDispatch();

  const { userDataDetails } = useSelector((state) => ({
    userDataDetails: state.userReducer,
  }));

  const [filterUserData, setFilterUserData] = useState([]);

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);


  useEffect(() => {
    setFilterUserData(userDataDetails)
  }, [userDataDetails]);

  const handleDelete = (id) => {
    setFilterUserData(filterUserData.filter((item) => item.id !== id));
  }

  const columnData = getUserTableColumn(filterUserData, handleDelete)

  const handleSubmitUserData = (data) => {
    const newData = {
      key: data.name,
      first_name: data.firstName,
      email: data.EmailAddress,
      last_name: data.LastName,
      age: '43'
    };

    setFilterUserData([...filterUserData, newData])
  };

  return (
    <div className="App">
      <div className={'add-user-container'}>
        <h2> Add User </h2>
        <AddUser handleSubmitUserData={handleSubmitUserData} />
      </div>
      <Table columns={columnData} dataSource={filterUserData} mountNode />

    </div>
  );
}

export default App;
