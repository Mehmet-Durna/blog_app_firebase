import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  const blogsDashboard = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",

      cardTitle: "dfoigdfkjgkjdfhgkjdfkjgdfjkgdfg ",
      cardText: "loremdkjghkdjfhgkjdf dfglkjdfkjlgdfg",
    },
    {
      img: "https://www.thomasmore.be/sites/default/files/TM_metaimage.png",

      cardTitle: "aaaaaaaaaaa ",
      cardText: "lbbbbbbbb",
    },
  ];

  return (
    <div >
      {blogsDashboard.map((blog) => {
        return <BlogCard blog={blog} />;
      })}
    </div>
  );
};

export default Dashboard;
