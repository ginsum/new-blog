import { doc, getDoc } from "firebase/firestore";
import { store } from "./index";

export const getInfo = async () => {
  try {
    const introductionData = await getDoc(
      doc(store, "2022_info", "introduction")
    );
    const contactData = await getDoc(doc(store, "2022_info", "contact"));
    const experienceData = await getDoc(doc(store, "2022_info", "experience"));

    return {
      introduction: introductionData.data(),
      contact: contactData.data(),
      experience: experienceData.data(),
    };
  } catch (e) {
    console.error(e);
  }
};
