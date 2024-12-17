import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";
import NavbarAdmin from "./NavbarAdmin";

const AdminUMKM = () => {
  const [umkmList, setUmkmList] = useState([]);
  const [editUMKM, setEditUMKM] = useState(null);

  // Fungsi untuk mengambil data UMKM
  const fetchUMKM = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/umkm");
      setUmkmList(response.data.data);
    } catch (error) {
      console.error("Error fetching UMKM data:", error);
      alert("Gagal mengambil data UMKM. Silakan coba lagi.");
    }
  };

  useEffect(() => {
    fetchUMKM();
  }, []);

  // Fungsi untuk menghapus data UMKM
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk UMKM ini?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/umkm/${id}`
        );
        alert(response.data.message);
        setUmkmList((prevList) => prevList.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting UMKM:", error);
        alert(error.response?.data?.message || "Gagal menghapus produk UMKM.");
      }
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Nama produk harus diisi"),
    category: yup.string().required("Kategori harus diisi"),
    price: yup
      .number()
      .typeError("Harga harus berupa angka")
      .required("Harga harus diisi")
      .positive("Harga harus lebih dari 0")
      .integer("Harga harus berupa bilangan bulat"),
    image: yup.mixed().required("File gambar harus diunggah"),
  });

  return (
    <div>
      <NavbarAdmin />
      <div className="py-4">
        <h2>Produk UMKM</h2>
        <div className="mt-4 px-5">
          <Formik
            key={editUMKM ? editUMKM.id : "new"}
            validationSchema={schema}
            initialValues={{
              name: editUMKM ? editUMKM.name : "",
              category: editUMKM ? editUMKM.category : "",
              price: editUMKM ? editUMKM.price : "",
              image: editUMKM ? null : "",
            }}
            onSubmit={async (values, { resetForm }) => {
              const formData = new FormData();
              formData.append("name", values.name);
              formData.append("category", values.category);
              formData.append("price", values.price);
              if (values.image) {
                formData.append("image", values.image);
              }

              try {
                if (editUMKM) {
                  // Edit data UMKM
                  const response = await axios.put(
                    `http://localhost:5000/api/umkm/${editUMKM.id}`,
                    formData
                  );
                  alert(response.data.message);
                } else {
                  const response = await axios.post(
                    "http://localhost:5000/api/umkm",
                    formData,
                    {
                      headers: { "Content-Type": "multipart/form-data" },
                    }
                  );
                  alert(response.data.message);
                }
                resetForm();
                setEditUMKM(null);
                fetchUMKM();
              } catch (error) {
                console.error("Error saving UMKM:", error);
                alert(
                  error.response?.data?.message ||
                    "Gagal menyimpan produk UMKM."
                );
              }
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="name">
                    <Form.Label>Nama Produk</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="category">
                    <Form.Label>Kategori</Form.Label>
                    <Form.Control
                      type="text"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      isInvalid={touched.category && !!errors.category}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.category}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="price">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      isInvalid={touched.price && !!errors.price}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.price}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="image">
                  <Form.Label>Upload Gambar</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
                    isInvalid={touched.image && !!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.image}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="my-5">
                  {editUMKM ? "Edit" : "Tambah"} Produk
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="mt-4 text-center">
          <h3 className="mb-4">Produk UMKM Yang Ditambahkan</h3>
          <div className="umkm-list">
            {umkmList.map((item) => (
              <div className="umkm-item d-flex gap-1" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="150"
                  height="150"
                />
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <p>Rp {item.price}</p>
                <div className="d-flex justify-content-center align-content-center gap-2">
                  <Button
                    variant="primary"
                    onClick={() => setEditUMKM(item)}
                    className="edit-umkm align-items-center py-1 px-4 mt-0 btn-sm"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                    className="delete-umkm align-items-center py-1 px-4 mt-0 btn-sm"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUMKM;
