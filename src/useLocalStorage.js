import { useEffect, useState } from "react";

const PREFIX = "custom-prefix-";

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    return getStoredValue(prefixedKey, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

function getStoredValue(prefixedKey, initialValue) {
  const jsonValue = localStorage.getItem(prefixedKey);
  if (jsonValue != null) return JSON.parse(jsonValue);
  if (initialValue instanceof Function) {
    return initialValue();
  } else {
    return initialValue;
  }
}
