import multer from 'multer';
import sharp from 'sharp';
import path from 'path';

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(handleError(400, 'Please upload only images', res), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = {
  uploadImages: upload.fields([{ name: 'images', maxCount: 4 }]),

  resizeImages: async (req, res, next) => {
    try {
      if (!req.files.images) return next();

      req.body.images = [];
      await Promise.all(
        req.files.images.map(async (file, i) => {
          const filename = `product-id-${Date.now()}-${i + 1}.jpeg`;
          await sharp(file.buffer)
            .resize(1392, 1076)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(
              path.join(__dirname, `../../images/productImages/${filename}`)
            );
          req.body.images.push(filename);
        })
      );
      next();
    } catch (err) {
      console.log(err);
    }
  },
};
