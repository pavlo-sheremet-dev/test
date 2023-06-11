import Container from 'components/Container/Container';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
const LoginPage = () => {
  const error = useSelector(selectError);
  return (
    <main>
      <section>
        <Container>
          <LoginForm />
          {error && (
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                textAlign: 'center',
              }}
            >
              Oops, something went wrong... Please, try again
            </p>
          )}
        </Container>
      </section>
    </main>
  );
};

export default LoginPage;
