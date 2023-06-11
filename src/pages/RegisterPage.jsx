import Container from 'components/Container/Container';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

const RegisterPage = () => {
  const error = useSelector(selectError);
  return (
    <main>
      <section>
        <Container>
          <RegisterForm />
          {error && (
            <p style={{ color: 'red', marginTop: '5px', textAlign: 'center' }}>
              Oops, something went wrong... Please, try again
            </p>
          )}
        </Container>
      </section>
    </main>
  );
};

export default RegisterPage;
