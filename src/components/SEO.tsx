import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

const SEO: React.FC<SEOProps> = ({
  title = 'Juan Andrés Rivera - Software Engineer & Frontend Developer',
  description = 'Senior Software Engineer with 8+ years of experience in React, Node.js, and modern web technologies. Currently working at Brikl as Frontend Engineer.',
  keywords = [
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Web Development',
    'Full Stack Developer',
    'Brikl',
    'Rappi',
    'Chile',
  ],
  image = '/me.png',
  url = 'https://ariverak.com',
  type = 'website',
  author = 'Juan Andrés Rivera',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {
  const fullTitle = title.includes('Juan Andrés Rivera')
    ? title
    : `${title} | Juan Andrés Rivera`
  const fullUrl = url.startsWith('http') ? url : `https://ariverak.com${url}`
  const fullImage = image.startsWith('http')
    ? image
    : `https://ariverak.com${image}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Juan Andrés Rivera Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@ariverak" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 &&
            tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
        </>
      )}

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
    </Head>
  )
}

export default SEO
