export type InputProps = {
  placeholder: string;
};

export function Input({ placeholder }: InputProps) {
  return <input placeholder={placeholder}></input>;
}
