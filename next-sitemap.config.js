/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mirindra-lan.vercel.app', // ton domaine
  generateRobotsTxt: true,                     // génère robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',                        // fréquence de mise à jour pour le SEO
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://mirindra-lan.vercel.app/sitemap.xml',
    ],
  },
};