import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#3D52A0] text-white border-t-2 border-[#7091E6]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-base hover:underline" to="/">Features</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Pricing</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Affiliate Program</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-base hover:underline" to="/">Account</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Help</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Contact Us</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Customer Support</Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="tracking-px mb-4 text-xs font-semibold uppercase">Legals</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-base hover:underline" to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-base hover:underline" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
