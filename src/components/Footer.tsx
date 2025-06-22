export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t text-sm text-gray-600 dark:text-gray-400 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <h5 className="font-semibold mb-2">Social</h5>
         <ul>
          <li><a href="https://www.instagram.com/cotagonist/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/codymusser/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://x.com/Cotagonist" target="_blank" rel="noopener noreferrer">X</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Links</h5>
        <ul>
          <li><a href="https://buildwithstudio.com" target="_blank" rel="noopener noreferrer">Studio</a></li>
          <li><a href="mailto:cody[at]codymusser.com">Say Hello</a>
</li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Other</h5>
        <ul>
          <li>Made with 🔥 and 🍕 in NY State</li>
        </ul>
      </div>
    </footer>
  );
}
