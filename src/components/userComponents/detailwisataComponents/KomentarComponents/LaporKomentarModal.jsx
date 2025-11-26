import React from 'react';

const LaporKomentarModal = ({
  onClose,
  onSubmit,
  alasanLapor,
  setAlasanLapor,
  alasanLainnya,
  setAlasanLainnya
}) => {
  const alasanList = ['Spam', 'SARA', 'Tidak Relevan', 'Menyakiti Pihak Lain', 'Lainnya'];

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1300 }}
      onClick={onClose}
    >
      <div
        className="card shadow p-4"
        style={{ maxWidth: '400px', width: '100%', zIndex: 1300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="mb-3 text-center">Laporkan Komentar</h5>
        <div className="d-flex flex-column gap-2">
          {alasanList.map((alasan) => (
            <label key={alasan} className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                value={alasan}
                checked={alasanLapor.includes(alasan)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  if (checked) setAlasanLapor(prev => [...prev, alasan]);
                  else setAlasanLapor(prev => prev.filter(a => a !== alasan));
                }}
              />
              {alasan}
            </label>
          ))}

          {alasanLapor.includes('Lainnya') && (
            <textarea
              className="form-control mt-2"
              placeholder="Tulis alasan lainnya"
              value={alasanLainnya}
              onChange={(e) => setAlasanLainnya(e.target.value)}
            />
          )}

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-secondary w-50 me-2" onClick={onClose}>
              Batal
            </button>
            <button className="btn btn-danger w-50 ms-2" onClick={onSubmit}>
              Laporkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporKomentarModal;
