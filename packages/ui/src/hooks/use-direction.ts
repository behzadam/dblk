import { useEffect, useState } from "react";

type Direction = "rtl" | "ltr";
const DEFAULT_DIRECTION: Direction = "rtl";

/**
 * A React hook that retrieves the current text direction (either "rtl" or "ltr") of the document and updates it when the direction changes.
 *
 * @returns The current text direction of the document.
 */
export const useDirection = () => {
  const [direction, setDirection] = useState<Direction>("ltr");

  useEffect(() => {
    const dir =
      (document.documentElement.dir as Direction) ||
      (document.dir as Direction) ||
      DEFAULT_DIRECTION;

    setDirection(dir);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "dir") {
          const newDir = document.documentElement.dir as Direction;
          setDirection(newDir);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  return direction;
};
