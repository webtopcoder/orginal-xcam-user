import Error from 'next/error';

interface P {
    title?: string;
}
function ErrorForbidden({ title }: P) {
  return <Error statusCode={404} title={title} />;
}
ErrorForbidden.defaultProps = {
  title: 'Page not found'
};
ErrorForbidden.layout = 'default';
export default ErrorForbidden;
