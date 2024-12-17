import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Row, Col, Form as BootstrapForm } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin";

const AdminNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [editNews, setEditNews] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/news");
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const schema = Yup.object().shape({
    title: Yup.string().required("Judul wajib diisi"),
    link: Yup.string()
      .url("Harus berupa URL yang valid")
      .required("Link wajib diisi"),
    date: Yup.date().required("Tanggal wajib diisi"),
    logo: Yup.mixed().required("Logo wajib diunggah"),
    thumbnail: Yup.mixed().required("Thumbnail wajib diunggah"),
  });

  const deleteNews = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/news/${id}`
        );
        alert(response.data.message);
        fetchNews(); 
      } catch (error) {
        console.error("Error deleting news:", error);
        alert(error.response?.data?.message || "Gagal menghapus berita.");
      }
    }
  };

  const updateNews = (item) => {
    setEditNews(item); 
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="admin-news mt-4">
        <h2>Berita</h2>
        <div className="mt-4 px-5">
          <Formik
            key={editNews ? editNews.id : "new"}
            validationSchema={schema}
            initialValues={{
              title: editNews ? editNews.title : "",
              link: editNews ? editNews.link : "",
              date: editNews ? editNews.date.split("T")[0] : "",
              logo: editNews ? null : "",
              thumbnail: editNews ? null : "",
            }}
            onSubmit={async (values, { resetForm }) => {
              const formData = new FormData();
              formData.append("title", values.title);
              formData.append("link", values.link);
              formData.append("date", values.date);
              if (values.logo) {
                formData.append("logo", values.logo);
              }
              if (values.thumbnail) {
                formData.append("thumbnail", values.thumbnail);
              }

              try {
                if (editNews) {
                  const response = await axios.put(
                    `http://localhost:5000/api/news/${editNews.id}`,
                    formData
                  );
                  alert(response.data.message);
                } else {
                  const response = await axios.post(
                    "http://localhost:5000/api/news",
                    formData,
                    {
                      headers: { "Content-Type": "multipart/form-data" },
                    }
                  );
                  alert(response.data.message);
                }
                resetForm();
                setEditNews(null);
                fetchNews();
              } catch (error) {
                console.error("Error saving news:", error);
                alert(
                  error.response?.data?.message || "Gagal menyimpan berita."
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
                  <BootstrapForm.Group as={Col} md="6" controlId="title">
                    <BootstrapForm.Label>Judul</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      isInvalid={touched.title && !!errors.title}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      {errors.title}
                    </BootstrapForm.Control.Feedback>
                  </BootstrapForm.Group>

                  <BootstrapForm.Group as={Col} md="6" controlId="link">
                    <BootstrapForm.Label>Link</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="url"
                      name="link"
                      value={values.link}
                      onChange={handleChange}
                      isInvalid={touched.link && !!errors.link}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      {errors.link}
                    </BootstrapForm.Control.Feedback>
                  </BootstrapForm.Group>
                </Row>

                <Row className="mb-3">
                  <BootstrapForm.Group as={Col} md="6" controlId="logo">
                    <BootstrapForm.Label>Upload Logo</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="file"
                      name="logo"
                      onChange={(e) => setFieldValue("logo", e.target.files[0])}
                      isInvalid={touched.logo && !!errors.logo}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      {errors.logo}
                    </BootstrapForm.Control.Feedback>
                  </BootstrapForm.Group>

                  <BootstrapForm.Group as={Col} md="6" controlId="thumbnail">
                    <BootstrapForm.Label>Upload Thumbnail</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="file"
                      name="thumbnail"
                      onChange={(e) =>
                        setFieldValue("thumbnail", e.target.files[0])
                      }
                      isInvalid={touched.thumbnail && !!errors.thumbnail}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      {errors.thumbnail}
                    </BootstrapForm.Control.Feedback>
                  </BootstrapForm.Group>
                </Row>

                <BootstrapForm.Group className="mb-3" controlId="date">
                  <BootstrapForm.Label>Tanggal</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    isInvalid={touched.date && !!errors.date}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.date}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <Button type="submit" className="my-3">
                  {editNews ? "Edit" : "Tambah"} Berita
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="mt-5 text-center">
          <h3>Berita Yang Ditambahkan</h3>
          <div className="news-grid">
            {newsList.map((item) => (
              <div className="news-item" key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`http://localhost:5000${item.logo}`}
                    alt="Logo"
                    className="news-logo"
                  />
                  <img
                    src={`http://localhost:5000${item.thumbnail}`}
                    alt="Thumbnail"
                    className="thumbnail"
                  />
                  <h3>{item.title}</h3>
                  <p>{new Date(item.date).toLocaleDateString()}</p>
                </a>
                <div className="d-flex justify-content-center align-content-center gap-2 mt-4">
                  <Button
                    variant="primary"
                    onClick={() => updateNews(item)}
                    className="edit-umkm align-items-center py-1 px-4 mt-0 btn-sm"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteNews(item.id)}
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

export default AdminNews;
