import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { getISOformat } from "../util";
import { BlogData } from "../types/blog";
import { store } from "./index";

const BLOG_COLLECTION = "2022_blog";

const blogContent = collection(store, BLOG_COLLECTION);

export const getBlogList = async () => {
  try {
    const querySnapshot = await getDocs(blogContent);
    let data: Record<string, any>[] = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        category: doc.data().category,
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
    const postData = await getDoc(doc(store, BLOG_COLLECTION, postId));

    return postData.data();
  } catch (e) {
    console.error(e);
  }
};

export const postBlogPost = async (id: string, data: BlogData) => {
  const docId = Date.now().toString();

  data.date = getISOformat(+docId);
  data.userId = id;

  await setDoc(doc(store, BLOG_COLLECTION, docId), data);
};

export const updateBlogPost = async (docId: string, data: BlogData) => {
  await updateDoc(doc(store, BLOG_COLLECTION, docId), data);
};
