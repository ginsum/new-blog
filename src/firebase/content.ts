import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { store } from './index';

const blogContent = collection(store, '2022_blog');
// const washingtonRef = doc(store, "cities", "DC");

export const getBlogPost = async () => {
  try {
    const querySnapshot = await getDocs(blogContent);
    let data: Record<string, any>[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};

// const updateBlogPost = async () => {
//     const response = await updateDoc(washingtonRef, {
//         capital: true
//       });
// }
