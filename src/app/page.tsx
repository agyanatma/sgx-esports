"use client";

import React, { useState, useEffect } from "react";
import {
    ChevronDown,
    Play,
    Users,
    Trophy,
    Calendar,
    Instagram,
    Youtube,
    TrendingUp,
    Gamepad2,
    Zap,
    Star,
    ArrowRight,
    Menu,
    X,
} from "lucide-react";
import dayjs from "dayjs";

const SGXWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const useAnimation = (
        initial: { opacity: number; transform: string },
        animate: { opacity: number; transform: string },
        delay = 0
    ): { style: React.CSSProperties } => {
        const [style, setStyle] = useState<React.CSSProperties>(initial);

        useEffect(() => {
            const timer = setTimeout(() => {
                setStyle({
                    opacity: animate.opacity,
                    transform: animate.transform,
                    transition: "all 0.6s ease",
                });
            }, delay);
            return () => clearTimeout(timer);
        }, [delay, animate]);

        return { style };
    };

    const NavigationMenu = () => (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-red-500/20">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 bg-white rounded-lg flex items-center justify-center">
                            <img
                                src="/assets/logo.png"
                                alt="SGX Logo"
                                className="w-full h-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">SGX</h1>
                            <p className="text-xs text-gray-400">Semarang Gelut Xtreme</p>
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {["Home", "About", "Events", "Community", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-red-400 transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-700">
                        {["Home", "About", "Events", "Community", "Contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-300 hover:text-red-400 transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                )}
            </div>
        </nav>
    );

    const HeroSection = () => {
        const { style } = useAnimation(
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
            0
        );

        return (
            <section
                id="home"
                className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 relative overflow-hidden"
            >
                <div
                    className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23dc2626" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
                ></div>

                <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        <div style={style}>
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4">
                                    🎮 Fighting Game Community
                                </span>
                                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[72px]">
                                    SEMARANG
                                    <span className="text-red-500 block">GELUT</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                        XTREME
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Indonesia's Fighting Game Community. We organize
                                    tournaments, create content, and unite fighters across
                                    the archipelago.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a
                                    href="https://youtube.com/@tk_sgxesports"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <Play className="w-5 h-5" />
                                    <span>Watch Our Streams</span>
                                </a>
                                <a
                                    href="https://wa.me/6282136147029?text=saya ingin bergabung dengan SGX"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                                >
                                    <Users className="w-5 h-5" />
                                    <span>Join Community</span>
                                </a>
                            </div>

                            <div className="flex items-center space-x-6 text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <Trophy className="w-5 h-5 text-red-400" />
                                    <span>7 Tournaments</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Users className="w-5 h-5 text-red-400" />
                                    <span>100+ Members</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <TrendingUp className="w-5 h-5 text-red-400" />
                                    <span>Growing Fast</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-red-500/20">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Watch Our Livestream
                                    </h3>
                                </div>

                                <iframe
                                    className="w-full aspect-video rounded-lg"
                                    src="https://www.youtube.com/embed/Yj67DFPksCk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6 text-red-400" />
                </div>
            </section>
        );
    };

    const AboutSection = () => {
        const { style } = useAnimation(
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
            200
        );

        return (
            <section id="about" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div style={style}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                About SGX Esports
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                We are a Fighting Game Community from Semarang, Indonesia,
                                dedicated to promoting competitive gaming and fostering
                                talent in the FGC scene.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-gray-800/50 rounded-lg p-8 border border-red-500/20 hover:border-red-500/40 transition-all">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <Gamepad2 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Gaming Focus
                                </h3>
                                <p className="text-gray-300">
                                    Currently focusing in Tekken 8, we organize
                                    tournaments and training sessions to elevate the
                                    competitive scene in Indonesia.
                                </p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-8 border border-red-500/20 hover:border-red-500/40 transition-all">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <Play className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Content Creation
                                </h3>
                                <p className="text-gray-300">
                                    We produce high-quality content on YouTube, Instagram,
                                    and TikTok to showcase our community and attract
                                    potential sponsors.
                                </p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-8 border border-red-500/20 hover:border-red-500/40 transition-all">
                                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                    <Trophy className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Tournament Organizer
                                </h3>
                                <p className="text-gray-300">
                                    We organize various events including tournaments,
                                    challenges, and friendly matches with other Indonesian
                                    Tekken communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const EventsSection = () => {
        const { style } = useAnimation(
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
            400
        );

        const events = [
            {
                title: "Knockout Arena 2025: Tekken 8 Tournament",
                type: "Tournament",
                date: "July 13, 2025",
                participants: "91 Players",
                prize: "20M IDR",
                status: "Finished",
                cta: "https://start.gg/knockout-arena-2025",
            },
            {
                title: "SGX Monthly Tournament 2025",
                type: "Tournament",
                date: "Every Month",
                participants: "20+ Players",
                prize: "For Fun",
                status: "Regular",
                cta: "https://www.youtube.com/watch?v=5dlRdHBfutg&list=PL2ocKJA4P2tYajrOn3bU8VGh_ItHPsJc_",
            },
            {
                title: "Friendly Match with Other Communities",
                type: "Friendly Match",
                date: "Every Thursday",
                participants: "30 Players",
                prize: "For Fun",
                status: "Regular",
                cta: "https://www.youtube.com/watch?v=WEwEzE-wZj8&list=PL2ocKJA4P2tYW32FzPuKxzMspEgvcbWP0",
            },
        ];

        return (
            <section id="events" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div style={style}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Our Events
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Join our regularly scheduled tournaments, challenges, and
                                community events. All skill levels welcome!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900/50 rounded-lg p-6 border border-red-500/20 hover:border-red-500/40 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {event.title}
                                            </h3>
                                            <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                                                {event.type}
                                            </span>
                                        </div>
                                        <div
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                event.status === "Upcoming"
                                                    ? "bg-yellow-600/20 text-yellow-400"
                                                    : event.status === "Regular"
                                                    ? "bg-blue-600/20 text-blue-400"
                                                    : "bg-green-600/20 text-green-400"
                                            }`}
                                        >
                                            {event.status}
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center space-x-2 text-gray-300">
                                            <Calendar className="w-4 h-4 text-red-400" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-300">
                                            <Users className="w-4 h-4 text-red-400" />
                                            <span>{event.participants}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-300">
                                            <Trophy className="w-4 h-4 text-red-400" />
                                            <span>{event.prize}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={event.cta}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all group-hover:scale-105 text-center"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const CommunitySection = () => {
        const { style } = useAnimation(
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
            600
        );

        return (
            <section id="community" className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div style={style}>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Join Our Community
                                </h2>
                                <p className="text-xl text-gray-300 mb-8">
                                    Connect with fellow fighters, share strategies, and
                                    stay updated on the latest tournaments and events.
                                    Follow us on social media for exclusive content!
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                            <Youtube className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">
                                                YouTube Channel
                                            </h3>
                                            <p className="text-gray-400">
                                                Live streams, tutorials, and tournament
                                                highlights
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                            <Instagram className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">
                                                Instagram
                                            </h3>
                                            <p className="text-gray-400">
                                                Behind-the-scenes content and community
                                                updates
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold">
                                                TikTok
                                            </h3>
                                            <p className="text-gray-400">
                                                Quick tips, combo showcases, and viral
                                                moments
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://www.youtube.com/@tk_sgxesports"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                                    >
                                        <Youtube className="w-5 h-5" />
                                        <span>Subscribe</span>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/sgxesports/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                                    >
                                        <Instagram className="w-5 h-5" />
                                        <span>Follow</span>
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-gray-800/50 rounded-lg p-8 border border-red-500/20">
                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Community Stats
                                    </h3>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-red-400 mb-2">
                                                100+
                                            </div>
                                            <div className="text-gray-400">
                                                Active Members
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-red-400 mb-2">
                                                50+
                                            </div>
                                            <div className="text-gray-400">
                                                Events Hosted
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-red-400 mb-2">
                                                5,000+
                                            </div>
                                            <div className="text-gray-400">
                                                YouTube Views
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-red-400 mb-2">
                                                600+
                                            </div>
                                            <div className="text-gray-400">
                                                IG Followers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const ContactSection = () => {
        const { style } = useAnimation(
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
            800
        );

        return (
            <section id="contact" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div style={style}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Interested in sponsoring our events or collaborating with
                                us? We'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Partnership Opportunities
                                </h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <Star className="w-5 h-5 text-red-400" />
                                        <span className="text-gray-300">
                                            Event Sponsorship
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Star className="w-5 h-5 text-red-400" />
                                        <span className="text-gray-300">
                                            Content Collaboration
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Star className="w-5 h-5 text-red-400" />
                                        <span className="text-gray-300">
                                            Brand Partnership
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Star className="w-5 h-5 text-red-400" />
                                        <span className="text-gray-300">
                                            Media Coverage
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-gray-900/50 rounded-lg p-6 border border-red-500/20">
                                    <h4 className="text-lg font-semibold text-white mb-3">
                                        Connect With Us
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Youtube className="w-5 h-5 text-red-400" />
                                            <span className="text-gray-300">
                                                @tk_sgxesports
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Instagram className="w-5 h-5 text-red-400" />
                                            <span className="text-gray-300">
                                                @sgxesports
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const email = formData.get("email") as string;
                                    const subject = formData.get("subject") as string;
                                    const message = formData.get("message") as string;

                                    fetch("/api/email", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            to: "agyanatma1410@gmail.com",
                                            subject,
                                            text: message,
                                            from: email,
                                        }),
                                    })
                                        .then((res) => res.json())
                                        .then((data) => {
                                            alert(
                                                data.success
                                                    ? "Email sent successfully!"
                                                    : "Failed to send email!"
                                            );
                                        })
                                        .catch((error) => {
                                            console.error("Error sending email:", error);
                                        });
                                }}
                                className="space-y-4"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    required
                                    rows={6}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    const Footer = () => (
        <footer className="bg-gray-900 border-t border-gray-700 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                                <Gamepad2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">SGX</h1>
                                <p className="text-xs text-gray-400">Esports</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Semarang's Fighting Game Community.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>
                                <a
                                    href="#home"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#events"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#community"
                                    className="hover:text-red-400 transition-colors"
                                >
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Events</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Tekken 8 Tournament</li>
                            <li>Friendly Matches</li>
                            <li>Monthly Tournament</li>
                            <li>Challenge Events</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.youtube.com/@tk_sgxesports"
                                className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/sgxesports/"
                                className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {dayjs().year()} SGX Esports. All rights reserved. Semarang
                        Gelut Xtreme.
                    </p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <NavigationMenu />
            <HeroSection />
            <AboutSection />
            <EventsSection />
            <CommunitySection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default SGXWebsite;
