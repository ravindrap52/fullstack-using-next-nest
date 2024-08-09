type Heading = {
  text: string | number;
};

export const Heading = ({ text }: Heading) => {
  return (
    <h6>
      <b>{text}</b>
    </h6>
  );
};
