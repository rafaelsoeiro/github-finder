
interface errorProps{
  errorMessage:string;
}

const Error = ({errorMessage}:errorProps) => {
  return <div>{errorMessage}</div>;
};

export default Error;
