export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t text-sm text-gray-600 dark:text-gray-400 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <h5 className="font-semibold mb-2">Social</h5>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Github</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Links</h5>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Other</h5>
        <ul>
          <li><a href="#">OpenSea</a></li>
          <li><a href="#">Dribbble</a></li>
        </ul>
      </div>
    </footer>
  );
}
