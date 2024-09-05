import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EventForm = ({ onSubmit }) => {
  const initialValues = { name: '', date: '', location: '', description: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Event name is required'),
    date: Yup.date().required('Date is required').nullable(),
    location: Yup.string().required('Location is required'),
    description: Yup.string().required('Description is required'),
  });

  return (
    <div className='ms-6'>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form className="space-y-4">
        <div>
          <label>Event Name</label>
          <Field name="name" className="border p-2 w-full" />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Date</label>
          <Field name="date" type="date" className="border p-2 w-full" />
          <ErrorMessage name="date" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Location</label>
          <Field name="location" className="border p-2 w-full" />
          <ErrorMessage name="location" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Description</label>
          <Field component="textarea" name="description" className="border p-2 w-full" />
          <ErrorMessage name="description" component="div" className="text-red-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Create Event</button>
      </Form>
    </Formik>
    </div>
  );
};

export default EventForm;
