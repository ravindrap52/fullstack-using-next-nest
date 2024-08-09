type SubHeading = {
  text: string | number;
};

export const SubHeading = ({ text }: SubHeading) => {
  return <h4 data-testid="subHeading">{text}</h4>;
};
