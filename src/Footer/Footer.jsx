import footerData from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-red-50 text-red-950 px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
        <a href="#">
             <img className="w-40 h-8 cursor-pointer mb-6"
              src={footerData.img}
               alt="" />
          </a>
            <p className="text-sm leading-6 text-red-950">
              {footerData.description}
            </p>
            <div className="flex gap-5 mt-8 text-sm">
              {footerData.socialLinks.map((social, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:text-red-700"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {footerData.columns.map((column, index) => (
              <div key={index}>

                <h3 className="font-semibold mb-5">
                  {column.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {column.links.map((link, index) => (
                    <a
                      href="#"
                      key={index}
                      className="text-sm text-red-950 hover:text-red-700"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-red-950">
          <p>
            {footerData.copyright}
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-700">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-red-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}