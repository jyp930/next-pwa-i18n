/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

// plugins
const withPWA = require('next-pwa')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([withPWA, withMDX], {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  i18n
})
