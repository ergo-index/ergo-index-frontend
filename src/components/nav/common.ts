import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

/**
 * Custom hook that evaluates to true if the device currently being used is a mobile device.
 */
function useIsMobile() {
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        // Debounce: don't refresh the window width more than once every 250ms
        let timeoutId: NodeJS.Timeout | null = null;
        const resizeListener = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(getWidth()), 200);
        };
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    // We use the mobile navbar at 767px
    return width <= 767;
}

export default useIsMobile;
