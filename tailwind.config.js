/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#F8F6F4',
      'secondary-color': '#E3F4F4',
      'active-color': '#71A8A8',
      'thirdy-color': '#87B5B5',
      'sub-text': '#4B4B4B',
      'head-text': '#454545',
      'border-color': '#AEACAB',
      'placeholder-color': '#606060',
      'text-color': '#F3F3F3',
    },
    backgroundColor: {
      transparent: 'transparent',
      'secondary-color': '#E3F4F4',
      'primary-color': '#F8F6F4',
      'active-color': '#71A8A8',
      'thirdy-color': '#87B5B5',
    },
  },
  plugins: [],
};
