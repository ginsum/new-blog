import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { store } from './index';

const blogContent = collection(store, "2022_blog")
// const washingtonRef = doc(store, "cities", "DC");

export const getBlogPost = async () => {
    const querySnapshot = await getDocs(blogContent);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
}

// const updateBlogPost = async () => {
//     const response = await updateDoc(washingtonRef, {
//         capital: true
//       });
// }
