import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarAdmin from './NavbarAdmin';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data users dari API
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data); // Simpan data users ke state
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Jalankan sekali saat pertama kali render

  return (
    <div>
      <NavbarAdmin />

      <div className="admin-messages mt-3 px-5">
        <h2>Daftar Users</h2>
        <Table striped bordered hover size="sm">
          <thead className="title-table bg-body-secondary text-center">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Tidak ada data pengguna</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPage;
