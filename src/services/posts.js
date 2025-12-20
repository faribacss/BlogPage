// library
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_BASE_URL = "https://strapi.arvanschool.ir/api/";

function getAuthHeaders() {
  const header = {
    "Content-Type": "application/json",
  };
  return header;
}

// Get All Posts
export default function GetAllPost() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get(`${API_BASE_URL}posts`, {
          headers: getAuthHeaders(),
        })
        .then((res) => res.data.data),
  });
  return { data, isLoading, error, refetch };
}

// Get Post By ID
export function GetPostById(documentId) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", documentId],
    queryFn: () =>
      axios
        .get(`${API_BASE_URL}posts/${documentId}`, {
          headers: getAuthHeaders(),
        })
        .then((res) => res.data.data),
  });
  return { data, isLoading, error };
}
