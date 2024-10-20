import { doc, getDoc } from "firebase/firestore";
import { store } from "./index";

export const getInfoContents = async () => {
  try {
    const infoContentsData = await getDoc(doc(store, "2022_info", "contents"));

    return infoContentsData.data();
  } catch (e) {
    console.error(e);
  }
};
