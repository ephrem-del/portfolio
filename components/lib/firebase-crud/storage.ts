import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

async function uploadImage(collectionName: string, imageFile: any) {
  const filePath = `images/${collectionName}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, imageFile);

  return await getDownloadURL(newImageRef);
}

export default uploadImage;