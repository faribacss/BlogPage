// src/services/posts.js
import axios from "axios";

const API_BASE_URL = "https://strapi.arvanschool.ir/api";

let TOKEN = ""; // Bearer Token

export function setToken(token) {
  TOKEN = token;
}

function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    ...(TOKEN && { Authorization: `Bearer ${TOKEN}` }),
  };
}

// Get All Posts

export async function getPosts() {
  const res = await axios.get(`${API_BASE_URL}/posts`, {
    headers: getAuthHeaders(),
  });
  return res.data.data;
}

// Get a Post By ID

export async function getPost(documentId) {
  const res = await axios.get(`${API_BASE_URL}/posts/${documentId}`, {
    headers: getAuthHeaders(),
  });
  return res.data.data;
}

// Create a Post

export async function createPost(postData) {
  const res = await axios.post(
    `${API_BASE_URL}/posts`,
    { data: postData },
    {
      headers: getAuthHeaders(),
    }
  );
  return res.data.data;
}

// Edite (update) a Post

export async function updatePost(documentId, postData) {
  const res = await axios.put(
    `${API_BASE_URL}/posts/${documentId}`,
    { data: postData },
    {
      headers: getAuthHeaders(),
    }
  );
  return res.data.data;
}

// Delete a Post

export async function deletePost(documentId) {
  await axios.delete(`${API_BASE_URL}/posts/${documentId}`, {
    headers: getAuthHeaders(),
  });
}
