import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

async function uploadImage(
  collectionName: string,
  imageFile: Blob | Uint8Array | ArrayBuffer
) {
  const filePath = `images/${collectionName}/${imageFile}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, imageFile);

  return await getDownloadURL(newImageRef);
}

export default uploadImage;