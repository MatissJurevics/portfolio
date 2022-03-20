const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-mono']
      },
      colors: {
        'primary': '#F27A54',
        'secondary': '#A154F2',
        'tertiary': '#6FCF97',
        'dark-bg': '#30363D'
      },
    },

  },

  plugins: [],
};

module.exports = config;
