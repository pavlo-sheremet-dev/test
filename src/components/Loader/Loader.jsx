import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#c25e64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderWrapper>
  );
};
