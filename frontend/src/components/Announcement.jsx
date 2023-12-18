import React, { useState, useEffect, useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import axios from 'axios';
import Dashboard from './Dasboard'
import { Modal, Button, Form } from 'react-bootstrap';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [announcementsPerPage] = useState(5);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: 'Başlık',
        accessor: 'title',
      },
      {
        Header: 'İçerik',
        accessor: 'body',
      },
      {
        Header: 'Kan Tipi',
        accessor: 'blood_type.type',
      },
      {
        Header: 'İşlemler',
        Cell: ({ row }) => (
          <div>
            <Button variant="info" onClick={() => handleUpdate(row.original)}>
              Güncelle
            </Button>
            <Button variant="danger" onClick={() => handleDelete(row.original)}>
              Sil
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: announcements,
      initialState: { pageIndex: 0, pageSize: announcementsPerPage },
    },
    usePagination
  );

  useEffect(() => {
    axios
      .get('http://localhost:8004/announcement/')
      .then((res) => {
        const indexedData = res.data;
        setAnnouncements(indexedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowUpdateModal(true);
  };

  const handleDelete = (announcement) => {
    const { _id } = announcement;

    axios
      .delete(`http://localhost:8004/announcement/${_id}`)
      .then((res) => {
        setAnnouncements((prevAnnouncements) => prevAnnouncements.filter((item) => item._id !== _id));
        setCurrentPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModalSave = () => {
    if (selectedAnnouncement) {
      // Güncelleme işlemi
      axios
        .put(`http://localhost:8004/announcement/${selectedAnnouncement._id}`, selectedAnnouncement)
        .then((res) => {
          setAnnouncements((prevAnnouncements) =>
            prevAnnouncements.map((item) => (item._id === selectedAnnouncement._id ? selectedAnnouncement : item))
          );
          setShowUpdateModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Ekleme işlemi
      axios
        .post('http://localhost:8004/announcement/', selectedAnnouncement)
        .then((res) => {
          setAnnouncements((prevAnnouncements) => [...prevAnnouncements, res.data]);
          setShowAddModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleAddModalOpen = () => {
    setSelectedAnnouncement({
      title: '',
      body: '',
      blood_type: { type: '' },
    });
    setShowUpdateModal(false); // Update modalını kapat
    setShowAddModal(true);
  };

  const handleUpdateModalClose = () => {
    setSelectedAnnouncement(null);
    setShowUpdateModal(false);
  };

  const handleAdd = () => {
    const newAnnouncement = {
      title: selectedAnnouncement?.title || '',
      body: selectedAnnouncement?.body || '',
      blood_type: { type: selectedAnnouncement?.blood_type?.type || '' },
    };

    axios
      .post('http://localhost:8004/announcement/', newAnnouncement)
      .then((res) => {
        setAnnouncements((prevAnnouncements) => [...prevAnnouncements, res.data]);
        setShowAddModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dashboard>
      <div className="announcement-container">
        <div className="jumbotron announcement-header text-center">
          <h6 className="display-4">Duyurular</h6>
        </div>
        
        <Button variant="success" onClick={handleAddModalOpen}>
          Yeni Duyuru Ekle
        </Button>
        <br />
        <table className="table table-striped table-bordered" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns) => (
                  <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-container">
          <ul className="pagination">
            {Array.from({ length: Math.ceil(announcements.length / announcementsPerPage) }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>


        <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Yeni Duyuru Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Başlık"
              value={selectedAnnouncement?.title || ''}
              onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, title: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="İçerik"
              value={selectedAnnouncement?.body || ''}
              onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, body: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="Kan Tipi"
              value={selectedAnnouncement?.blood_type.type || ''}
              onChange={(e) =>
                setSelectedAnnouncement({
                  ...selectedAnnouncement,
                  blood_type: { type: e.target.value },
                })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>
              Kapat
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showUpdateModal} onHide={handleUpdateModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Duyuru Güncelle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Başlık"
              value={selectedAnnouncement?.title || ''}
              onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, title: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="İçerik"
              value={selectedAnnouncement?.body || ''}
              onChange={(e) => setSelectedAnnouncement({ ...selectedAnnouncement, body: e.target.value })}
            />
            <Form.Control
              type="text"
              placeholder="Kan Tipi"
              value={selectedAnnouncement?.blood_type.type || ''}
              onChange={(e) =>
                setSelectedAnnouncement({
                  ...selectedAnnouncement,
                  blood_type: { type: e.target.value },
                })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUpdateModalClose}>
              Kapat
            </Button>
            <Button variant="primary" onClick={handleModalSave}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Dashboard>
  );
};

export default Announcement;
