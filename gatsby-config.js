require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MDFmOWI4ODgtMWQyYS00MzZhLWFiNTUtNDBiNTMzNjYxNDIwNjM3MzYwNTYzNjY4MTc3OTMw',
        autopop: true
      }
    },
  ],
}
