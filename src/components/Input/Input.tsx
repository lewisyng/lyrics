import styled from "styled-components";
import cn from "classnames";

export const StyledInput = styled.input.attrs(props => ({
  placeholder: props.placeholder,
}))`
  border: none;
  outline: 1px solid #666;
  padding: 8px 20px;
  border-radius: 1000px;
  width: 100%;
`;

export const Input = ({
  type,
  id,
  className,
  required,
  placeholder,
}: {
  type?: string;
  id?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}) => {
  return (
    <StyledInput
      id={id}
      className={cn(className)}
      type={type}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
