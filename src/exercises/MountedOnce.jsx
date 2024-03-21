import { useEffect, useRef } from "react";

export default function MountedOnce() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Se está creando por primera vez.");
      isMounted.current = true;
    }
  }, []);

  return <div>test</div>;
}
