import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IogUkmdhSAxj-UFAinDJEZmrlWn1jYd4HoYhtqjGzNUruXLDB-MB6rdkbRTtdgSmXv9g8O8hYos1WphBnEkGhYU1aXoiZ6b_0BIuMxrsZzxGb2GVmJJo7GS7NxhnZnYx",
  },
});
