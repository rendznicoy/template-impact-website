"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const templateName = process.env.NEXT_PUBLIC_TEMPLATE_NAME || "Template Name";

  // Placeholder university info - will be replaced with actual data
  const universityInfo = {
    name: "Visayas State University",
    fullName: "Visayas State University",
    address: "Visca, Baybay City, Leyte",
    postalCode: "6521",
    country: "Philippines",
    phone: "+63 53 565 0600",
    email: "info@vsu.edu.ph",
    website: "https://www.vsu.edu.ph",
    socialMedia: {
      facebook: "https://facebook.com/vsu",
      twitter: "https://twitter.com/vsu",
      instagram: "https://instagram.com/vsu",
      linkedin: "https://linkedin.com/company/vsu",
      youtube: "https://youtube.com/vsu",
    },
  };

  return (
    <footer className="bg-vsu-dark-green text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Placeholder for VSU Logo */}
              <div className="h-12 w-12 rounded-full bg-vsu-golden flex items-center justify-center text-vsu-dark-green font-bold">
                VSU
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg">
                  {universityInfo.name}
                </h3>
                <p className="text-sm text-vsu-golden">{templateName}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Pursuing excellence in education, research, and public service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/content"
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  Content
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <a
                  href={universityInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-vsu-golden" />
                <span className="text-sm text-gray-300">
                  {universityInfo.address}, {universityInfo.postalCode}{" "}
                  {universityInfo.country}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-vsu-golden" />
                <a
                  href={`tel:${universityInfo.phone}`}
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  {universityInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-vsu-golden" />
                <a
                  href={`mailto:${universityInfo.email}`}
                  className="text-sm text-gray-300 hover:text-vsu-golden transition-colors"
                >
                  {universityInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {universityInfo.socialMedia.facebook && (
                <a
                  href={universityInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-vsu-green hover:bg-vsu-golden transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {universityInfo.socialMedia.twitter && (
                <a
                  href={universityInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-vsu-green hover:bg-vsu-golden transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {universityInfo.socialMedia.instagram && (
                <a
                  href={universityInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-vsu-green hover:bg-vsu-golden transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {universityInfo.socialMedia.linkedin && (
                <a
                  href={universityInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-vsu-green hover:bg-vsu-golden transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {universityInfo.socialMedia.youtube && (
                <a
                  href={universityInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-vsu-green hover:bg-vsu-golden transition-colors flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-vsu-green text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} {universityInfo.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Pursuing Truth, Excellence, Relevance, and Integrity
          </p>
        </div>
      </div>
    </footer>
  );
}
