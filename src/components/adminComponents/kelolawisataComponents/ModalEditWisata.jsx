import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../common/Notifikasi';

function ModalEditWisata({ show, handleClose, dataWisata, onEditSuccess }) {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [gambarLama, setGambarLama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [waktuBuka, setWaktuBuka] = useState('');
  const [waktuTutup, setWaktuTutup] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [fasilitasInput, setFasilitasInput] = useState('');
  const [fasilitas, setFasilitas] = useState([]);
  const [hargaTiket, setHargaTiket] = useState('');
  const [linkGmaps, setLinkGmaps] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [kodewilayah, setKodewilayah] = useState('');

  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [galeriFiles, setGaleriFiles] = useState([]);
  const [galeriLama, setGaleriLama] = useState([]);
  // const [event, setEvent] = useState('');

  const { showNotif } = useNotifikasi();
  const modalRef = useRef(null);

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

  useEffect(() => {
    if (show && dataWisata) {
      setJudul(dataWisata.judul || '');
      setDeskripsi(dataWisata.deskripsi || '');
      setAlamat(dataWisata.alamat || '');
      setWaktuBuka(dataWisata.jam_buka || '');
      setWaktuTutup(dataWisata.jam_tutup || '');
      setNomorTelepon(dataWisata.no_telepon || '');
      setHargaTiket(dataWisata.harga_tiket || '');
      setLinkGmaps(dataWisata.link_gmaps || '');

      setLatitude(dataWisata.latitude || '');
      setLongitude(dataWisata.longitude || '');
      setKodewilayah(dataWisata.kode_wilayah || '');

      setGambarLama(dataWisata.gambar || '');
      // setEvent(dataWisata.event || '');

      try {
        setFasilitas(dataWisata.fasilitas ? JSON.parse(dataWisata.fasilitas) : []);
      } catch {
        setFasilitas([]);
      }
      try {
        setKategoriTerpilih(dataWisata.kategori ? JSON.parse(dataWisata.kategori) : []);
      } catch {
        setKategoriTerpilih([]);
      }
      try {
        setGaleriLama(dataWisata.galeri ? JSON.parse(dataWisata.galeri) : []);
      } catch {
        setGaleriLama([]);
      }
      setGambar(null);
      setGaleriFiles([]);
      setFasilitasInput('');
    }
  }, [show, dataWisata]);

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

  const handleKategoriChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setKategoriTerpilih([...kategoriTerpilih, value]);
    } else {
      setKategoriTerpilih(kategoriTerpilih.filter((k) => k !== value));
    }
  };

  const handleGaleriChange = (e) => {
    const selected = Array.from(e.target.files);
    setGaleriFiles((prev) => [...prev, ...selected]);
    e.target.value = '';
  };

  const handleHapusGaleriLama = (file) => {
    setGaleriLama(galeriLama.filter((f) => f !== file));
  };

  const handleHapusGaleriBaru = (index) => {
    setGaleriFiles(galeriFiles.filter((_, i) => i !== index));
  };

  const tambahFasilitas = () => {
    if (fasilitasInput.trim() && !fasilitas.includes(fasilitasInput.trim())) {
      setFasilitas([...fasilitas, fasilitasInput.trim()]);
      setFasilitasInput('');
    }
  };

  const hapusFasilitas = (index) => {
    setFasilitas(fasilitas.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategoriTerpilih.length === 0) {
      showNotif('Pilih minimal satu kategori', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
   if (gambar) {
    formData.append('gambar', gambar);}
    // formData.append('event', event);
    formData.append('alamat', alamat);
    formData.append('jam_buka', waktuBuka);
    formData.append('jam_tutup', waktuTutup);
    formData.append('no_telepon', nomorTelepon);
    formData.append('fasilitas', JSON.stringify(fasilitas));
    formData.append('harga_tiket', hargaTiket);
    formData.append('link_gmaps', linkGmaps);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('kode_wilayah', kodewilayah);

    formData.append('kategori', JSON.stringify(kategoriTerpilih));
    formData.append('galeri_lama', JSON.stringify(galeriLama));
    galeriFiles.forEach((file) => formData.append('galeri', file));

    try {
      await axios.put(`/api/wisata/${dataWisata.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      showNotif('Wisata berhasil diperbarui', 'success');
      handleClose();
      if (onEditSuccess) onEditSuccess();
    } catch (error) {
      showNotif('Wisata gagal diperbarui', 'error');
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 9999 }}
    >
      <div
        className="modal-dialog"
        ref={modalRef}
        style={{
          maxWidth: '600px',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-out',
          transform: show ? 'scale(1)' : 'scale(0.8)',
        }}
      >
        <div className="modal-content">
          <div
            className="modal-header"
            style={{ borderBottom: '1px solid #ddd', backgroundColor: '#015E78' }}
          >
            <h5
              className="modal-title"
              style={{
                fontWeight: '600',
                fontSize: '20px',
                color: '#fff',
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              Edit Wisata
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
              }}
            >
              &#10005;
            </button>
          </div>
          <form onSubmit={handleSubmit}>

             {/* Informasi/Event */}
              {/* <div className="mb-3">
                <label htmlFor="event" className="form-label">
                  Informasi / Event (jika ada)
                </label>
                <input
                  type="text"
                  id="event"
                  className="form-control"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div> */}
            <div className="modal-body">
              {/* Judul */}
              <div className="mb-3">
                <label htmlFor="judul" className="form-label">
                  Judul Wisata
                </label>
                <input
                  type="text"
                  id="judul"
                  className="form-control"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
              
            {/* Alamat */}
              <div className="mb-3">
                <label htmlFor="alamat" className="form-label">
                  Alamat wisata lengkap
                </label>
                <input
                  type="text"
                  id="alamat"
                  className="form-control"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Kategori */}
              <div className="mb-3">
                <label className="form-label">Kategori (minimal 1)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {daftarKategori.map((kategori, idx) => (
                    <div
                      key={idx}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <input
                        type="checkbox"
                        id={`kategori-${idx}`}
                        value={kategori}
                        checked={kategoriTerpilih.includes(kategori)}
                        onChange={handleKategoriChange}
                        style={{ marginRight: '5px' }}
                      />
                      <label htmlFor={`kategori-${idx}`}>{kategori}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deskripsi */}
              <div className="mb-3">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  className="form-control"
                  rows={4}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Gambar Utama */}
              <div className="mb-3">
                <label htmlFor="gambar" className="form-label">
                  Gambar Wisata
                </label>
                {gambarLama && (
                  <div
                    style={{
                      marginBottom: '10px',
                      fontStyle: 'italic',
                      color: '#555',
                    }}
                  >
                    Gambar lama: {gambarLama}
                  </div>
                )}
                <input
                  type="file"
                  id="gambar"
                  className="form-control"
                  onChange={(e) => setGambar(e.target.files[0])}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Galeri */}
              <div className="mb-3">
                <label htmlFor="galeri" className="form-label">
                  Galeri (bisa pilih banyak gambar)
                </label>
                <input
                  type="file"
                  id="galeri"
                  name="galeri"
                  className="form-control"
                  multiple
                  accept="image/*"
                  onChange={handleGaleriChange}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* List file galeri lama */}
              {galeriLama.length > 0 && (
                <ul className="list-group mb-3">
                  {galeriLama.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {file}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleHapusGaleriLama(file)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* List file galeri baru */}
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
                        onClick={() => handleHapusGaleriBaru(index)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Waktu Buka */}
              <div className="mb-3">
                <label htmlFor="waktu_buka" className="form-label">
                  Waktu Buka
                </label>
                <input
                  type="time"
                  id="waktu_buka"
                  className="form-control"
                  value={waktuBuka}
                  onChange={(e) => setWaktuBuka(e.target.value)}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Waktu Tutup */}
              <div className="mb-3">
                <label htmlFor="waktu_tutup" className="form-label">
                  Waktu Tutup
                </label>
                <input
                  type="time"
                  id="waktu_tutup"
                  className="form-control"
                  value={waktuTutup}
                  onChange={(e) => setWaktuTutup(e.target.value)}
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Nomor Telepon */}
              <div className="mb-3">
                <label htmlFor="nomor_telepon" className="form-label">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  id="nomor_telepon"
                  className="form-control"
                  value={nomorTelepon}
                  onChange={(e) => setNomorTelepon(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Fasilitas */}
              <div className="mb-3">
                <label htmlFor="fasilitas" className="form-label">
                  Fasilitas
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    id="fasilitas"
                    className="form-control"
                    value={fasilitasInput}
                    onChange={(e) => setFasilitasInput(e.target.value)}
                    placeholder="Masukkan fasilitas yang tersedia"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      padding: '12px',
                      fontSize: '16px',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                      flexGrow: 1,
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && fasilitasInput.trim()) {
                        e.preventDefault();
                        tambahFasilitas();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={tambahFasilitas}
                    style={{
                      backgroundColor: '#015E78',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 14px',
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
                  {fasilitas.map((item, idx) => (
                    <div
                      key={idx}
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
                        onClick={() => hapusFasilitas(idx)}
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

              {/* Harga Tiket */}
              <div className="mb-3">
                <label htmlFor="harga_tiket" className="form-label">
                  Harga Tiket
                </label>
                <input
                  type="number"
                  id="harga_tiket"
                  className="form-control"
                  value={hargaTiket}
                  onChange={(e) => setHargaTiket(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              {/* Link Google Maps */}
              <div className="mb-3">
                <label htmlFor="link_gmaps" className="form-label">
                  Link Google Maps
                </label>
                <input
                  type="text"
                  id="link_gmaps"
                  className="form-control"
                  value={linkGmaps}
                  onChange={(e) => setLinkGmaps(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

               {/* Latitude */}
              <div className="mb-3">
                <label htmlFor="latitude" className="form-label">
                  Latitude
                </label>
                <input
                  type="text"
                  id="latitude"
                  className="form-control"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

               {/* Longitude */}
              <div className="mb-3">
                <label htmlFor="longitude" className="form-label">
                  Longitude
                </label>
                <input
                  type="text"
                  id="longitude"
                  className="form-control"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

               {/* Link Google Maps */}
              <div className="mb-3">
                <label htmlFor="kode_wilayah" className="form-label">
                  Kode Wilayah
                </label>
                <input
                  type="text"
                  id="kode_wilayah"
                  className="form-control"
                  value={kodewilayah}
                  onChange={(e) => setKodewilayah(e.target.value)}
                  required
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px',
                    fontSize: '16px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

            </div>
            <div
              className="modal-footer"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
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
                onMouseOver={(e) => (e.target.style.backgroundColor = '#01455B')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#015E78')}
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalEditWisata;
