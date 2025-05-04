import { useEffect, useState } from "react";

interface ScrollSpyNavProps {
    sections: { id: string; label: string }[];
    className?: string;
}

const ScrollSpyNav = ({ sections, className = "" }: ScrollSpyNavProps) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // offset para navbar fija
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveId(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // init
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <nav className={`sticky top-4 p-4 border-r border-gray-300 text-sm h-full ${className}`}>
            <ul className="space-y-3">
                {sections.map(({ id, label }) => (
                        <li className="m-2" key={id}>
                            <a
                                href={`#${id}`}
                                className={`block transition-colors hover:text-blue-600 ${activeId === id ? "font-bold text-blue-600" : "text-gray-700"
                                    }`}
                            >
                                {label}
                            </a>
                        <hr className="m-0  p-0" />
                        </li>
                ))}
            </ul>
        </nav>
    );
};

export default ScrollSpyNav;
