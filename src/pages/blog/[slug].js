import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutSix } from "../../layouts";
import { Sidebar, BlogSinglePostDefault } from "../../components/Blog";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import testimonialFourData from "../../data/testimonials/testimonial-four.json";

const BlogBasic = ({}) => {
    // console.log(blog)
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Post Left Sidebar">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Blog Sidebar</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              <BlogSinglePostDefault />
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutSix>
  );
};

export default BlogBasic;


export async function getStaticPaths() {
    // get the paths we want to pre render based on blogs
    console.log(testimonialFourData)
    const paths = testimonialFourData.map((blog) => ({
      params: { slug: blog.id }
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    // get blog data based on slug
    const blog = testimonialFourData.filter((single) => single.id === params.slug)[0];
  
    return { props: { blog } };
  }
