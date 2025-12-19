import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardWisata from '../../components/common/cardComponents/CardWisata';
import { Icon } from '@iconify/react';
import Loading from '../../components/common/Loading';

const daftarKategori = [
  'Dieng',
  'Wisata Alam',
  'Curug/Air Terjun',
  'Wisata Budaya',
  'Wisata Rekreasi',
  'Wisata Kuliner',
  'Wisata Edukasi',
  'Desa Wisata'
];

const sortOptions = [
  'Baru Ditambahkan',
  'Rating Tertinggi',
  'Like Tertinggi',
  'Simpan Favorit Tertinggi'
];

const DaftarWisata = ({ data = [], onActionSuccess }) => {
  const [allWisata, setAllWisata] = useState([]);
  const [filteredWisata, setFilteredWisata] = useState([]);
  const [wisataList, setWisataList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [kategoriTerpilih, setKategoriTerpilih] = useState([]);
  const [draftKategori, setDraftKategori] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draftSort, setDraftSort] = useState('');
  const [sortTerpilih, setSortTerpilih] = useState('');
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const kategoriDariURL = queryParams.get('kategori');
  const searchQuery = queryParams.get('search');
  const sortDariURL = queryParams.get('sort');

  const dropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const skipURLSyncRef = useRef(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setWisataList(data);
      setAllWisata(data);
      setFilteredWisata(data);
    } else if (wisataList.length === 0) {
      fetchDataWisata();
    }
  }, [data]);

  const fetchDataWisata = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/wisata');
      const wisataData = await res.json();
      setWisataList(wisataData);
      setAllWisata(wisataData);
      setFilteredWisata(wisataData);
    } catch (err) {
      console.error('Gagal memuat data wisata:', err);
      setLoading(false);
    }
  };

  // --- sync from URL (only set drafts when URL changes, avoid loop with skipURLSyncRef) ---
  useEffect(() => {
    if (skipURLSyncRef.current) {
      // reset flag and skip
      skipURLSyncRef.current = false;
      return;
    }

    if (searchQuery && searchQuery !== searchTerm) {
      setSearchInput(searchQuery);
      setSearchTerm(searchQuery);
    }

    if (kategoriDariURL) {
      const kategoriArr = kategoriDariURL.includes(',')
        ? kategoriDariURL.split(',').map(k => k.trim())
        : [kategoriDariURL];
      if (JSON.stringify(draftKategori) !== JSON.stringify(kategoriArr)) {
        setDraftKategori(kategoriArr);
        setKategoriTerpilih(kategoriArr); // langsung set final too so UI matches URL
      }
    }

    if (sortDariURL) {
      if (draftSort !== sortDariURL) {
        setDraftSort(sortDariURL);
        setSortTerpilih(sortDariURL); // keep final in sync with url on load
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, kategoriDariURL, sortDariURL]);

  // --- click outside to close dropdowns (handles both) ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckboxChange = (kategori) => {
    if (kategori === 'Semua Wisata') {
      setDraftKategori(draftKategori.includes('Semua Wisata') ? [] : ['Semua Wisata']);
    } else {
      const isChecked = draftKategori.includes(kategori);
      const newKategori = isChecked
        ? draftKategori.filter(k => k !== kategori)
        : [...draftKategori.filter(k => k !== 'Semua Wisata'), kategori];
      setDraftKategori(newKategori);
    }
  };

  // draftSort is temporary selection. Use single-select behavior (like you wanted)
  const handleDraftSortChange = (option) => {
    setDraftSort(draftSort === option ? '' : option);
  };

  // APPLY button: set final values (searchTerm, kategoriTerpilih, sortTerpilih) and update URL
  const handleApplySearchAndFilter = () => {
    // Set final states from drafts
    setSearchTerm(searchInput.trim());
    setKategoriTerpilih(draftKategori);
    setSortTerpilih(draftSort); // <-- crucial: only when TERAPKAN is pressed

    // close dropdowns
    setDropdownOpen(false);
    setSortDropdownOpen(false);

    skipURLSyncRef.current = true;
    const params = new URLSearchParams(location.search);

    if (searchInput.trim()) params.set('search', searchInput.trim());
    else params.delete('search');

    if (draftKategori.length > 0) params.set('kategori', draftKategori.join(','));
    else params.delete('kategori');

    if (draftSort) params.set('sort', draftSort);
    else params.delete('sort');

    navigate(`?${params.toString()}`, { replace: true });
  };

  // useEffect: filter (by final searchTerm & kategoriTerpilih) and THEN sort (by sortTerpilih).
  // IMPORTANT: depends on sortTerpilih (final) so sorting only runs after Apply changed it.
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = allWisata.filter((item) => {
        const cocokSearch = item.judul?.toLowerCase().includes(searchTerm.toLowerCase());
        let itemKategori = [];
        try {
          itemKategori = item.kategori ? JSON.parse(item.kategori) : [];
        } catch {
          itemKategori = [];
        }
        const cocokKategori =
          kategoriTerpilih.length === 0 ||
          kategoriTerpilih.includes('Semua Wisata') ||
          kategoriTerpilih.some(k => itemKategori.includes(k));

        return cocokSearch && cocokKategori;
      });

      // SORT based on final selection (sortTerpilih) — will only change after TERAPKAN
      switch (sortTerpilih) {
        case 'Baru Ditambahkan':
          result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          break;
        case 'Rating Tertinggi':
          result.sort((a, b) => (b.average_rating || 0) - (a.average_rating || 0));
          break;
        case 'Like Tertinggi':
          result.sort((a, b) => (b.total_likes || 0) - (a.total_likes || 0));
          break;
        case 'Simpan Favorit Tertinggi':
          result.sort((a, b) => (b.total_favorit || 0) - (a.total_favorit || 0));
          break;
        default:
          break;
      }

      setFilteredWisata(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [allWisata, searchTerm, kategoriTerpilih, sortTerpilih]);

  // If loading true show Loading
  if (loading) {
    return <Loading />;
  }

  // --- Render ---
  return (
    <main className="mx-auto my-4 px-4" style={{ maxWidth: '1150px' }}>
      <div className="d-flex flex-column flex-sm-row align-items-start gap-2 gap-sm-3 mb-3" style={{ maxWidth: '1100px', margin: '0 auto', }}>
        <input
          type="text"
          className="form-control"
          placeholder="Cari wisata..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleApplySearchAndFilter(); }}
        />

        <div className="d-flex flex-column flex-sm-row gap-2 w-100">
          {/* KATEGORI DROPDOWN */}
          <div ref={dropdownRef} className="position-relative flex-grow-1">
            <input
              type="text"
              readOnly
              className="form-control w-100"
              placeholder="Filter kategori"
              value={draftKategori.length > 0 ? draftKategori.join(', ') : ''}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ cursor: 'pointer' }}
              onFocus={e => e.target.blur()}
            />
            <span className="position-absolute top-50 end-0 translate-middle-y pe-3" style={{ pointerEvents: 'none', color: '#555', fontSize: '12px' }}>
              ▼
            </span>

            {dropdownOpen && (
              <div className="border rounded bg-white shadow-sm p-3 position-absolute w-100" style={{ top: 'calc(100% + 5px)', zIndex: 1000, maxHeight: '220px', overflowY: 'auto' }}>
                {daftarKategori.map((kategori, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`kategori-${idx}`}
                      checked={draftKategori.includes(kategori)}
                      onChange={() => handleCheckboxChange(kategori)}
                    />
                    <label className="form-check-label" htmlFor={`kategori-${idx}`}>
                      {kategori}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SORT DROPDOWN (PERSIS KATEGORI, TAPI SINGLE-SELECT -> DRAFT) */}
          <div ref={sortDropdownRef} className="position-relative flex-grow-1">
            <input
              type="text"
              readOnly
              className="form-control w-100"
              placeholder="Urutkan berdasarkan"
              value={draftSort}
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              style={{ cursor: 'pointer' }}
              onFocus={e => e.target.blur()}
            />
            <span className="position-absolute top-50 end-0 translate-middle-y pe-3" style={{ pointerEvents: 'none', color: '#555', fontSize: '12px' }}>
              ▼
            </span>

            {sortDropdownOpen && (
              <div className="border rounded bg-white shadow-sm p-3 position-absolute w-100" style={{ top: 'calc(100% + 5px)', zIndex: 1000, maxHeight: '220px', overflowY: 'auto' }}>
                {sortOptions.map((option, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`sort-${idx}`}
                      checked={draftSort === option}
                      onChange={() => handleDraftSortChange(option)}
                    />
                    <label className="form-check-label" htmlFor={`sort-${idx}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TOMBOL TERAPKAN — PANGGIL handleApplySearchAndFilter */}
          <button
            type="button"
            className="btn btn-primary mt-2 mt-sm-0"
            style={{ backgroundColor: '#015E78', alignSelf: 'flex-start' }}
            onClick={handleApplySearchAndFilter}
          >
            Terapkan
          </button>
        </div>
      </div>

      {(searchTerm || kategoriTerpilih.length > 0) && (
        <p className="text-center mb-4">
          Menampilkan hasil
          {searchTerm && <> pencarian untuk <b>"{searchTerm}"</b></>}
          {kategoriTerpilih.length > 0 && (
            <>
              {searchTerm ? ' di kategori ' : ' untuk kategori '}
              <b>{kategoriTerpilih.join(', ')}</b>
            </>
          )}
        </p>
      )}

      {filteredWisata.length > 0 ? (
        <div className="row d-flex flex-wrap justify-content-start">
          {filteredWisata.map((item) => (
            <CardWisata
              key={item.id}
              item={item}
              showOptionsMenu={false}
              onActionSuccess={fetchDataWisata}
            />
          ))}
        </div>
      ) : (
        <div className="mb-4 mt-5 d-flex flex-column align-items-center text-muted">
          <Icon icon="hugeicons:album-not-found-01" width={50} />
          <h5 className="mt-2 fw-semibold">Wisata tidak ditemukan</h5>
          <p className="text-sm">Coba gunakan kata kunci atau kategori lain</p>
        </div>
      )}
    </main>
  );
};

export default DaftarWisata;
