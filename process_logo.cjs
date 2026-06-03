const sharp = require('sharp');

async function processLogo() {
  try {
    const inputPath = 'logo_beauty.png';
    const outputPath = 'src/assets/logo_gold.png';

    // Get image metadata to know dimensions
    const metadata = await sharp(inputPath).metadata();

    // Create a solid gold image of the same size
    const goldImage = await sharp({
      create: {
        width: metadata.width,
        height: metadata.height,
        channels: 3,
        background: { r: 212, g: 175, b: 55 }
      }
    }).png().toBuffer();

    // Create alpha channel from the original image (inverted lightness)
    // sharp can extract a single channel. If it's grayscale, we can negate it.
    const alphaChannel = await sharp(inputPath)
      .greyscale()
      .negate() // black becomes white (255=opaque), white becomes black (0=transparent)
      .toBuffer();

    // Combine them: solid gold color + alpha channel
    await sharp(goldImage)
      .joinChannel(alphaChannel)
      .toFile(outputPath);

    console.log('Logo processed successfully and saved to ' + outputPath);
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();
