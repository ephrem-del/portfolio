import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

async function uploadImage(
  collectionName: string,
  imageFile: Blob | Uint8Array | ArrayBuffer
) {
  const uniqueName =
    imageFile instanceof File
      ? `${Date.now()}-${imageFile.name}`
      : `${Date.now()}-image`;
  const filePath = `images/${collectionName}/${uniqueName}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, imageFile);

  return await getDownloadURL(newImageRef);
}

export default uploadImage;
