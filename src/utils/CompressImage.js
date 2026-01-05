const CompressImage = (
  file,
  {
    minTargetKB = 170,
    maxTargetKB = 200,
    maxWidth = 1024,
    mimeType = 'image/jpeg',
  } = {}
) => {
  return new Promise((resolve, reject) => {
    const sizeKB = file.size / 1024;

    // ✅ sudah ideal → BIARIN
    if (sizeKB >= minTargetKB && sizeKB <= maxTargetKB) {
      resolve(file);
      return;
    }

    // ✅ kecil → BIARIN
    if (sizeKB < maxTargetKB) {
      resolve(file);
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = async () => {
        let { width, height } = img;

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
        let bestBlob = null;

        while (quality >= 0.25) {
          const blob = await new Promise((res) =>
            canvas.toBlob(res, mimeType, quality)
          );

          const kb = blob.size / 1024;

          // 🎯 ideal
          if (kb >= minTargetKB && kb <= maxTargetKB) {
            bestBlob = blob;
            break;
          }

          // masih kegedean → turunin kualitas
          if (kb > maxTargetKB) {
            bestBlob = blob;
            quality -= 0.05;
            continue;
          }

          // sudah kekecilan → STOP, pakai terakhir yang paling dekat
          break;
        }

        if (!bestBlob) {
          reject('Compress gagal');
          return;
        }

        resolve(
          new File([bestBlob], file.name, {
            type: mimeType,
            lastModified: Date.now(),
          })
        );
      };

      img.onerror = reject;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default CompressImage;
