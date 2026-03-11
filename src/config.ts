import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://coloso-gl-blog.vercel.app/', // Site domain
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
export const COUPON_SYSTEM = {
  enabled: true,  // 💡 이제 사용하니까 true로!
  bannerImageLight: "/coupon-banner-light.webp", 
  bannerImageDark: "/coupon-banner-dark.webp", 
  
  // ✅ 할인액별로 쿠폰 리스트를 분리해서 넣으세요.
  codes: {
    "50": [
      "en-gsd_autoblog2603_gl_50-1",
      "en-gsd_autoblog2603_gl_50-2",
      "en-gsd_autoblog2603_gl_50-3",
      "en-gsd_autoblog2603_gl_50-4",
      "en-gsd_autoblog2603_gl_50-5"
    ],
    "70": [
      "en-gsd_autoblog2603_gl_70-1",
      "en-gsd_autoblog2603_gl_70-2",
      "en-gsd_autoblog2603_gl_70-3",
      "en-gsd_autoblog2603_gl_70-4",
      "en-gsd_autoblog2603_gl_70-5"
    ]
  },
};
