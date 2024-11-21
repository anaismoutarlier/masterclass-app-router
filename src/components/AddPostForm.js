"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
  {
    name: "title",
  },
  {
    name: "content",
  },
  {
    name: "createdBy",
  },
];
export function AddPostForm() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token 1234ABCD2349`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.result) {
      router.refresh();
      setFormData({});
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <input key={field.name} {...field} onChange={handleChange} />
      ))}
      <button type="submit">Send</button>
    </form>
  );
}
