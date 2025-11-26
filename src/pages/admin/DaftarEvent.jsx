import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../components/common/Notifikasi';

const DaftarEvent = () => {
  const [wisata, setWisata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [selectedWisata, setSelectedWisata] = useState(null);
  const [eventInput, setEventInput] = useState('');
  const { showNotif } = useNotifikasi();
  const token = localStorage.getItem('token');
  const modalRef = useRef(null);

  useEffect(() => {
    fetchWisata();
  }, []);

  const fetchWisata = async () => {
    try {
      const res = await axios.get('/api/wisata', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWisata(res.data);
    } catch (err) {
      console.error(err);
      showNotif('Gagal memuat data wisata', 'error');
    }
  };

  const openModal = (item) => {
    setSelectedWisata(item);
    setEventInput(item?.event || '');
    setModalShow(true);
  };

  const openConfirm = (item) => {
    setSelectedWisata(item);
    setConfirmShow(true);
  };

  const handleSimpan = async () => {
    if (!selectedWisata) return;

    try {
      await axios.patch(
        `/api/wisata/${selectedWisata.id}/event`,
        { event: eventInput },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      showNotif('Event berhasil disimpan', 'success');
      setModalShow(false);

      setWisata((prev) =>
        prev.map((item) =>
          item.id === selectedWisata.id
            ? { ...item, event: eventInput }
            : item
        )
      );
    } catch (err) {
      console.error(err);
      showNotif('Gagal menyimpan event', 'error');
    }
  };

  const handleHapusEvent = async () => {
    if (!selectedWisata) return;

    try {
      await axios.patch(
        `/api/wisata/${selectedWisata.id}/event`,
        { event: '' },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setWisata((prev) =>
        prev.map((w) =>
          w.id === selectedWisata.id ? { ...w, event: '' } : w
        )
      );

      showNotif('Event berhasil dihapus', 'success');
      setConfirmShow(false);
    } catch (err) {
      console.error(err);
      showNotif('Gagal menghapus event', 'error');
    }
  };

 const filtered = wisata
  .filter((w) =>
    w.judul?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (a.event && !b.event) return -1;
    if (!a.event && b.event) return 1;
    return 0;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>📅 Daftar Pengumuman & Acara</h2>

      <input
        type="text"
        placeholder="🔍 Cari nama destinasi"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: 20,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
        }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
           <th style={{ ...th, width: 50 }}>No</th>

<th style={{ ...th, textAlign: 'left', paddingLeft: 50 }}>
  Nama Destinasi
</th>

<th style={{ ...th, textAlign: 'center' }}>
  Event
</th>

<th style={{ ...th, textAlign: 'center' }}>
  Aksi
</th>

          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <tr key={item.id}>
               <td style={td}>{index + 1}.</td>

<td style={{ ...td, textAlign: 'left', paddingLeft: 8}}>
  {item.judul}
</td>


               <td style={{ ...td, textAlign: 'center' }}>
  {item.event || '-'}
</td>

                <td style={{ ...td, textAlign: 'center' }}>
                  <button
                    onClick={() => openModal(item)}
                    style={buttonStyle('#015E78')}
                  >
                    {item.event ? 'Edit' : 'Tambah'}
                  </button>

                  {item.event && (
                    <button
                      onClick={() => openConfirm(item)}
                      style={{ ...buttonStyle('#E4080A'), marginLeft: 5 }}
                    >
                      Hapus
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: 10 }}>
                Tidak ada destinasi ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* MODAL INPUT EVENT */}
      {modalShow && (
        <div
          style={overlay}
          onClick={() => setModalShow(false)}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            style={modalBox}
          >
            <h4 style={{ textAlign: 'center', marginBottom: 15 }}>
              {selectedWisata?.event ? 'Edit Event' : 'Tambah Event'}
            </h4>

            <input
              type="text"
              placeholder="Masukkan nama event"
              value={eventInput}
              maxLength={50}
              onChange={(e) => setEventInput(e.target.value)}
              style={inputStyle}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <button onClick={() => setModalShow(false)} style={buttonStyle('#E4080A')}>
                Batal
              </button>
              <button onClick={handleSimpan} style={buttonStyle('#015E78')}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI HAPUS */}
      {confirmShow && (
        <div
          style={overlay}
          onClick={() => setConfirmShow(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={modalBox}
          >
            <h4 style={{ textAlign: 'center', marginBottom: 15 }}>
              Hapus Event?
            </h4>

            <p style={{ textAlign: 'center', marginBottom: 20 }}>
              Event pada destinasi <b>{selectedWisata?.judul}</b> akan dihapus.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
              <button onClick={() => setConfirmShow(false)} style={buttonStyle('#015E78')}>
                Batal
              </button>
              <button onClick={handleHapusEvent} style={buttonStyle('#E4080A')}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const th = {
  padding: '12px',
  backgroundColor: '#015E78',
  color: '#fff',
  textAlign: 'center',
};

const td = {
  padding: '12px',
  borderBottom: '1px solid #ccc',
  textAlign: 'center',
};

const buttonStyle = (bg) => ({
  backgroundColor: bg,
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: 6,
  cursor: 'pointer',
});

const overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalBox = {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 12,
  width: 400,
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
};

const inputStyle = {
  width: '100%',
  padding: 10,
  borderRadius: 8,
  border: '1px solid #ccc',
  marginBottom: 15,
};

export default DaftarEvent;
