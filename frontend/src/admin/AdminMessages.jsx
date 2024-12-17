import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import NavbarAdmin from "./NavbarAdmin";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
        <NavbarAdmin/>
      <div className="admin-messages mt-3 px-5">
        <h2>Form Pertanyaan</h2>
        <Table striped bordered hover size="sm">
          <thead className="title-table bg-body-secondary text-center">
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Telepon</th>
              <th>Alamat</th>
              <th>Email</th>
              <th>Pesan</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td className="text-center">{message.id}</td>
                <td>{message.name}</td>
                <td>{message.phone}</td>
                <td>{message.address}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>{new Date(message.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminMessages;
