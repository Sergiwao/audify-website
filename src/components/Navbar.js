'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download, ShieldCheck, Monitor, ChevronRight, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar({ onDownloadClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-gray-800/80 bg-gray-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Audify Logo */}
          <div className="flex items-center space-x-3 shrink-0">
            <a href="#" className="flex items-center group">
              <Image
                src="/Audify.png"
                alt="Audify Logo"
                width={140}
                height={40}
                priority
                className="h-10 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 text-xs font-semibold text-gray-300">
            <a href="#features" className="hover:text-brand-400 transition-colors whitespace-nowrap">Fonctionnalités</a>
            <a href="#benefits" className="hover:text-brand-400 transition-colors whitespace-nowrap">Avantages OHADA</a>
            <a href="#showcase" className="hover:text-brand-400 transition-colors whitespace-nowrap">Aperçu</a>
            <a href="#download" className="hover:text-brand-400 transition-colors whitespace-nowrap flex items-center gap-1.5">
              <span>Téléchargement</span>
              <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">Windows</span>
            </a>
            <a href="#pricing" className="hover:text-brand-400 transition-colors whitespace-nowrap">Tarifs & Licences</a>
            <a href="#faq" className="hover:text-brand-400 transition-colors whitespace-nowrap">FAQ</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <a 
              href="http://localhost:3000/login" 
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-gray-900/80 hover:bg-gray-800 border border-gray-700/60 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Monitor className="w-3.5 h-3.5 text-brand-400" />
              <span>Portail Web</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>

            <button
              onClick={onDownloadClick}
              className="relative group overflow-hidden px-4 py-2 rounded-xl font-bold text-xs text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative flex items-center space-x-2">
                <Download className="w-3.5 h-3.5" />
                <span>Télécharger Audify (.exe)</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-800 bg-gray-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            Fonctionnalités
          </a>
          <a 
            href="#benefits" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            Avantages OHADA
          </a>
          <a 
            href="#showcase" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            Aperçu UI
          </a>
          <a 
            href="#download" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            Téléchargement (.exe)
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            Tarifs & Licences
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-gray-300 hover:text-brand-400 text-base font-medium"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            <a 
              href="http://localhost:3000/login" 
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 text-center font-semibold text-sm text-gray-200 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center gap-2"
            >
              <Monitor className="w-4 h-4 text-brand-400" />
              <span>Accéder au Portail Web</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full py-3 px-4 font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-emerald-500 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger Audify pour Windows</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
