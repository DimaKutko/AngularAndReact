import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const Profile = () => {
  const [_profile, setProfile] = useState(null);
  return (
    <div>
      <h1>Photo upload</h1>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          file: null,
        }}
        onSubmit={(values) => {
          const reader = new FileReader();
          reader.onload = () => {
            const image = reader.result;
            setProfile({
              name: values.name,
              surname: values.surname,
              image: reader.result,
            });
          };

          reader.readAsDataURL(values.file);
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required("Name is required.")
            .min(3, "Min length is 3.")
            .max(20, "Max length is 20."),
          surname: yup
            .string()
            .required("Surname is required.")
            .min(3, "Min length is 3.")
            .max(20, "Max length is 20."),
          file: yup.mixed().required("Photo is required."),
        })}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <Field name="surname" type="text" placeholder="Surname" />
              {errors.surname && touched.surname ? (
                <div>{errors.surname}</div>
              ) : null}
            </div>
            <div>
              <input
                name="file"
                type="file"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              {errors.file && touched.file ? <div>{errors.file}</div> : null}
            </div>
            <div>
              <button>Upload</button>
            </div>
          </Form>
        )}
      </Formik>
      {_profile && (
        <div>
          <p>
            <b>Nickname:</b> {_profile.name}
          </p>
          <p>
            <b>surname:</b> {_profile.surname}
          </p>
          <img src={_profile.image} alt={_profile.name} />
        </div>
      )}
    </div>
  );
};

export default Profile;
