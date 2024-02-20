/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-1': '#D7FF00',
        'green-2': '#EAFF78',
        alert: '#E60000',
        'gray-11': '#FFFFFF',
        'gray-10': '#F9FAFC',
        'gray-9': '#F4F6FB',
        'gray-8': '#E2E5EB',
        'gray-7': '#F8F8F8',
        'gray-6': '#F3F3F3',
        'gray-5': '#E9E9E9',
        'gray-4': '#DCDCDC',
        'gray-3': '#AAAAAA',
        'gray-2': '#666666',
        'gray-1': '#111111',
      },
      zIndex: {
        header: '9999',
      },
    },
  },
  plugins: [],
};
