import { Formik, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { TextField, Button } from '@mui/material';

const ContactSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  number: Yup.string().phone('UA').required('Phone number is required!'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={({ ...values }, actions) => {
          const existingContact = contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          );
          if (existingContact) {
            toast.error(
              `You already have ${existingContact.name} in your contacts`
            );
            actions.resetForm();
          } else {
            dispatch(addContact({ ...values }));
            actions.resetForm();
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ field, form: { touched, errors } }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  fullWidth
                  margin="normal"
                  autoComplete="off"
                  size="small"
                />
              )}
            </Field>

            <Field name="number">
              {({ field, form: { touched, errors } }) => (
                <TextField
                  {...field}
                  label="Number"
                  variant="outlined"
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                  fullWidth
                  margin="normal"
                  autoComplete="off"
                  size="small"
                  sx={{ mb: 2 }}
                />
              )}
            </Field>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mb: 4 }}
              fullWidth
            >
              Add contact
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
