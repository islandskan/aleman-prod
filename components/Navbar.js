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
                    <li>
                        <Link href='/projects'>
                            <a>Works</a>
                        </Link>
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
