import React, { useState, useEffect } from 'react';
import Dashboard from './Dasboard'
import { useTable } from 'react-table';
import axios from 'axios';
import { Modal, Button, Form, FormGroup, FormLabel } from 'react-bootstrap';

const Donor = () => {
  const [data, setData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [donor, setDonor] = useState([]);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [selectedBloodType, setSelectedBloodType] = useState([]);
  const [hastanes, setHastanes] = useState([]);
  const [selectedHastane, setSelectedHastane] = useState([]);

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: '_id' },
      { Header: 'Ad', accessor: 'ad' },
      { Header: 'Soyad', accessor: 'soyad' },
      { Header: 'Yaş', accessor: 'yas' },
      { Header: 'Cinsiyet', accessor: 'cinsiyet' },
      { Header: 'Kan Tipi', accessor: 'blood_type' },
      { Header: 'Kayıtlı Hastane', accessor: 'hastane' },
      {
          Header: 'Action',
          accessor: 'action',
          Cell: ({ row }) => (
            <button
              className="btn btn-success"
            >
              Güncelle
            </button>
          ),
        },
    ],
    []
  );

  useEffect(() => {
    getDonors();
    getHastaneler();
    getBloodTypes();
  }, []);

  const getDonors = async () => {
    try {
      const response = await axios.get('http://localhost:8003/donor');
      const indexedData = response.data.map((donor, index) => ({
        _id: index+1,
        ad: donor.ad,
        soyad: donor.soyad,
        yas: donor.yas,
        cinsiyet: donor.cinsiyet ? 'Male' : 'Female',
        blood_type: donor.blood_type,
        hastane: donor.hastane,
      }));
      setData(indexedData);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const getHastaneler = async ()=>{
    try {
      const response = await axios.get('http://localhost:8002/hastane/');
      setHastanes(response.data);
    } catch (error) {
      console.error('Hastane bilgileri alınamadı.', error.message);
    }
  }

  const getBloodTypes = async ()=>{
    try {
      const response = await axios.get('http://localhost:8004/announcement/blood/');
      setBloodTypes(response.data);
    } catch (error) {
      console.error('Kan bilgileri alınamadı.', error.message);
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleAddModalOpen = () => {
    setDonor({
      ad:'',
      soyad:'',
      yas:'',
      cinsiyet:'',
    });
    setShowAddModal(true);
  };

  const handleAdd = async(e)=>{
    e.preventDefault();
    try{
      const newDonor = {
        ad: donor.ad,
        soyad: donor.soyad,
        yas: donor.yas,
        cinsiyet: donor.cinsiyet == "0" ? 0:1,
        blood_type:selectedBloodType,
        hastane:selectedHastane,
      };
  
      const response = await axios.post('http://localhost:8003/donor', newDonor, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log('Donör başarıyla eklendi:', response.data);
        setShowAddModal(false);
        // Sayfayı yeniden yükle
       // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dashboard>
      <div className="container my-5 p-4 rounded border shadow">
        <h3 className="display-5 fw-bold text-primary text-center mb-4">Donor Listesi</h3>
        <Button className='mb-2' variant="success" onClick={handleAddModalOpen}>
          Yeni Donör Ekle
        </Button>
        <table {...getTableProps()} className="table table-bordered table-striped">
          <thead className="table-primary">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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

        <Modal show={showAddModal}  onHide={() => setShowAddModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Donor Ekle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAdd}>
              <Form.Group controlId="formTitle">
                <Form.Label>Başlık</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ad"
                  value={donor?.ad || ''}
                  onChange={(e) => setDonor({ ...donor, ad: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBody">
                <Form.Label>İçerik</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Soyad"
                  value={donor?.soyad || ''}
                  onChange={(e) => setDonor({ ...donor, soyad: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBody">
                <Form.Label>İçerik</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Yas"
                  value={donor?.yas || ''}
                  onChange={(e) => setDonor({ ...donor, yas: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBody">
                <Form.Label>İçerik</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Cinsiyet"
                  value={donor?.cinsiyet || ''}
                  onChange={(e) => setDonor({ ...donor, cinsiyet: e.target.value })}
                >
                  <option value="" disabled>Cinsiyet Seciniz</option>
                  <option value="1">Erkek</option>
                  <option value="0">Kadın</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBloodType">
                <Form.Label>Kan Tipi</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Kan Tipi"
                  value={selectedBloodType}
                  onChange={(e) => setSelectedBloodType(e.target.value)}
                >
                  <option value="" disabled>
                    Kan Tipi Seçiniz
                  </option>
                  {bloodTypes.map((bloodType) => (
                    <option  value={bloodType._id}>
                      {bloodType.type}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formHastane">
                <Form.Label>Hastane</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Hastane"
                  value={selectedHastane}
                  onChange={(e) => setSelectedHastane(e.target.value)}
                >
                  <option value="" disabled>
                    Hastane Seçiniz
                  </option>
                  {hastanes.map((hastane) => (
                    <option  value={hastane._id}>
                      {hastane.ad}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                  Kapat
                </Button>
                <Button type="submit" variant="primary">
                  Kaydet
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </Dashboard>
  );
};

export default Donor;
