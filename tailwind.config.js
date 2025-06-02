/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary-00': '#00B2FF',
        'primary-10': '#00a9f3',
        'primary-20': '#0092d1',
        'primary-30': '#0073a5',
        'primary-40': '#004461',
        'secondary-00': '#FF66D1',
        'secondary-10': '#DA57B3',
        'secondary-20': '#AC458D',
        'secondary-30': '#662953',
        'neutral-00': '#FFFFFF',
        'neutral-10': '#FAFAFA',
        'neutral-20': '#EAEAEA',
        'neutral-30': '#9A9A9A',
        'neutral-40': '#686868',
        'neutral-50': '#282828',
        'success-00': '#EBFFE7',
        'success-10': '#BBFFAA',
        'success-20': '#29CF00',
        'warning-00': '#fffae4',
        'warning-10': '#ffeea8',
        'warning-20': '#ffcd06',
        'error-00': '#FFC3CF',
        'error-10': '#FF718D',
        'error-20': '#D9002B',
        'background-00': '#FFFFFF',
        'background-10': '#F9F9F9',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      spacing: {
        'card': '390px',
      },
      lineHeight: {
        '4.5': '1.125rem', // 18px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '9': '2.25rem',    // 36px
        '12': '3rem',      // 48px
        '15': '3.75rem',   // 60px
        '17': '4.25rem',   // 68px
      },
    },
  },
  plugins: [
  ],
}

