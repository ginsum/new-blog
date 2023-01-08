import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { getISOformat } from '../util';
import { BlogData } from '../types/blog';
import { store } from './index';

const blogContent = collection(store, '2022_blog');

export const getBlogList = async () => {
  try {
    const querySnapshot = await getDocs(blogContent);
    let data: Record<string, any>[] = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        date: doc.data().date,
      });
    });
    return data.reverse();
  } catch (e) {
    console.error(e);
  }
};

export const getBlogPost = async (postId: string) => {
  try {
    const postData = await getDoc(doc(store, '2022_blog', postId));

    return postData.data();
  } catch (e) {
    console.error(e);
  }
};

export const postBlogPost = async (id: string, data: BlogData) => {
  const docId = Date.now().toString();

  data.date = getISOformat(+docId);
  data.userId = id;

  await setDoc(doc(store, '2022_blog', docId), data);
};
