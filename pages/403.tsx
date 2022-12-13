import Error from 'next/error';

interface P {
  title?: string;
}
function ErrorForbidden({ title }: P) {
  return <Error statusCode={403} title={title} />;
}
ErrorForbidden.defaultProps = {
  title: 'Forbidden Access'
};
ErrorForbidden.layout = 'default';
export default ErrorForbidden;
