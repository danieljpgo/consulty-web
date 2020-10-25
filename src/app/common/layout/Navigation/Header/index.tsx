import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Content, Brand } from './styles';
import { fadeInOut } from '../../../utils/animations';

const Header: React.FC = () => (
  <Container
    variants={fadeInOut}
    initial="hidden"
    animate="show"
    exit="out"
  >
    <Content>
      <motion.div
        whileHover={{
          x: 20,
        }}
        whileTap={{
          x: 0,
        }}
      >
        <Link to="/">
          <svg
            width="49"
            height="32"
            viewBox="0 0 49 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M2 16H48"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.00098 21.001L0.999976 16L6.00098 10.999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="32"
                  height="49"
                  fill="white"
                  transform="translate(49) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </motion.div>

      <Brand>
        Consulty
      </Brand>
    </Content>
  </Container>
);

export default Header;
