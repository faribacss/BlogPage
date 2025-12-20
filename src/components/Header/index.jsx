// "use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// image
import logo from "@/assets/img/logo.png";
import { Link } from "react-router";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-700 shadow-sm sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between lg:justify-between p-6 lg:px-8"
      >
        <div className="flex align-middle lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-3">
            <img src={logo} alt="logo" className="h-8 w-auto" />
            <span className="flex text-gray-200">Blog Page</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:flex-2 lg:gap-x-15">
          <Link
            to="/"
            className="flex items-center gap-x-1 text-sm/6 text-gray-200"
          >
            Home
          </Link>
          <a href="#" className="text-sm/6 text-gray-200">
            About Me
          </a>
          <a href="#" className="text-sm/6 text-gray-200">
            Contact US
          </a>
          <a href="#" className="text-sm/6 text-gray-200">
            Dashboard
          </a>
        </PopoverGroup>
      </nav>

      {/* mobile menu mode */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-700 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-x-3"
            >
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-800"
                >
                  Home
                </Link>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-800"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-800"
                >
                  Contact US
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-800"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
