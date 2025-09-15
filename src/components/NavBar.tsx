function NavBar() {
  return (
    <nav className="w-full flex justify-center mt-4">
      <div className="flex divide-x divide-gray-300 bg-white rounded-2xl shadow-md px-4 py-3">
        <a
          href="#about"
          className="text-gray-700 hover:text-[#a8b8d0] transition-colors px-12"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-700 hover:text-[#a8b8d0] transition-colors px-12"
        >
          Projects
        </a>
        <a
          href="#blog"
          className="text-gray-700 hover:text-[#a8b8d0] transition-colors px-12"
        >
          Blog
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
