# WebP Image Conversion Guide

To further optimize the website's loading performance, it's recommended to convert all PNG images to WebP format, which provides better compression and smaller file sizes while maintaining quality.

## Benefits of WebP Format:
- Smaller file sizes (25-35% smaller than PNG)
- Better quality at same file size
- Supports both lossy and lossless compression
- Supports transparency and animation

## How to Convert Images to WebP:

### Using Online Tools:
1. Visit https://squoosh.app/ or https://convertio.co/png-webp/
2. Upload your PNG images
3. Select WebP format
4. Adjust quality settings (80-90% is usually a good balance)
5. Download the converted WebP images

### Using Command Line Tools:
1. Install cwebp tool:
   - Windows: Download from https://developers.google.com/speed/webp/download
   - macOS: `brew install webp`
   - Ubuntu/Debian: `sudo apt-get install webp`

2. Convert individual images:
   ```
   cwebp -q 80 image.png -o image.webp
   ```

3. Convert all PNG images in a directory:
   ```
   # Windows
   for %f in (*.png) do cwebp -q 80 "%f" -o "%~nf.webp"
   
   # macOS/Linux
   for file in *.png; do cwebp -q 80 "$file" -o "${file%.png}.webp"; done
   ```

## Images to Convert:
1. images/K2AE-01.png
2. images/K2AE-02.png
3. images/image016.png
4. images/image367.png
5. images/image370.png
6. images/image673.png

## Implementation Notes:
After converting the images to WebP format, update the HTML img tags to use the new WebP files and provide PNG fallbacks using the picture element:

```html
<picture>
  <source srcset="images/K2AE-01.webp" type="image/webp">
  <img src="images/K2AE-01.png" alt="K2AE Engineering Solutions Logo" width="1500" height="499">
</picture>
```

This approach ensures compatibility with browsers that don't support WebP while providing the benefits to those that do.