import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../common/Notifikasi';

function ModalTambahWisata({ show, handleClose, onActionSuccess }) {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [alamat, setAlamat] = useState('');
  const [waktuBuka, setWaktuBuka] = useState('');
  const [waktuTutup, setWaktuTutup] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [fasilitasInput, setFasilitasInput] = useState('');
  const [fasilitas, setFasilitas] = useState([]);
  const [hargaTiket, setHargaTiket] = useState('');
  const [linkGmaps, setLinkGmaps] = useState('');

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [kodewilayah, setKodewilayah] = useState('');

  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [galeriFiles, setGaleriFiles] = useState([]);
  const { showNotif } = useNotifikasi();
  const daftarKategori = [
    'Dieng',
    'Wisata Alam',
    'Curug/Air Terjun',
    'Wisata Budaya',
    'Wisata Rekreasi',
    'Wisata Kuliner',
    'Wisata Edukasi',
    'Waduk',
    'Desa Wisata',
    'Wisata Religi',
  ];

  const handleKategoriChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setKategoriTerpilih([...kategoriTerpilih, value]);
    } else {
      setKategoriTerpilih(kategoriTerpilih.filter((item) => item !== value));
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategoriTerpilih.length === 0) {
      alert('Pilih minimal satu kategori.');
      return;
    }

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('gambar', gambar);
    formData.append('alamat', alamat);
    formData.append('jam_buka', waktuBuka);
    formData.append('jam_tutup', waktuTutup);
    formData.append('no_telepon', nomorTelepon);
    formData.append('fasilitas', JSON.stringify(fasilitas));
    formData.append('harga_tiket', hargaTiket);
    formData.append('link_gmaps', linkGmaps);

     formData.append('longitude', longitude);
     formData.append('latitude', latitude);
     formData.append('kode_wilayah', kodewilayah);

    formData.append('kategori', JSON.stringify(kategoriTerpilih));
  galeriFiles.forEach((file) => {
    formData.append('galeri', file);
  });
    try {
      await axios.post('/api/wisata', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     });
  showNotif('Wisata berhasil ditambahkan!', 'success');
  if (onActionSuccess) onActionSuccess();
  handleClose();
} catch (error) {
  console.error('Error adding wisata: ', error);
  showNotif('Gagal menambahkan wisata.', 'error');
}
  };

  return (
    <div
      className={`modal ${show ? 'd-block' : 'd-none'}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        className="modal-dialog"
        ref={modalRef}
        style={{
          maxWidth: '550px',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-out',
          transform: show ? 'scale(1)' : 'scale(0.8)',
        }}
      >
        <div className="modal-content">
          <div className="modal-header" style={{ borderBottom: '1px solid #ddd', backgroundColor: '#015E78', padding:10 }}>
            <h5 className="modal-title" style={{ fontWeight: '600', fontSize: '18px', color: '#fff', flexGrow: 1, textAlign: 'center' }}>
              Tambah Destinasi Wisata
            </h5>
            <button
              type="button"
              onClick={handleClose}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer',
                fontWeight:'800'
              }}
            >
              &#10005;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-2">
                <label htmlFor="judul" className="form-label">Nama Destinasi Wisata</label>
                <input
                  type="text"
                  className="form-control"
                  id="judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '6px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan Nama Destinasi Wisata"
                />
              </div>

              {/* Checkbox Kategori Wisata */}
              <div className="mb-2">
                <label className="form-label">Kategori (minimal 1)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {daftarKategori.map((kategori, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        id={`kategori-${index}`}
                        value={kategori}
                        checked={kategoriTerpilih.includes(kategori)}
                        onChange={handleKategoriChange}
                        style={{ marginRight: '5px' }}
                      />
                      <label htmlFor={`kategori-${index}`}>{kategori}</label>
                    </div>
                  ))}
                </div>
              </div>


              <div className="mb-2">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  className="form-control"
                  id="deskripsi"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required
                  rows="3"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 8px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan deskripsi wisata"
                ></textarea>
              </div>

              <div className="mb-2">
                <label htmlFor="gambar" className="form-label">
                  Gambar Wisata
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="gambar"
                  onChange={(e) => setGambar(e.target.files[0])}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
{/* Input Galeri */}
<div className="mb-2">
  <label htmlFor="galeri" className="form-label">Galeri (Maksimal 10 Gambar)</label>
  <input
    type="file"
    id="galeri"
    name="galeri"
    className="form-control"
    multiple
    accept="image/*"
    onChange={(e) => {
      const selected = Array.from(e.target.files);
      setGaleriFiles((prev) => [...prev, ...selected]);
      e.target.value = '';
    }}
    style={{
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '5px 10px',
    fontSize: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    }}
  />
</div>

{/* List file galeri yang dipilih */}
{galeriFiles.length > 0 && (
  <ul className="list-group mb-3">
    {galeriFiles.map((file, index) => (
      <li
        key={index}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {file.name}
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() =>
            setGaleriFiles((prev) => prev.filter((_, i) => i !== index))
          }
        >
          ❌
        </button>
      </li>
    ))}
  </ul>
)}

            {/* Alamat wisata lengkap */}
            <div className="mb-2">
                <label htmlFor="alamat" className="form-label">Alamat wisata lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="alamat"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  placeholder="Masukkan alamat wisata lengkap"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="waktu_buka" className="form-label">
                  Waktu Buka
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="waktu_buka"
                  value={waktuBuka}
                  onChange={(e) => setWaktuBuka(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="waktu_tutup" className="form-label">
                  Waktu Tutup
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="waktu_tutup"
                  value={waktuTutup}
                  onChange={(e) => setWaktuTutup(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="nomor_telepon" className="form-label">
                  Nomor Telepon Pengelola
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomor_telepon"
                  value={nomorTelepon}
                  onChange={(e) => setNomorTelepon(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

   <div className="mb-1">
      <label htmlFor="fasilitas" className="form-label">Fasilitas</label>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          className="form-control"
          id="fasilitas"
          value={fasilitasInput}
          onChange={(e) => setFasilitasInput(e.target.value)}
          placeholder="Masukkan fasilitas yang tersedia"
          style={{
            borderRadius: '8px',
            border: '1px solid #ddd',
            padding: '5px 10px',
            fontSize: '16px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            flexGrow: 1,
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && fasilitasInput.trim()) {
              e.preventDefault();
              if (!fasilitas.includes(fasilitasInput.trim())) {
                setFasilitas([...fasilitas, fasilitasInput.trim()]);
              }
              setFasilitasInput('');
            }
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (fasilitasInput.trim() && !fasilitas.includes(fasilitasInput.trim())) {
              setFasilitas([...fasilitas, fasilitasInput.trim()]);
              setFasilitasInput('');
            }
          }}
          style={{
            backgroundColor: '#015E78',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 10px',
            fontSize: '14px',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
            alignSelf: 'center',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#01455B')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#015E78')}
        >
          Tambah
        </button>
      </div>

      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {fasilitas.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#e0f7fa',
              padding: '6px 10px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '8px' }}>{item}</span>
            <button
              type="button"
              onClick={() =>
                setFasilitas(fasilitas.filter((_, i) => i !== index))
              }
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#007b8a',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '1',
              }}
              aria-label={`Hapus fasilitas ${item}`}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>

              <div className="mb-2">
                <label htmlFor="harga_tiket" className="form-label">
                  Harga Tiket Masuk
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="harga_tiket"
                  value={hargaTiket}
                  onChange={(e) => setHargaTiket(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="link_gmaps" className="form-label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link_gmaps"
                  value={linkGmaps}
                  onChange={(e) => setLinkGmaps(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>


              {/* coba */}
                 <div className="mb-2">
                <label htmlFor="longitude" className="form-label">
                 Longitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
                 <div className="mb-2">
                <label htmlFor="latitude" className="form-label">
                  Latitude
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />

              </div>
                 <div className="mb-2">
                <label htmlFor="kode_wilayah" className="form-label">
                  Kode Wilayah
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="kode_wilayah"
                  value={kodewilayah}
                  onChange={(e) => setKodewilayah(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '5px 10px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn"
                onClick={handleClose}
                style={{
                  backgroundColor: '#E4080A',
                  border: '1px solid #ddd',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  marginRight: '10px',
                }}
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: '#015E78',
                  color: '#fff',
                  padding: '8px 12px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#01455B'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#015E78'}
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalTambahWisata;