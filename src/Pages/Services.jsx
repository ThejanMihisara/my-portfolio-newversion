import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../supabase";
import { 
  Code, Palette, Server, Smartphone, Database, Cloud, 
  Youtube, FileText, ExternalLink, Play, BookOpen 
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Service icons mapping
const SERVICE_ICONS = {
  "Full Stack Development": Code,
  "Frontend Development": Palette,
  "Backend Development": Server,
  "Mobile Development": Smartphone,
  "Database Design": Database,
  "Cloud Services": Cloud,
  default: Code,
};

const ServiceCard = ({ title, description, features }) => {
  const Icon = SERVICE_ICONS[title] || SERVICE_ICONS.default;

  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <div className="relative p-6 md:p-8 z-10 h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" strokeWidth={1.5} />
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3 md:mb-4">
            {title}
          </h3>
          
          {/* Ensure description is rendered with HTML line breaks */}
          <div 
            className="text-gray-300/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow"
            dangerouslySetInnerHTML={{ __html: description }} // This renders HTML content, including line breaks
          />

          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const ContentCard = ({ platform, title, description, link, thumbnail }) => {
  const isYoutube = platform?.toLowerCase() === 'youtube';
  const isMedium = platform?.toLowerCase() === 'medium';
  const Icon = isYoutube ? Youtube : isMedium ? FileText : BookOpen;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
    >
      <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/30 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {thumbnail && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {isYoutube && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600/90 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white" fill="white" />
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${isYoutube ? 'text-red-400' : isMedium ? 'text-green-400' : 'text-blue-400'}`} />
              <span className={`text-sm font-medium ${isYoutube ? 'text-red-400' : isMedium ? 'text-green-400' : 'text-blue-400'}`}>
                {platform}
              </span>
            </div>
            
            <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors">
              {title}
            </h2>
            
            {description && (
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {description}
              </p>
            )}
            
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
              <span>View Content</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [contentLinks, setContentLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [servicesResponse, contentResponse] = await Promise.all([
        supabase.from("services").select("*").order("id", { ascending: true }),
        supabase.from("content_links").select("*").order("id", { ascending: true }),
      ]);

      if (servicesResponse.error) throw servicesResponse.error;
      if (contentResponse.error) throw contentResponse.error;

      setServices(servicesResponse.data || []);
      setContentLinks(contentResponse.data || []);

      localStorage.setItem("services", JSON.stringify(servicesResponse.data));
      localStorage.setItem("content_links", JSON.stringify(contentResponse.data));
    } catch (error) {
      console.error("Error fetching services data:", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cachedServices = localStorage.getItem("services");
    const cachedContent = localStorage.getItem("content_links");

    if (cachedServices && cachedContent) {
      setServices(JSON.parse(cachedServices));
      setContentLinks(JSON.parse(cachedContent));
      setLoading(false);
    }

    fetchData();
  }, [fetchData]);

  return (
    <div className="md:px-[10%] px-[5%] w-full py-16 md:py-24 bg-[#030014] overflow-hidden" id="Services">
      {/* Services Section */}
      <div className="mb-16 md:mb-24" data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            Services I Offer
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive development services tailored to bring your ideas to life with cutting-edge technologies and best practices.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No services available at the moment.</p>
          </div>
        )}
      </div>

      {/* Content Links Section
      {contentLinks.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
              Latest Content
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Check out my latest tutorials, articles, and videos on YouTube and Medium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contentLinks.map((content, index) => (
              <div
                key={content.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <ContentCard {...content} />
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Services;