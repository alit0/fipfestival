import React, { useState, useEffect, useRef, Suspense } from 'react';
import './LazySection.css';

interface LazySectionProps {
    children: React.ReactNode;
    threshold?: number; // 0 to 1
    rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
    children,
    threshold = 0.1,
    rootMargin = '100px 0px'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            {
                root: null, // viewport
                rootMargin,
                threshold,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [rootMargin, threshold]);

    return (
        <div
            ref={containerRef}
            className={`lazy-section ${isVisible ? 'is-visible' : ''}`}
            style={{ minHeight: '50px' }}
        >
            {isVisible ? (
                <Suspense fallback={<div className="section-loading">...</div>}>
                    {children}
                </Suspense>
            ) : null}
        </div>
    );
};

export default LazySection;
