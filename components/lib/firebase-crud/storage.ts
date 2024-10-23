import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

async function uploadImage() {
  const filePath = `images/`;
  const newImageRef = ref(storage, filePath);
  // await uploadBytesResumable(newImageRef,)
  return await getDownloadURL(newImageRef);
}
