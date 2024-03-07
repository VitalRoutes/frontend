import ExifReader from 'exifreader';

export async function getGpsFromImg(file: File) {
  const exif = await ExifReader.load(file);

  const lat = Number(exif.GPSLatitude?.description);
  const lng = Number(exif.GPSLongitude?.description);

  return { lat, lng };
}
