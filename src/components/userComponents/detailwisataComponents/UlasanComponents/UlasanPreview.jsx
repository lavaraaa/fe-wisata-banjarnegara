import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Icon } from '@iconify/react';
import UlasanModal from './UlasanModal';
import profilePlaceholder from '../../../../assets/profil.png';
import { formatWaktu } from '../../../common/FormatWaktu';


const UlasanPreview = () => {
  const { id } = useParams();
  const [ulasan, setUlasan] = useState([]);
  const [showUlasanModal, setShowUlasanModal] = useState(false);

  const fetchUlasan = async () => {
    try {
      const res = await axios.get(`/api/rating/${id}`);
      setUlasan(res.data);
    } catch (err) {
      console.error('Gagal fetch ulasan:', err);
    }
  };

  useEffect(() => {
    fetchUlasan();
  }, [id]);

  return (
    <div className="mt-4" style={{ paddingTop: '10px' }}>
      <div style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
        <div style={{ position: 'relative', marginBottom: 8, borderBottom: '1px solid #ccc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h5 style={{ fontSize:'clamp(17px, 2.5vw, 20px',marginLeft: 10, marginTop: 10, marginBottom: 0 }}>Ulasan Terbaru</h5>
            <button
              onClick={() => setShowUlasanModal(true)}
              style={{
                marginTop: 10,
                background: 'none',
                border: 'none',
                color: '#dc2626',
                cursor: 'pointer',
                fontSize: 'clamp(14px, 2.5vw, 16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Lihat Semua
              <span style={{ fontSize: 16 }}>
                <Icon icon={'mdi:chevron-right'} width={22} />
              </span>
            </button>
          </div>

          <div style={{ fontSize: 20, display: 'flex', alignItems: 'center', marginLeft: 10 }}>
            {ulasan.length > 0 ? (
              <>
                <div>
                  {[1, 2, 3, 4, 5].map(i => (
                    <span
                      key={i}
                      style={{
                        color:
                          ulasan.reduce((sum, u) => sum + u.rating, 0) / ulasan.length >= i
                            ? 'orange'
                            : '#ccc',
                      }}
                    >
                      ★
                    </span>
                  ))}
                  <span style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
                    ({ulasan.length} ulasan)
                  </span>
                </div>
              </>
            ) : (
              <span style={{ fontSize: 'clamp(14px, 2.5vw, 16px', color: '#999' }}>Belum ada ulasan</span>
            )}
          </div>
        </div>

        <div>
          {ulasan.length === 0 ? (
            <div
              style={{
                borderBottom: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#dc2626',
                  fontSize: 'clamp(14px, 2.5vw, 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 999,
                  marginBottom: 4,
                }}
                onClick={() => setShowUlasanModal(true)}
              >
                Tambah Ulasan
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            ulasan.slice(0, 1).map(u => (
              <div
                key={u.id}
                style={{ borderBottom: '1px solid #ccc', marginLeft: 10 }}
                onClick={() => setShowUlasanModal(true)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src={u.photoURL?.trim() ? u.photoURL : profilePlaceholder}
                    width={40}
                    height={40}
                    style={{ borderRadius: '50%' }}
                    alt="Foto Profil"
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#015E78' }}>@{u.username}</b>
                    <p style={{ fontSize: '12px', color: '#888', marginBottom: 0 }}>
                      {formatWaktu(u.created_at)}
                    </p>
                    <div>
                      {[1, 2, 3, 4, 5].map(i => (
                        <span key={i} style={{ color: u.rating >= i ? 'orange' : '#ccc' }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ wordWrap:'break-word', whiteSpace:'pre-wrap', overflowWrap:'break-word',marginLeft: 50 }}>{u.review}</p>
                <div style={{ marginLeft: 50 }}>
                  {JSON.parse(u.images || '[]').map(f => (
                    <img
                      key={f}
                      src={`http://localhost:3000/uploads/ulasan/${f}`}
                      width={80}
                      height={80}
                      style={{
                        marginRight: 6,
                        marginBottom: '8px',
                        borderRadius: '5px',
                      }}
                      alt=""
                    />
                  ))}
                </div>
                <div
              style={{
                borderTop: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#dc2626',
                  fontSize: 'clamp(14px, 2.5vw, 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 999,
                  marginBottom: 4,
                }}
                onClick={() => setShowUlasanModal(true)}
              >
                Tambah Ulasan
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
              </div>
              
            ))
          )}
        </div>
      </div>

      {showUlasanModal && (
        <UlasanModal
          onClose={() => setShowUlasanModal(false)}
          onUpdate={fetchUlasan}
        />
      )}
    </div>
  );
};

export default UlasanPreview;
