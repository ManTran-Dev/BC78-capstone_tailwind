/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

      fontSize: {
        'sectiontitle3': ['44px', { lineHeight: '55px' }],
        'sectiontitle4': ['34px', { lineHeight: '48px' }],
        'sectiontitle': ['14px', { lineHeight: '22px' }],
        'sectiontitle2': ['40px', { lineHeight: '52px' }],
        'metatitle3': ['16px', { lineHeight: '26px' }],
        'hero': ['44px', { lineHeight: '58px' }],
        'regular': ['16px', { lineHeight: '26px' }],
        'para2': ['22px', { lineHeight: '35px' }],
        'metatitle': ['12px', { lineHeight: '20px' }],
        'itemtitle2': ['24px', { lineHeight: '32px' }],
      },
      spacing: {// Thêm giá trị cho padding ;margin
        '22.5': '5.625rem',
        '27.5': '6.875rem',
        '12.5': '3.125rem',
        '1.5': '0.375rem',
        '4.5': '1.125rem',
        '15': '3.75rem',
        '7.5': '1.875rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '32.5': '8.125rem',
      },
      borderColor: {
        stroke: 'rgba(238, 238, 238, var(--tw-border-opacity, 1))',
      },
      zIndex: {
        '1': '1',
        '-1': '-1',
      },
      maxWidth: {
        'c_1390': '86.875rem',
        'c_1154': '72.125rem',
        'c_1235': '77.188rem',
        'c_1315': '82.188rem',
        'c_1207': '1207px',
        'c_1280': '80rem',
      },
      width: {
        '4/5': '80%',
        '70%': '70%', // Thêm width tùy chỉnh
        '45%': '45%',
        '46%': '46%',
        '26%': '26%',

      },
      height: {
        // Thêm height tùy chỉnh
      },
      backgroundColor: {
        'zumthor': 'rgb(237 245 255 / var(--tw-bg-opacity))',
        // Thêm class bg-zumthor
        'titlebg2': 'rgb(255 234 194 / var(--tw-bg-opacity))',
        'brandname': "#FBFBFB",
        'solid': "#EDF5FF",
      },
      boxShadow: {
        'solid-7': '0px 30px 50px rgba(45, 74, 170, .1)',
        'solid-9': '0px 12px 30px rgba(45,74,170,.06)',
        'solid-8': '0px 12px 120px rgba(45,74,170,.06)',
        'solid-10': '0px 8px 30px rgba(45,74,170,0.06)',
        'top': '0 0px 1px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '10': '10px', // Thêm class rounded-[10px]
      }, colors: {
        'custom': '#2D3145',
        'primary': 'rgb(0 107 255)',
        'waterloo': 'rgb(117 118 147)',
      },
      aspectRatio: {
        '368/239': '368 / 239',
      },
      container: {
        center: true,
      },

    },
  },
  plugins: [require('flowbite/plugin')],
}


