const CompressImage = (
  file,
  {
    minSizeKB = 170,
    maxSizeKB = 200,
    maxWidth = 1024,
    mimeType = 'image/jpeg',
  } = {}
) => {
  return new Promise((resolve, reject) => {
    // ✅ kalau sudah kecil, tidak usah diapa-apain
    if (file.size / 1024 <= maxSizeKB) {
      resolve(file);
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = async () => {
        let { width, height } = img;

        // resize kalau terlalu besar
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        let quality = 0.9;
        let blob = null;
        let bestBlob = null;

        while (quality >= 0.3) {
          blob = await new Promise((res) =>
            canvas.toBlob(res, mimeType, quality)
          );

          const sizeKB = blob.size / 1024;

          // 🎯 masuk range ideal
          if (sizeKB >= minSizeKB && sizeKB <= maxSizeKB) {
            bestBlob = blob;
            break;
          }

          // masih kegedean → turunin quality
          if (sizeKB > maxSizeKB) {
            quality -= 0.05;
          } 
          // sudah kekecilan → pakai terakhir yang paling mendekati
          else {
            bestBlob = blob;
            break;
          }
        }

        if (!bestBlob) {
          reject('Gagal compress gambar');
          return;
        }

        const compressedFile = new File([bestBlob], file.name, {
          type: mimeType,
          lastModified: Date.now(),
        });

        resolve(compressedFile);
      };

      img.onerror = reject;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default CompressImage;
