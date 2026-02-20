import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Reglamento.css';

interface ReglamentoItem {
    id?: string;
    title?: string;
    text: string;
}

interface ReglamentoSection {
    id: string;
    title: string;
    text?: string;
    items?: ReglamentoItem[];
}

const Reglamento: React.FC = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<string>('A');
    const observer = useRef<IntersectionObserver | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Force re-cast because t() normally returns string when not using robust types check, but in i18next we can retrieve objects and arrays
    const sections: ReglamentoSection[] = t('reglamento.sections', { returnObjects: true }) as ReglamentoSection[];

    useEffect(() => {
        // Force scroll to top on mount so Section A is always active initially if reloading page midway down
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Setup IntersectionObserver to highlight active section in nav
        observer.current = new IntersectionObserver((entries) => {
            // We want to activate the section that is most visibly crossing the top-ish area of the screen
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                // Pick the first one visible
                const id = visibleEntries[0].target.id.replace('section-', '');
                setActiveSection(id);
            }
        }, { rootMargin: '-150px 0px -60% 0px' }); // Trigger a bit below header

        const sectionElements = document.querySelectorAll('.reglamento-section');
        sectionElements.forEach((el) => observer.current?.observe(el));

        return () => observer.current?.disconnect();
    }, [sections]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(`section-${id}`);
        if (element) {
            // Adjust offset dynamically based on mobile vs desktop sticky top
            const isMobile = window.innerWidth <= 768;
            const yOffset = isMobile ? -80 : -140;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!navRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - navRef.current.offsetLeft);
        setScrollLeft(navRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !navRef.current) return;
        e.preventDefault();
        const x = e.pageX - navRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        navRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="reglamento-page container">

            <div
                className="reglamento-nav-container"
                ref={navRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <nav className="reglamento-nav">
                    {Array.isArray(sections) && sections.map((section) => (
                        <a
                            href={`#section-${section.id}`}
                            key={`nav-${section.id}`}
                            className={`reglamento-nav-item ${activeSection === section.id ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, section.id)}
                        >
                            Sección {section.id}
                        </a>
                    ))}
                </nav>
            </div>

            <h1 className="reglamento-title">
                {t('reglamento.title').split('\n').map((line: string, i: number) => (
                    <React.Fragment key={i}>
                        {line}
                        {i !== t('reglamento.title').split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h1>

            <p className="reglamento-desc">
                {t('reglamento.description').split('\n').map((line: string, i: number) => (
                    <React.Fragment key={i}>
                        {line}
                        {i !== t('reglamento.description').split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>

            <div className="reglamento-content">
                <div className="reglamento-sections">
                    {Array.isArray(sections) && sections.map((section) => (
                        <div className="reglamento-section" key={section.id} id={`section-${section.id}`}>
                            <h2 className="reglamento-section-header">
                                <span className="section-id">{section.id}</span>
                                <span className="section-divider">|</span>
                                <span className="section-title">{section.title}</span>
                            </h2>

                            {section.text && (
                                <p className="reglamento-section-text">
                                    {section.text!.split('\n').map((textLine: string, index: number) => (
                                        <React.Fragment key={index}>
                                            {textLine}
                                            {index !== section.text!.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            )}

                            {section.items && section.items.length > 0 && (
                                <div className="reglamento-subitems">
                                    {section.items.map((item, idx) => (
                                        <div className="reglamento-subitem" key={item.id || idx}>
                                            {(item.id || item.title) && (
                                                <h3 className="reglamento-subitem-header">
                                                    {item.id && <span className="subitem-id">{item.id}</span>}
                                                    {item.id && item.title && <span className="subitem-divider">|</span>}
                                                    {item.title && <span className="subitem-title">{item.title}</span>}
                                                </h3>
                                            )}
                                            <p className="reglamento-subitem-text">
                                                {item.text.split('\n').map((textLine: string, index: number) => (
                                                    <React.Fragment key={index}>
                                                        {textLine}
                                                        {index !== item.text.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reglamento;
