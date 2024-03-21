import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <Form.Control ref={inputRef} type="text" placeholder="example" />
    </div>
  );
}
