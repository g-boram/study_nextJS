export default function Footer() {
  return (
    <footer className="bg-gray-700 py-2">
      <div className="max-w-screen-xl w-full text-gray-200 mx-auto p-4 md:flex md:items-center md: justify-between border-b-gray-500 border-b">
        <div className="test-sm  sm:text-center">Footer</div>
        <div className="hover:underline">Hover-underline</div>
        <ul className="flex flex-wrap gap-4 md:gap-6 items-center text-sm mt-2 sm:mt-0">
          <li>
            <a href="#"># a href-1</a>
          </li>
          <li>
            <a href="#"># a href-2</a>
          </li>
          <li>
            <a href="#"># a href-3</a>
          </li>
        </ul>
      </div>
      <div className="text-[10px] text-gray-400 mx-auto p-4 max-w-screen-xl">
        start: 2025-07 | name: Goboram | Tel: 010-1234-1234
      </div>
    </footer>
  )
}
