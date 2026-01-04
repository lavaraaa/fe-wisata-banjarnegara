import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { useNotifikasi } from '../../../common/Notifikasi';

const LikeSaveBagikan = ({ setTotalLike, setTotalFavorit }) => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { showNotif } = useNotifikasi();
  const [totalLike, setLocalTotalLike] = useState(0);
  const [totalFavorit, setLocalTotalFavorit] = useState(0);
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const handleLike = async () => {
    if (!token) {
      return showNotif('Login terlebih dahulu untuk menyukai', 'error');
    }

    const endpoint = liked
      ? '/api/user/unlike'
      : '/api/user/like';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_wisata: id }),
      });
      const data = await res.json();

      setLiked(!liked);
      // update jumlah like di komponen induk (jika diberikan)
      if (setTotalLike) {
        setTotalLike((prev) => (liked ? prev - 1 : prev + 1));
      }
      // update tampilan lokal juga
      setLocalTotalLike((prev) => (liked ? prev - 1 : prev + 1));
    } catch (err) {
      console.error(err);
    }
  };

  const handleFavorit = async () => {
    if (!token) {
      return showNotif('Login terlebih dahulu untuk simpan', 'error');
    }

    const endpoint = favorited
      ? '/api/user/unfavorit'
      : '/api/user/favorit';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_wisata: id }),
      });
      const data = await res.json();
    setFavorited(!favorited);

    // update jumlah favorit langsung tanpa reload
    if (setTotalFavorit) {
      setTotalFavorit((prev) => (favorited ? prev - 1 : prev + 1));
    }
    setLocalTotalFavorit((prev) => (favorited ? prev - 1 : prev + 1));
    } catch (err) {
      console.error(err);
    }
  };

  const handleShare = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        showNotif('Link wisata berhasil disalin!');
      })
      .catch(() => {
        showNotif('Gagal menyalin URL', 'error');
      });
  };

  useEffect(() => {
    const fetchStatus = async () => {
      if (!token) return;
      try {
        const res = await fetch(`/api/user/status/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setLiked(data.liked);
        setFavorited(data.favorited);
      } catch (err) {
        console.error('Gagal fetch status:', err);
      }
    };

    const fetchTotalLike = async () => {
      try {
        const res = await fetch(`/api/total-like/${id}`);
        const data = await res.json();
        if (setTotalLike) setTotalLike(data.totalLikes);
        setLocalTotalLike(data.totalLikes);
      } catch (err) {
        console.error('Gagal ambil total like:', err);
      }
    };

        const fetchTotalFavorit = async () => {
      try {
        const res = await fetch(`/api/total-favorit/${id}`);
        const data = await res.json();
        if (setTotalFavorit) setTotalFavorit(data.totalFavorit);
        setLocalTotalFavorit(data.totalFavorit);
      } catch (err) {
        console.error('Gagal ambil total like:', err);
      }
    };

    fetchStatus();
    fetchTotalLike();
    fetchTotalFavorit();
  }, [id, token, setTotalLike, setTotalFavorit]);

  const formatLikeFavoritCount = (number) => {
    if (number >= 1000000) return (number / 1000000).toFixed(1).replace('.0', '') + ' jt';
    if (number >= 1000) return (number / 1000).toFixed(1).replace('.0', '') + ' k';
    return number;
  };

  
  return (
   <div style={{ display: 'flex', gap: '12px', flexShrink: 0, paddingLeft: '8px' }}>
  {/* LIKE */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleLike}
      className="group cursor-pointer flex flex-col items-center justify-center"
    >
      <Icon
        icon={liked ? 'icon-park-solid:like' : 'icon-park-outline:like'}
        width={25}
        className="transition-all group-active:scale-125"
      />
    </div>
     {totalLike > 0 && (
        <p style={{ marginBottom: 0, fontSize: 16, fontWeight: 600 }}>
          {formatLikeFavoritCount(totalLike)}
        </p>
      )}
  </div>

  {/* FAVORIT */}
  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleFavorit}
      className="group cursor-pointer flex flex-col items-center justify-center"
    >
      <Icon
        icon={favorited ? 'majesticons:bookmark' : 'majesticons:bookmark-line'}
        width={25}
        className="transition-all group-active:scale-125"
      />
    </div>
    {totalFavorit > 0 && (
        <p style={{ marginBottom: 0, fontSize: 16, fontWeight: 600 }}>
          {formatLikeFavoritCount(totalFavorit)}
        </p>
      )}
  </div>

  {/* SHARE */}
  <div
    style={{ cursor: 'pointer' }}
    onClick={handleShare}
    className="group flex w-fit cursor-pointer flex-col items-center justify-center font-medium"
  >
    <Icon icon="tabler:share" width={25} className="transition-all group-active:scale-125" />
  </div>
</div>

  );
};

export default LikeSaveBagikan;
