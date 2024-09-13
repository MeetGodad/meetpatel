// tailwind.config.js
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];

export const theme = {
  extend: {
    animation: {
      'gradient': 'gradient 15s ease infinite',
      'fadeIn': 'fadeIn 2s ease-in-out',
    },
    keyframes: {
      gradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    backgroundImage: {
      'gradient-text': 'linear-gradient(-45deg, #007cf0, #00dfd8, #ff0080, #ffcd1e)',
    },
    textColor: {
      'gradient-text': 'transparent', // Text color should be transparent to show the gradient
    },
    backgroundClip: {
      'text': 'text', // Apply background-clip for text
    },
  },
};

export const plugins = [];
