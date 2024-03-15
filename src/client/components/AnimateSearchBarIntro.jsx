import React, { useState, useEffect } from 'react';
import '../styles/AnimatedSearchBarIntro.scss';

const phrases = ["Events near me", "Movies near me", "Fun activities"];

const AnimatedSearchBarIntro = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isFirstCycle, setIsFirstCycle] = useState(true);
    const [showSearch, setShowSearch] = useState(false);
    const [pauseBeforeNext, setPauseBeforeNext] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowSearch(true), 2000);
    }, []);

    useEffect(() => {
        let timeout;
        // This is a pause before typing the first phrase:
        if (isFirstCycle && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsFirstCycle(false);
                setIsTyping(true);
            }, 4000); 
        // Type the phrase:
        } else if (isTyping) {
            if (charIndex < phrases[phraseIndex].length) {
                timeout = setTimeout(() => setCharIndex(charIndex + 1), 120);
            } else {
                // Once typing is done, introduce a pause before deleting:
                timeout = setTimeout(() => {
                    setPauseBeforeNext(true);
                    setTimeout(() => {
                        setIsTyping(false);
                        setPauseBeforeNext(false);
                    }, 2000); 
                }, 1500);
            }
        // Erase the phrase:
        } else if (!pauseBeforeNext) {
            if (charIndex > 0) {
                timeout = setTimeout(() => setCharIndex(charIndex - 1), 120);
            } else {
                // This is a pause before typing the next phrase:
                timeout = setTimeout(() => {
                    setPhraseIndex((phraseIndex + 1) % phrases.length);
                    setIsTyping(true);
                }, 1500); 
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isTyping, phraseIndex, isFirstCycle, pauseBeforeNext]);

    // Apply 'show-search' class based on showSearch state:
    const searchClass = showSearch ? 'search show-search' : 'search';

    return (
        <div className="container">
            <form action="https://www.google.com/search" className={searchClass} id="search-bar">
                <input
                    type="search"
                    className="search__input"
                    placeholder="Type something..."
                    value={phrases[phraseIndex].substring(0, charIndex)}
                    readOnly
                />
                <div className="search__button" id="search-button">
                    <i className="ri-search-2-line search__icon"></i>
                    <i className="ri-close-line search__close"></i>
                </div>
            </form>
        </div>
    );
};

export default AnimatedSearchBarIntro;

