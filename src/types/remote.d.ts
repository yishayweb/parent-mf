declare module "oneRemote/Button" {
  interface ButtonProps {
    text: string;
    onClick: VoidFunction;
  }

  const Button: React.FC<ButtonProps>;
  export default Button;
}
