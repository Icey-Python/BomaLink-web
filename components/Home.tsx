import Image from 'next/image'
import { ArrowDownToLine, Info, ArrowRight, Sparkles, Leaf, Globe, Zap, Sprout, CheckCircle2, ExternalLink, BarChart3, Heart } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'

import { useState, useEffect } from 'react'
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Fade, Slide } from "react-awesome-reveal";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Home = ({ tagId = "Home" }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });
  
  const moveX = useTransform(smoothX, [-100, 100], [-10, 10]);
  const moveY = useTransform(smoothY, [-100, 100], [-10, 10]);
  
  const particleTransforms = Array.from({ length: 15 }).map((_, i) => ({
    initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 20 + 10,
    direction: i % 3 === 0 ? -1 : 1
  }));
  
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const offsetX = (clientX - centerX) / 25;
    const offsetY = (clientY - centerY) / 25;
    
    mouseX.set(offsetX);
    mouseY.set(offsetY);
    setMousePosition({ x: clientX, y: clientY });
  };
  
  useEffect(() => {
    setMounted(true);
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (clientX - centerX) / 25;
      const offsetY = (clientY - centerY) / 25;
      
      mouseX.set(offsetX);
      mouseY.set(offsetY);
      setMousePosition({ x: clientX, y: clientY });
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
      setMounted(false);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    }
  }, []);

  const services = [
    {
      title: "Pasture Management",
      description: "Optimize grazing patterns and monitor pasture health through detailed analytical reports and recommendations.",
      icon: <Sprout className="h-10 w-10 text-[#47f969]" />,
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Weather Forecasting",
      description: "Access detailed weather information specific to your geographical location with accurate predictions for effective planning.",
      icon: <Leaf className="h-10 w-10 text-[#47f969]" />,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "GPS Tracking",
      description: "Monitor and track the movement of your animals in real-time using advanced GPS technology with customizable alerts.",
      icon: <Zap className="h-10 w-10 text-[#47f969]" />,
      color: "from-purple-500/10 to-indigo-500/10"
    }
  ]

  return (
    <Dialog>
      <section
        id={tagId}
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#021500] to-[#224103] py-24 md:py-32"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#47f969]/5 blur-2xl"
            style={{
              x: moveX,
              y: moveY,
              scale: 0.95 + (smoothX.get() / 100) * 0.1
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute top-1/4 -left-20 h-60 w-60 rounded-full bg-[#D6F9C6]/3 blur-2xl"
            style={{
              x: -5 + (smoothX.get() / 100) * 10,
              y: -5 + (smoothY.get() / 100) * 10,
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-[#47f969]/3 blur-2xl"
            style={{
              x: -15 + (smoothX.get() / 100) * 30,
              y: -15 + (smoothY.get() / 100) * 30,
            }}
          ></motion.div>
          
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]"></div>
          
          {mounted && (
            <motion.div
              className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#47f969]/5 blur-[80px]"
              animate={{
                x: mousePosition.x - 150,
                y: mousePosition.y - 150,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.5,
              }}
            />
          )}
          
          {mounted && particleTransforms.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                x: particle.initialX,
                y: particle.initialY,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                x: [
                  null, 
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) + 
                  (smoothX.get() / 5) * particle.direction
                ],
                opacity: [null, Math.random() > 0.5 ? 0 : 0.5]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-8 sm:px-10 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-28">
            <motion.div 
              className="z-10 space-y-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center rounded-full bg-[#47f969]/10 px-5 py-2 text-sm font-medium text-[#47f969]"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>Revolutionizing Pasture Management</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="block mb-3">Empowering</span>{" "}
                  <span className="block bg-gradient-to-r from-[#47f969] to-[#D6F9C6] bg-clip-text text-transparent">
                    Farmers & Pastoralists
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="mt-10 max-w-xl text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  GeoPasture is a digital platform that promotes peaceful coexistence between pastoralists and farmers by providing real-time data on pasture availability, weather forecasts, and animal tracking.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-[#47f969] to-[#3ad959] text-[#021500] shadow-lg hover:shadow-xl hover:shadow-[#47f969]/20 px-8 py-6 text-base"
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%", opacity: 0.3 }}
                    animate={{ x: "100%", opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 2 }}
                  />
                  <span className="relative">Get Started</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>

                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#47f969]/30 bg-transparent text-[#47f969] hover:bg-[#47f969]/10 hover:text-white px-8 py-6 text-base"
                  >
                    <Info className="mr-3 h-5 w-5" />
                    Learn More
                  </Button>
                </DialogTrigger>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative z-10 mx-auto max-w-md lg:max-w-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              style={{ 
                y: smoothY.get() / 20,
                rotateY: smoothX.get() / 50,
                rotateX: -smoothY.get() / 50,
              }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#47f969]/5 to-transparent blur-lg"
                  style={{
                    x: smoothX.get() / 50,
                    y: smoothY.get() / 50,
                  }}
                ></motion.div>
                
                <div className="relative mx-auto overflow-hidden rounded-[2.5rem] border-[8px] border-[#224103] bg-[#021500] shadow-xl">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/app-screenshot.png"
                      alt="GeoPasture App"
                      width={300}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute left-1/2 top-0 h-6 w-1/3 -translate-x-1/2 rounded-b-xl bg-[#021500]"></div>
                </div>
                
                <motion.div 
                  className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#47f969]/10 blur-xl"
                  style={{
                    x: -8 + smoothX.get() / 6,
                    y: -8 + smoothY.get() / 6,
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-[#D6F9C6]/10 blur-lg"
                  style={{
                    x: 5 - smoothX.get() / 10,
                    y: 5 - smoothY.get() / 10,
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mt-32">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-[#47f969] sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering farmers with cutting-edge technology for sustainable and efficient agricultural practices.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col h-full rounded-2xl border border-[#47f969]/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#47f969]/30 hover:shadow-[0_0_20px_rgba(71,249,105,0.1)]"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} p-3`}>
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="flex-grow text-gray-300">{service.description}</p>
                <motion.button 
                  className="mt-6 flex w-fit items-center gap-2 text-[#47f969] transition-all" 
                  whileHover={{ gap: '0.75rem' }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-24 rounded-2xl border border-[#47f969]/10 bg-white/5 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics Dashboard</h3>
                <p className="text-gray-300 mb-6">
                  Access comprehensive data and insights about your farmland, livestock, and operations through our 
                  intuitive dashboard designed specifically for agricultural management.
                </p>
                <ul className="space-y-3 text-gray-300">
                  {['Real-time monitoring', 'Historical data analysis', 'Predictive insights', 'Custom reports'].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#47f969]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  className="mt-8 flex items-center gap-2 bg-[#47f969] text-[#021500] px-6 py-3 rounded-lg font-medium hover:bg-[#3ad959] transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Try Demo</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              <motion.div 
                className="relative aspect-video rounded-xl overflow-hidden border border-[#47f969]/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#021500] to-[#224103] opacity-90"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.6, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <BarChart3 className="h-20 w-20 text-[#47f969] opacity-50" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="h-2 w-2 rounded-full bg-[#47f969]"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity
                        }}
                      ></motion.div>
                      <span className="text-sm text-white">Live Data</span>
                    </div>
                    <span className="text-xs text-gray-400">Updated 2 minutes ago</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mt-32 mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#021500] to-[#224103] p-1"
          >
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,50%,white,transparent)]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/15 to-transparent"></div>
            
            <div className="relative rounded-xl bg-[#021500]/80 backdrop-blur-md px-8 py-16 sm:px-16">
              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="max-w-md text-center lg:text-left">
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Ready to Transform Your Livestock Management?
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Join thousands of farmers and pastoralists who have embraced our digital solutions for better decision-making.
                  </motion.p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button className="relative overflow-hidden bg-gradient-to-r from-[#47f969] to-[#3ad959] text-[#021500] shadow-lg px-8 py-6 text-base font-medium hover:shadow-xl hover:shadow-[#47f969]/20">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="border-[#47f969]/30 bg-transparent text-[#47f969] hover:bg-[#47f969]/10 hover:text-white px-8 py-6 text-base font-medium">
                      Contact Sales
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <DialogContent className="sm:max-w-lg bg-[#021500] border border-[#47f969]/20 text-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#47f969]">
              About GeoPasture
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 overflow-y-auto pr-2">
            <p className="text-gray-300">
              GeoPasture is a revolutionary platform designed to transform the way farmers and pastoralists manage their resources. Our mission is to promote peaceful coexistence and sustainable land use through technology.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-4">Our Vision</h3>
            <p className="text-gray-300">
              We envision a world where technology bridges the gap between traditional farming practices and modern resource management, creating harmony between different agricultural stakeholders.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-4">Key Benefits</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Reduce conflicts over land and water resources</li>
              <li>Optimize grazing patterns for healthier livestock</li>
              <li>Access accurate weather forecasts for better planning</li>
              <li>Track animal movements in real-time for improved security</li>
              <li>Connect with other farmers and pastoralists in your region</li>
            </ul>
          </div>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline" className="border-[#47f969]/30 bg-transparent text-[#47f969] hover:bg-[#47f969]/10 hover:text-white">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </section>
    </Dialog>
  );
};

export default Home;
