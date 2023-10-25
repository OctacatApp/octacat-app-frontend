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
      red: '#E54D4D',
      'red-100': '#FFE0E0',
      'text-input': '#363636',
      'success-color': '#E0FFF0',
      'border-success-color': '#4DE5AE',
    },
    backgroundColor: {
      transparent: 'transparent',
      'secondary-color': '#E3F4F4',
      'primary-color': '#F8F6F4',
      'active-color': '#71A8A8',
      'thirdy-color': '#87B5B5',
      red: '#E54D4D',
      'red-100': '#FFE0E0',
      'success-color': '#E0FFF0',
      'border-success-color': '#4DE5AE',
    },
  },
  plugins: [],
};
