import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useState } from "react";
import { object as YupObject, string } from "yup";
import Pagination from "../../React-router/components/Pagination/Pagination";
import "./BlogForm.scss";
import moment from "moment";

const initialValues = {
  title: "",
  body: "",
  poster: "",
};
const validationSchema = YupObject({
  title: string()
    .max(18, "Too long")
    .min(3, "Too short")
    .required("This field is invalid"),
  body: string().min(5).max(500),
  poster: string().required("This field is invalid"),
});

export default function BlogForm() {
  const [page, setPage] = useState(1);
  const perPage = 1;

  const x = page * perPage;
  const changePage = (n) => setPage(() => n);

  const [posts, setPosts] = useState([]);

  const handleSubmit = (values, { resetForm, setFieldValue}) => {

    const post = {
      id: nanoid(),
      time: moment().format("dddd, h:mm:ss "),
      ...values,
    };
    setPosts([...posts, post]);

    resetForm();
    setFieldValue("poster",'')
  };
  const handleDel = (id) => {
    // page>1?index= index+ (page*perPage)-perPage:null
    console.log(id,'id');
    const postsAfterDel = posts.filter((post) => post.id !== id);
    setPosts(postsAfterDel);
  };
  // console.log("posts", posts);

  return (
    <div className="All">
      <div className="App">
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => {
            // console.log(formik);
            return (
              <Form>
                <label
                  // htmlFor="title"
                  className={
                    formik.errors.title && formik.touched.title ? "invalid" : ""
                  }
                >
                  Title
                  <Field
                    type="text"
                    name="title"
                    // id="title"
                  />
                </label>
                <ErrorMessage name="title" component="p" className="error" />
                <label
                  // htmlFor="body"
                  className={
                    formik.errors.body && formik.touched.body ? "invalid" : ""
                  }
                >
                  Body
                  <Field
                    as="textarea"
                    name="body"
                    // id="body"
                  />
                </label>
                <ErrorMessage name="body" component="p" className="error" />
                <label
                  // htmlFor="poster"
                  className={
                    formik.errors.poster && formik.touched.poster
                      ? "invalid"
                      : ""
                  }
                >
                  Poster
                  <input
                    type="file"
                    accept="image/*"
                    name="poster"
                    //  id='poster'
                    onChange={(e) => {
                      let reader = new FileReader();
                      reader.onload = () => {
                        if (reader.readyState === 2) {
                          formik.setFieldValue("poster", reader.result);
                        }
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }}
                  />
                </label>
                <input type="submit" value="add post" />
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="Posts">
        {posts.slice(x - perPage, x).map((post) => {
          return (
            <div key={post.id} className="Posts__Post">
              <img src={post.poster} width="200" />
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span>This post is created on {post.time}</span>
              <span className="del" onClick={() => handleDel(post.id)}>
                X
              </span>
            </div>
          );
        })}
      </div>
      <Pagination
        total={posts.length}
        perPage={perPage}
        changePage={changePage}
      />
    </div>
  );
}
