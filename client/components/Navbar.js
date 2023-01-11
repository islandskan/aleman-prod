import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    let isMenuOpen = isExpanded ? 'open' : '';

    const handleClick = () => {
        setIsExpanded((prevState) => !prevState);
    };
    // logic to close navbar when you click outside

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
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/news'>
                            <a>News</a>
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
