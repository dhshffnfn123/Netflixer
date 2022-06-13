import { keyframes } from 'styled-components';

export const visibleLogo = keyframes`
    0% { opacity: 0; }
    50% { margin-top: 6rem; opacity: 1; }
    100% { margin-top: 0; opacity: 1; }
`;

export const visibleAuthFromBlock = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1;}
`;

export const visibleError = keyframes`
    0% { opacity: 1;}
    70% { opacity: 1;}
    100% { opacity: 0;}
`;
