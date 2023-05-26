module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/images/**/*.{jpeg,jpg,png,webp}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'default': '#FFFFFF',
        'custom-bg-image': 'url(./src//wp.jpg)'
      },
    },
    filterOption: {
      backgroundColor: 'black',
      textColor: 'white',
      border: 'none',
      borderRadius: '9999px',
      padding: '10px 20px',
      marginRight: '10px',
      cursor: 'pointer'
    },
    filterOptionActive: {
      backgroundColor: 'white',
      textColor: 'black',
      border: 'none',
      borderRadius: '9999px',
      padding: '10px 20px',
      marginRight: '10px',
      cursor: 'pointer'
    }
  },
  plugins: [],
};
