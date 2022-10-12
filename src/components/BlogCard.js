import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogCard = ({ blog }) => {
  console.log(blog);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={blog.img} />
      <Card.Body>
        <Card.Title>{blog.cardTitle}</Card.Title>
        <Card.Text>{blog.cardText}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
