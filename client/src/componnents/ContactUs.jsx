import React from 'react';
import { Formik, Form, Field, ErrorMessage,useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
 const navigate=useNavigate()
    return ( 
    <div className="bg-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.message) {
            errors.message = 'Required';
          }
          return errors;
        }}
        onSubmit={async(values, { setSubmitting }) => {
          const submit=await axios.post('https://qrcontrol-server.onrender.com/api/contactUs',values)
          navigate('/')
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto mt-6 p-6 bg-white shadow-lg">
            <div className="mb-4">
              <label className="block font-bold mb-2"   name="name">
                Name
              </label>
              <Field
                className="border p-2 w-full"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                className="text-red-500"
                name="name"
                component="div"
              />
            </div>
            <div className="mb-4">
              <label className="block  font-bold mb-2" name="email">
                Email
              </label>
              <Field
                className="border p-2 w-full"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                className="text-red-500"
                name="email"
                component="div"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2"  name="message">
                Message
              </label>
              <Field
                className="border p-2 w-full"
                id="message"
                rows="4"
                name="message"
                component="textarea"
                placeholder="Enter your message"
              />
              <ErrorMessage
                className="text-red-500"
                name="message"
                component="div"
              />
            </div>

            <div className="mb-4 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;

