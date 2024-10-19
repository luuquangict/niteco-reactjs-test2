export type InputProps = {
  placeholder: string;
  onEnter: (title: string) => void;
};

export function Input({ placeholder, onEnter }: InputProps) {
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector("input");
    if (inputElement && inputElement.value.trim() !== "") {
      onEnter(inputElement.value); // Gọi onEnter với giá trị input
      inputElement.value = ""; // Xóa input sau khi submit
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder={placeholder}></input>
    </form>
  );
}
