import styled, { css } from "styled-components";

export const buttonTypes = ["primary", "secondary", "ghost"] as const;
export const sizes = ["small", "medium", "large"] as const;

type ButtonTypes = (typeof buttonTypes)[number];
type Sizes = (typeof sizes)[number];

interface ButtonProps {
  children: React.ReactNode;
  type: ButtonTypes;
  size: Sizes;
}
const SCxButton = styled.button<{ size: Sizes }>`
  color: var(--color-primary);
  border: none;
  padding: var(--padding) var(--padding);
  border-radius: 8px;
  background-color: var(--color-bg-primary);

  ${({ size }) => {
    return css`
      padding: var(--padding-${size});
      font-size: var(--font-size-${size});
    `;
  }}
`;

export function Button(props: ButtonProps) {
  return <SCxButton size={props.size}>{props.children}</SCxButton>;
}
