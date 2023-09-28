import React from 'react'

function Footer() {
  return (
    <footer className="page-footer green lighten-3">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://Fadeychik.github.io/React_Recipes" target='_blank' rel='noreferrer'>More Links</a>
      </div>
    </div>
  </footer>
  )
}

export {Footer};