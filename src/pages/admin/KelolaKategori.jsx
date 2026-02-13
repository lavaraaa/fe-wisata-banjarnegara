import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNotifikasi } from '../../components/common/Notifikasi';

const KelolaKategori = () => {
  const [kategoriList, setKategoriList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaKategori, setNamaKategori] = useState('');
  const [editId, setEditId] = useState(null);
  const [editNama, setEditNama] = useState('');
  const [showTambahForm, setShowTambahForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { showNotif } = useNotifikasi();

  const getToken = () => localStorage.getItem('token');

  const fetchKategori = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/admin/kategori', {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setKategoriList(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Gagal mengambil data kategori:', err);
      showNotif('Gagal mengambil data kategori.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKategori();
  }, []);

  const handleTambah = async (e) => {
    e.preventDefault();
    if (!namaKategori.trim()) {
      showNotif('Nama kategori wajib diisi.', 'error');
      return;
    }
    try {
      setSubmitting(true);
      await axios.post(
        '/api/admin/kategori',
        { nama: namaKategori.trim() },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      showNotif('Kategori berhasil ditambahkan!', 'success');
      setNamaKategori('');
      setShowTambahForm(false);
      fetchKategori();
    } catch (err) {
      const msg = err.response?.data?.message || 'Gagal menambah kategori.';
      showNotif(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleStartEdit = (item) => {
    setEditId(item.id);
    setEditNama(item.nama);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditNama('');
  };

  const handleSaveEdit = async (id) => {
    if (!editNama.trim()) {
      showNotif('Nama kategori wajib diisi.', 'error');
      return;
    }
    try {
      setSubmitting(true);
      await axios.put(
        `/api/admin/kategori/${id}`,
        { nama: editNama.trim() },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      showNotif('Kategori berhasil diubah!', 'success');
      setEditId(null);
      setEditNama('');
      fetchKategori();
    } catch (err) {
      const msg = err.response?.data?.message || 'Gagal mengubah kategori.';
      showNotif(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmDelete = (item) => {
    setDeleteTarget(item);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      setSubmitting(true);
      await axios.delete(`/api/admin/kategori/${deleteTarget.id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      showNotif('Kategori berhasil dihapus!', 'success');
      setShowDeleteModal(false);
      setDeleteTarget(null);
      fetchKategori();
    } catch (err) {
      const msg = err.response?.data?.message || 'Gagal menghapus kategori.';
      showNotif(msg, 'error');
      setShowDeleteModal(false);
    } finally {
      setSubmitting(false);
    }
  };

  const formatTanggal = (dateStr) => {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return d.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div
        className="bg-white p-4 rounded shadow"
        style={{ marginTop: '20px' }}
      >
        <h3 className="text-center mb-3">Kelola Kategori Wisata</h3>

        {/* Tombol Tambah */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn"
            style={{
              backgroundColor: '#015E78',
              color: '#fff',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '15px',
            }}
            onClick={() => {
              setShowTambahForm(!showTambahForm);
              setNamaKategori('');
            }}
          >
            <i className="bi bi-plus-circle me-1"></i>
            {showTambahForm ? 'Batal' : 'Tambah Kategori'}
          </button>
        </div>

        {/* Form Tambah */}
        {showTambahForm && (
          <form
            onSubmit={handleTambah}
            className="d-flex gap-2 mb-3 align-items-center"
          >
            <input
              type="text"
              className="form-control"
              placeholder="Nama kategori baru"
              value={namaKategori}
              onChange={(e) => setNamaKategori(e.target.value)}
              style={{
                borderRadius: '8px',
                border: '1px solid #ddd',
                padding: '8px 12px',
                fontSize: '15px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
              }}
              autoFocus
            />
            <button
              type="submit"
              className="btn"
              disabled={submitting}
              style={{
                backgroundColor: '#015E78',
                color: '#fff',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '15px',
              }}
            >
              {submitting ? 'Menyimpan...' : 'Simpan'}
            </button>
          </form>
        )}

        {/* Tabel */}
        {loading ? (
          <div className="text-center py-4">⏳ Memuat data kategori...</div>
        ) : kategoriList.length === 0 ? (
          <div className="text-center py-4 text-muted">
            <i
              className="bi bi-inbox"
              style={{ fontSize: '40px', display: 'block', marginBottom: '8px' }}
            ></i>
            Belum ada kategori wisata. Silakan tambahkan kategori baru.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead style={{ backgroundColor: '#015E78', color: '#fff' }}>
                <tr>
                  <th style={{ width: '50px', textAlign: 'center' }}>No</th>
                  <th>Nama Kategori</th>
                  <th style={{ width: '180px' }}>Tanggal Dibuat</th>
                  <th style={{ width: '160px', textAlign: 'center' }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {kategoriList.map((item, index) => (
                  <tr key={item.id}>
                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                    <td>
                      {editId === item.id ? (
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          value={editNama}
                          onChange={(e) => setEditNama(e.target.value)}
                          autoFocus
                          style={{
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveEdit(item.id);
                            if (e.key === 'Escape') handleCancelEdit();
                          }}
                        />
                      ) : (
                        item.nama
                      )}
                    </td>
                    <td>{formatTanggal(item.created_at)}</td>
                    <td style={{ textAlign: 'center' }}>
                      {editId === item.id ? (
                        <div className="d-flex gap-1 justify-content-center">
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => handleSaveEdit(item.id)}
                            disabled={submitting}
                            title="Simpan"
                          >
                            <i className="bi bi-check-lg"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={handleCancelEdit}
                            title="Batal"
                          >
                            <i className="bi bi-x-lg"></i>
                          </button>
                        </div>
                      ) : (
                        <div className="d-flex gap-1 justify-content-center">
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => handleStartEdit(item)}
                            title="Edit"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleConfirmDelete(item)}
                            title="Hapus"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Konfirmasi Hapus */}
      {showDeleteModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9999,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: '400px' }}
          >
            <div className="modal-content" style={{ borderRadius: '10px' }}>
              <div
                className="modal-header"
                style={{
                  backgroundColor: '#E4080A',
                  color: '#fff',
                  borderRadius: '10px 10px 0 0',
                }}
              >
                <h5 className="modal-title">Konfirmasi Hapus</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteTarget(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Apakah Anda yakin ingin menghapus kategori{' '}
                  <strong>"{deleteTarget?.nama}"</strong>?
                </p>
                <p className="text-muted" style={{ fontSize: '13px' }}>
                  Kategori yang masih digunakan oleh data wisata tidak dapat
                  dihapus.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteTarget(null);
                  }}
                >
                  Batal
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete}
                  disabled={submitting}
                >
                  {submitting ? 'Menghapus...' : 'Hapus'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaKategori;
