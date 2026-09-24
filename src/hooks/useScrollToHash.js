import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 換頁時回到頂端；網址帶 #contact 之類的錨點時捲到該區塊
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
