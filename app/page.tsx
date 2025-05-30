"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Star, MapPin, Clock, Instagram, Scissors, Sparkles, Users, Calendar, Menu, X } from "lucide-react"
import Image from "next/image"

export default function SevenBarberWebsite() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [logoAnimated, setLogoAnimated] = useState(false)

  useEffect(() => {
    // Animation sequence for intro
    const timer1 = setTimeout(() => {
      setLogoAnimated(true)
    }, 500)

    const timer2 = setTimeout(() => {
      setShowIntro(false)
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "gallery", "reviews", "booking", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    if (!showIntro) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [showIntro])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const navigationItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À Propos" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Galerie" },
    { id: "reviews", label: "Avis" },
    { id: "contact", label: "Contact" },
  ]

  const serviceCategories = [
    {
      title: "Forfaits",
      services: [
        {
          name: "Coupe + Barbe",
          duration: "30 min",
          price: "35 €",
          icon: <Scissors className="w-5 h-5" />,
        },
        {
          name: "Coupe + Soin du Visage",
          duration: "50 min",
          price: "53 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Coupe + Traçage Barbe + Soin du Visage",
          duration: "1h15",
          price: "63 €",
          icon: <Users className="w-5 h-5" />,
        },
        {
          name: "Coupe + Barbe Complète + Soin du Visage",
          duration: "1h30",
          price: "68 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Barbe",
      services: [
        {
          name: "Traçage",
          duration: "10 min",
          price: "10 €",
          icon: <Scissors className="w-5 h-5" />,
        },
        {
          name: "Barbe Complète",
          duration: "20 min",
          price: "15 €",
          icon: <Users className="w-5 h-5" />,
        },
        {
          name: "Barbe Complète + Soin du Visage",
          duration: "1h15",
          price: "45 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Traçage + Soin du Visage",
          duration: "1h",
          price: "40 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Cheveux",
      services: [
        {
          name: "Coupe",
          duration: "30 min",
          price: "25 €",
          icon: <Scissors className="w-5 h-5" />,
        },
        {
          name: "Étudiant",
          duration: "30 min",
          price: "20 €",
          icon: <Users className="w-5 h-5" />,
        },
        {
          name: "Bambino (-10 ans)",
          duration: "30 min",
          price: "15 €",
          icon: <Users className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "Spécialités",
      subtitle: "(sur devis, à réserver en salon)",
      services: [
        {
          name: "Décoloration",
          duration: "30 min",
          price: "30 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Patine",
          duration: "30 min",
          price: "10 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Couleur",
          duration: "30 min",
          price: "10 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Mèches",
          duration: "30 min",
          price: "25 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
        {
          name: "Fibre",
          duration: "1 min",
          price: "3 €",
          icon: <Sparkles className="w-5 h-5" />,
        },
      ],
    },
  ]

  const reviews = [
    {
      name: "Thomas M.",
      rating: 5,
      comment: "Service exceptionnel, ambiance top et résultat parfait. Je recommande vivement !",
      date: "Il y a 2 semaines",
    },
    {
      name: "Pierre L.",
      rating: 5,
      comment: "Meilleur barbershop d'Annecy ! Équipe professionnelle et accueil chaleureux.",
      date: "Il y a 1 mois",
    },
    {
      name: "Marc D.",
      rating: 5,
      comment: "Toujours satisfait depuis 2 ans. Qualité constante et prix corrects.",
      date: "Il y a 3 semaines",
    },
  ]

  // Images pour la galerie
  const leftImages = [
    { src: "/gallery/barbe-complete.jpg", alt: "Barbe complète - Seven Barber" },
    { src: "/gallery/coupe-moderne-1.jpg", alt: "Coupe moderne dégradé - Seven Barber" },
  ]

  const rightImages = [
    { src: "/gallery/coupe-moderne-2.jpg", alt: "Coupe tendance - Seven Barber" },
    { src: "/gallery/coupe-bambino.jpg", alt: "Coupe Bambino - Seven Barber" },
  ]

  const StructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Seven Barber",
      alternateName: "7 Barber",
      description: "Barbershop haut de gamme à Annecy spécialisé dans la coupe homme et la taille de barbe",
      url: "https://sevenbarber-annecy.vercel.app",
      telephone: "+33450000000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "69 Av. de Genève",
        addressLocality: "Annecy",
        postalCode: "74000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "45.9036",
        longitude: "6.1256",
      },
      openingHours: ["Mo-Sa 09:30-19:30"],
      priceRange: "€€",
      image: "https://sevenbarber-annecy.vercel.app/og-image.jpg",
      sameAs: ["https://www.instagram.com/sevenbarber_annecy"],
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  }

  // Intro Screen Component
  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              logoAnimated ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-8"
            }`}
          >
            <Image
              src="/seven-barber-logo.png"
              alt="Seven Barber Logo"
              width={300}
              height={300}
              className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 filter invert"
              priority
            />
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                logoAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Seven Barber</h1>
              <p className="text-lg sm:text-xl text-white/80 font-light">L'art de la coupe masculine</p>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen bg-white text-black transition-all duration-1000 ease-out ${
        !showIntro ? "opacity-100" : "opacity-0"
      }`}
    >
      <StructuredData />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white border-b border-gray-200" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-black">Seven Barber</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-black ${
                    activeSection === item.id ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection("booking")}
              className="hidden sm:block bg-black text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm lg:text-base"
            >
              Réserver
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("booking")}
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-4"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/salon-interior.png" alt="Seven Barber Salon Interior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
          <div className="flex flex-col items-center justify-center mb-6">
            <Image
              src="/seven-barber-logo.png"
              alt="Seven Barber Logo"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-40 sm:h-40 mb-4 filter invert"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Seven Barber</h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-light">
            L'art de la coupe masculine à Annecy
          </p>
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez l'excellence du barbering dans un cadre moderne et raffiné. Nos maîtres barbiers vous offrent une
            expérience unique alliant tradition et innovation.
          </p>
          <button
            onClick={() => scrollToSection("booking")}
            className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Prendre rendez-vous
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Qui sommes-nous</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              L'expertise et le savoir-faire au service de votre style
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-700 mx-auto">
              <p className="mb-6">
                Parce qu'une coupe de cheveux ou une taille de barbe réussies requièrent un vrai savoir-faire, Calto et
                Mika ont choisi de mettre leur expertise au service des hommes en quête d'un résultat toujours
                impeccable. Depuis l'automne 2021, leur salon de coiffure 7 Barber, à Annecy, vous reçoit du mardi au
                samedi pour des prestations de qualité adaptées au style et aux attentes de chacun.
              </p>
              <p className="mb-6">
                Quels que soient les besoins de vos cheveux ou de votre barbe, vos goûts et votre personnalité, vos
                coiffeurs et barbiers du salon de coiffure 7 Barber, à Annecy, sauront vous proposer la coupe, la
                technique ou le rasage qui répond à vos exigences.
              </p>
              <p className="mb-6">
                Calto et Mika réalisent la coupe dans toutes ses versions : à la tondeuse, aux ciseaux, pour les
                étudiants, dédiée aux garçons de moins de 10 ans avec la formule « Bambino » ... Les plus grands
                pourront par ailleurs bénéficier de leurs conseils techniques et créatifs, qu'il s'agisse de trouver la
                couleur qui mettra leurs cheveux en valeur ou de jouer la nuance avec un éclaircissement.
              </p>
              <p className="mb-6">
                Enfin, le salon de coiffure 7 Barber est aussi un barber shop où vous profiterez d'un traçage parfait ou
                d'un rasage complet, à réserver seul, en complément d'une coupe ou avec un soin du visage. Autant de
                possibilités qui témoignent d'une seule et même volonté : vous garantir la meilleure qualité !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Prestations & Tarifs</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Des services premium pour sublimer votre style avec l'expertise de nos barbiers
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center text-black">{category.title}</h3>
                {category.subtitle && (
                  <p className="text-gray-500 text-center mb-6 sm:mb-8 italic text-sm sm:text-base">
                    {category.subtitle}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                    >
                      <div className="text-gray-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold mb-2 leading-tight text-black">{service.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-lg sm:text-xl font-bold text-black">{service.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Nouveau design avec séparateur central */}
      <section id="gallery" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Notre Galerie</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre salon et quelques-unes de nos réalisations
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {/* Images de gauche */}
            <div className="w-full md:w-5/12 space-y-6">
              {leftImages.map((image, index) => (
                <div
                  key={`left-${index}`}
                  className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer shadow-md"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Séparateur central stylisé */}
            <div className="w-full md:w-2/12 flex flex-col items-center justify-center py-6 md:py-0">
              <div className="relative h-full flex flex-col items-center justify-center">
                {/* Ligne verticale */}
                <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent absolute"></div>

                {/* Logo au centre */}
                <div className="bg-white rounded-full p-4 shadow-md z-10 mb-6 md:mb-0">
                  <Image
                    src="/seven-barber-logo.png"
                    alt="Seven Barber Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12"
                  />
                </div>

                {/* Éléments décoratifs */}
                <div className="hidden md:flex flex-col items-center space-y-24 mt-12">
                  <Scissors className="w-6 h-6 text-gray-400 transform rotate-45" />
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <Scissors className="w-6 h-6 text-gray-400 transform -rotate-45" />
                </div>
              </div>
            </div>

            {/* Images de droite */}
            <div className="w-full md:w-5/12 space-y-6">
              {rightImages.map((image, index) => (
                <div
                  key={`right-${index}`}
                  className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer shadow-md"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Avis Clients</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Ce que disent nos clients de leur expérience chez Seven Barber
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm sm:text-base text-black">{review.name}</span>
                  <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-white" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Réservez votre créneau</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-300">
            Prenez rendez-vous en ligne en quelques clics. Choisissez votre barbier et votre créneau préféré.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.planity.com/7-barber-74000-annecy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
            >
              Réserver sur Planity
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">Contact & Infos</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez-nous au cœur d'Annecy pour une expérience barbering d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-black">Adresse</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    69 Av. de Genève
                    <br />
                    74000 Annecy, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-black">Horaires</h3>
                  <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                    <p>Lundi - Samedi: 9h30 - 19h30</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-black">Instagram</h3>
                  <a
                    href="https://www.instagram.com/sevenbarber_annecy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors text-sm sm:text-base"
                  >
                    @sevenbarber_annecy
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8234567890123!2d6.1234567890123456!3d45.90361234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8f1234567890%3A0x1234567890abcdef!2s69%20Av.%20de%20Gen%C3%A8ve%2C%2074000%20Annecy%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seven Barber - 69 Av. de Genève, Annecy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <Image
                src="/seven-barber-logo.png"
                alt="Seven Barber Logo"
                width={60}
                height={60}
                className="w-12 h-12 mb-2 filter invert"
              />
              <div className="text-2xl sm:text-3xl font-bold text-white">Seven Barber</div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Barbershop haut de gamme - Annecy</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/sevenbarber_annecy/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-xs sm:text-sm text-gray-500">
              © 2025 Seven Barber. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
