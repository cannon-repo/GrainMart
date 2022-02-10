import { useState, useLayoutEffect } from "react";

export const useDynamicBannerSize = (refVal) => {
    const [size,setSize] = useState(0);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(refVal.current.offsetWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line
    }, []);
    return size;
}