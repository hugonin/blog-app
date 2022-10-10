function Footer() {
  return (
    <footer className="py-16 flex-shrink bg-slate-50">
      <div className="flex flex-col items-center mt-24 text-xs text-gray-400">
        <div className="mb-4">
          <a
            className="mx-4 hover:text-gray-600"
            href="/faqs.html"
            rel="nofollow"
          >
            FAQs
          </a>
          <a
            className="mx-4 hover:text-gray-600"
            href="/terms-and-conditions.html"
            rel="nofollow"
          >
            Terms &amp; Conditions
          </a>
        </div>
        <span>&copy; Hugonin {2022}</span>
      </div>
    </footer>
  );
}

export default Footer;
