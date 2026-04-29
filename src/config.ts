import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://www.coloso-gl.blog', // Site domain
    title: 'Coloso Blog', // Site title
    author: 'Coloso Blog', // Author name
    description: 'Learn the best, from the best.', // Site description
    language: 'en-US' // Default language
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '35rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: false, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD', // Date format
    dateSeparator: '.', // Date separator
    dateOnRight: true // Date position
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false, // Show reading time in posts
    toc: true, // Show table of contents
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button
    linkCard: true // Enable link card
  }
}; // <--- 🌟 중요: themeConfig는 여기서 끝납니다!

// --- 🎁 월간 쿠폰 시스템 설정 ---
const COUPON_MONTH = "2604"; // ← 매월 자동 업데이트

export const COUPON_SYSTEM = {
  enabled: true,
  bannerImageLight: "/coupon-banner-light.webp",
  bannerImageDark: "/coupon-banner-dark.webp",
  codes: {
    "50": [
      `gsd_autoblog${COUPON_MONTH}_gl_50-1`,
      `gsd_autoblog${COUPON_MONTH}_gl_50-2`,
      `gsd_autoblog${COUPON_MONTH}_gl_50-3`
    ],
    "70": [
      `gsd_autoblog${COUPON_MONTH}_gl_70-1`,
      `gsd_autoblog${COUPON_MONTH}_gl_70-2`,
      `gsd_autoblog${COUPON_MONTH}_gl_70-3`
    ]
  },
};
