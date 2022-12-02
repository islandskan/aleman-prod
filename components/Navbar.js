import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAccordion, setShowAccordion] = useState(false);

    let isMenuOpen = isExpanded ? 'open' : '';

    const handleClick = () => {
        setIsExpanded((prevState) => !prevState);
    };
    // logic to close navbar when you click outside

    const handleOpen = () => {
        setShowAccordion((prevState) => !prevState);
    };

    return (
        <nav>
            <div className='logo'>
                <Link href='/'>
                    <a>
                        <h1>Madeleine Aleman</h1>
                    </a>
                </Link>
            </div>
            <BurgerMenu handleClick={handleClick} isExpanded={isExpanded} />
            <div className={`menu ${isMenuOpen}`}>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li onClick={handleOpen}>
                        <a className='projects'>Works</a>
                        {showAccordion && (
                            <div className='accordion-panel'>
                                <Link href='/projects/hilma'>
                                    <a>The Hilma Suite</a>
                                </Link>
                                <Link href='/projects/axel'>
                                    <a>The Axel Suite</a>
                                </Link>
                                <Link href='/projects/emanuel'>
                                    <a>The Emanuel Suite</a>
                                </Link>
                                <Link href='/projects/axis-mundi'>
                                    <a>Axis Mundi</a>
                                </Link>
                                <Link href='/projects/journey'>
                                    <a>Journey</a>
                                </Link>
                                <Link href='/projects/correspondances'>
                                    <a>Correspondances</a>
                                </Link>
                                <Link href='/projects'>
                                    <a className='see-all-projects'>
                                        See all works
                                    </a>
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/calender'>
                            <a>Calender</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
