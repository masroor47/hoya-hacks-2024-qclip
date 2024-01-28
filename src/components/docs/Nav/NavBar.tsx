import React from 'react';
import styles from './Nav.module.css';
import * as data from './Links.json';
import { Link } from 'react-router-dom';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <Link to='/'>
                    <img src="/clippy.webp" alt="Logo" height="50px"/>
                </Link>
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Nav;
