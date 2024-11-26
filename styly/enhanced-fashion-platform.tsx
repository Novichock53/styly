'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Shirt, ArrowRight, ArrowLeft, Plus, X } from 'lucide-react'

// Transition Components
const ShirtTransition = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Text Fragments */}
          {["S", "T", "Y", "L", "Y", "Your", "Smart", "Fashion", "Assistant"].map((text, index) => (
            <motion.div
              key={index}
              className="absolute text-xl font-bold text-gray-800"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0,
                scale: 0,
                rotate: 0,
                skew: 0
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: Math.random() * 720 - 360,
                skew: Math.random() * 60 - 30
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                times: [0, 0.5, 1],
                ease: "easeInOut"
              }}
            >
              {text}
            </motion.div>
          ))}

          {/* Deconstructed Slogan */}
          <motion.div
            className="absolute text-3xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, skew: 0 }}
            animate={{ opacity: 1, skew: -10 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              initial={{ y: -50, rotate: -5, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              {["S", "T", "Y", "L", "Y"].map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotate: Math.random() * 180 - 90, skew: Math.random() * 20 - 10 }}
                  animate={{ y: 0, rotate: 0, opacity: 1, fontWeight: 800 }}
                  transition={{ duration: 1, delay: 2.2 + index * 0.1, type: "spring", stiffness: 100, damping: 8 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="mt-2"
              initial={{ y: 50, rotate: 5, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              {["Your", "Smart"].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200, rotate: Math.random() * 360 - 180, opacity: 0, skew: Math.random() * 20 - 10 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1, skew: 0 }}
                  transition={{ duration: 1.5, delay: 2.7 + index * 0.2, type: "spring", stiffness: 70 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="mt-2"
              initial={{ y: 50, rotate: -5, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              {["Fashion", "Assistant"].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ x: (Math.random() - 0.5) * 200, y: (Math.random() - 0.5) * 200, rotate: Math.random() * 360 - 180, opacity: 0, skew: Math.random() * 20 - 10 }}
                  animate={{ x: 0, y: 0, rotate: 0, opacity: 1, skew: 0 }}
                  transition={{ duration: 1.5, delay: 3 + index * 0.2, type: "spring", stiffness: 70 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Flipping T-Shirt */}
          <motion.div
            className="relative w-24 h-24"
            animate={{ 
              rotateY: [0, 360, 720, 1080],
              scale: [1, 1.1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.33, 0.66, 1],
              ease: "easeInOut"
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/衣服_爱给网_aigei_com-yM3JTmGZ6PCl631QFO29ZwiGTGqscw.png"
              alt="Transition Effect"
              width={96}
              height={96}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </motion.div>

          {/* Ripple Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-gray-300 rounded-full"
              style={{
                width: `${100 + i * 30}px`,
                height: `${100 + i * 30}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5 + i * 0.2],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Text Fragmentation Effect
const FragmentText = ({ text, isVisible }: { text: string, isVisible: boolean }) => {
  return (
    <motion.div className="flex flex-wrap justify-center">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, y: 0, scale: 1, rotate: 0, skew: 0 }}
          animate={isVisible ? {
            opacity: [1, 0],
            y: (Math.random() - 0.5) * 100,
            x: (Math.random() - 0.5) * 100,
            rotate: Math.random() * 360 - 180,
            scale: [1, 0],
            skew: Math.random() * 20 - 10
          } : {}}
          transition={{ duration: 1, delay: i * 0.03 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; color: string; velocity: { x: number; y: number } }[] = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
        velocity: {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3
        }
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    animate()

    return () => cancelAnimationFrame(animate as unknown as number)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [outfit, setOutfit] = useState<{ image: string, description: string } | null>(null)
  const [wardrobe, setWardrobe] = useState<{ image: string, description: string }[]>([])
  const [activeTab, setActiveTab] = useState<'generate' | 'wardrobe'>('generate')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleEnter = () => {
    setShowTransition(true)
    setTimeout(() => {
      setShowInput(true)
      setShowTransition(false)
    }, 3500)
  }


  const generateOutfit = async () => {
    if (!selectedFile) {
      setError("请选择一张图片");
      return;
    }

    setIsLoading(true);
    setError(null);

    const gender = (document.getElementById('gender') as HTMLSelectElement)?.value || 'male';
    const occasion = (document.getElementById('occasion') as HTMLSelectElement)?.value || 'casual';
    const birthday = (document.getElementById('birthday') as HTMLInputElement)?.value || '1990-01-01';
    const style = (document.getElementById('style') as HTMLInputElement)?.value || '';

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('gender', gender);
    formData.append('occasion', occasion);
    formData.append('birthday', birthday);
    formData.append('style', style);

    try {
      console.log('Sending request to generate image...');
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Received data:', data);
        const newOutfit = {
          image: data.imageUrl,
          description: "AI生成的穿搭方案"
        };
        setOutfit(newOutfit);
        setWardrobe(prev => [...prev, newOutfit]);
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setError(`生成图像失败，请重试。错误: ${errorText}`);
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setError(`发生错误，请重试。错误: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wKaHMMkqTAW8YaT1VN23AA.jpg-58Okof68fkSoNl7XEEyKT0T7hHasMM.jpeg"
          alt="STYLY Background"
          fill
          className="object-cover md:object-cover"
          priority
        />
      </div>

      {/* Particles Effect */}
      <Particles />

      {/* Animated Content */}
      <AnimatePresence>
        {!showInput && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-6xl font-bold mb-8 mt-16 text-center tracking-widest"
            >
              <FragmentText text="STYLY" isVisible={showTransition} />
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isLoaded ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="w-full max-w-md h-1 mb-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-2xl text-center text-sm md:text-base text-white leading-relaxed whitespace-pre-wrap tracking-wide mt-32"
            >
              <FragmentText 
                text={`EXPLORE THE OUTFIT THAT TRULY MATCHES YOUR INNER SELF.
EVERY PERSON'S EXPRESSION OF STYLE IS PURE.
THE MODERN WORLD IS CONTINUOUSLY SHAPING OUR IMAGE.`}
                isVisible={showTransition}
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="mt-8"
            >
              <Button
                onClick={handleEnter}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30 text-base px-6 py-2 rounded-full shadow-lg"
              >
                ENTER <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Transition Effect */}
      <ShirtTransition isVisible={showTransition} />

      {/* Input Interface */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex h-screen bg-white"
          >
            {/* Menu Button */}
            <motion.div
              className="fixed left-4 bottom-4 z-50"
              initial={false}
              animate={isMenuOpen ? { rotate: 45 } : { rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={toggleMenu}
                className="w-12 h-12 rounded-full bg-black text-white hover:bg-gray-800 active:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md transform hover:scale-105 active:scale-95"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </Button>
            </motion.div>

            {/* Left Side Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 bottom-20 z-40 bg-white/10 backdrop-blur-md p-6 rounded-r-lg shadow-lg"
                >
                  <div className="flex flex-col space-y-4">
                    <Button
                      onClick={() => {
                        setShowInput(false)
                        setIsMenuOpen(false)
                      }}
                      className="flex items-center space-x-2 w-full justify-start bg-white/20 text-black hover:bg-white/30"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>返回</span>
                    </Button>
                    <Button
                      onClick={() => {
                        setActiveTab('generate')
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center space-x-2 w-full justify-start ${
                        activeTab === 'generate' ? 'bg-black text-white' : 'bg-white/20 text-black hover:bg-white/30'
                      }`}
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>生成穿搭</span>
                    </Button>
                    <Button
                      onClick={() => {
                        setActiveTab('wardrobe')
                        setIsMenuOpen(false)
                      }}
                      className={`flex items-center space-x-2 w-full justify-start ${
                        activeTab === 'wardrobe' ? 'bg-black text-white' : 'bg-white/20 text-black hover:bg-white/30'
                      }`}
                    >
                      <Shirt className="w-5 h-5" />
                      <span>智能衣柜</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab === 'generate' && (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-3xl"
                  >
                    <Card className="bg-white shadow-xl">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800">AI时尚穿搭助手</CardTitle>
                        <CardDescription className="text-gray-600">上传你的单品照片，我们会为你生成完美穿搭</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="picture" className="text-sm font-medium text-gray-700">上传单品照片</Label>
                              <Input id="picture" type="file" onChange={handleFileChange} className="bg-gray-50 text-gray-900" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="style" className="text-sm font-medium text-gray-700">风格偏好</Label>
                              <Input id="style" type="text" placeholder="描述你的风格偏好" className="bg-gray-50 text-gray-900" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="occasion" className="text-sm font-medium text-gray-700">场合</Label>
                              <Select>
                                <SelectTrigger id="occasion" className="bg-gray-50 text-gray-900">
                                  <SelectValue placeholder="选择场合" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="casual">日常休闲</SelectItem>
                                  <SelectItem value="work">工作场合</SelectItem>
                                  <SelectItem value="party">派对聚会</SelectItem>
                                  <SelectItem value="date">约会</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="birthday" className="text-sm font-medium text-gray-700">生日</Label>
                              <Input type="date" id="birthday" placeholder="选择你的生日" className="bg-gray-50 text-gray-900" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="gender" className="text-sm font-medium text-gray-700">性别</Label>
                              <Select>
                                <SelectTrigger id="gender" className="bg-gray-50 text-gray-900">
                                  <SelectValue placeholder="选择性别" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="male">男性</SelectItem>
                                  <SelectItem value="female">女性</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button 
                              onClick={generateOutfit} 
                              className="w-full bg-black hover:bg-gray-800 text-white"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <span className="mr-2">生成中...</span>
                                  <span className="animate-spin">⏳</span>
                                </>
                              ) : (
                                <>
                                  <Sparkles className="mr-2 h-4 w-4" /> 生成穿搭方案
                                </>
                              )}
                            </Button>
                            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
                          </div>
                          {outfit && (
                            <Card className="bg-gray-50">
                              <CardHeader>
                                <CardTitle className="text-xl font-semibold text-gray-800">你的专属穿搭方案</CardTitle>
                              </CardHeader>
                              <CardContent className="flex flex-col items-center">
                                <Image
                                  src={outfit.image}
                                  alt="AI生成的穿搭方案"
                                  width={300}
                                  height={400}
                                  className="rounded-lg shadow-md mb-4"
                                />
                                <p className="text-center text-sm text-gray-600">{outfit.description}</p>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
                {activeTab === 'wardrobe' && (
                  <motion.div
                    key="wardrobe"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-4xl"
                  >
                    <Card className="bg-white shadow-xl">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800">智能衣柜</CardTitle>
                        <CardDescription className="text-gray-600">查看和管理你的衣物和穿搭方案</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {wardrobe.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Card className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                                <CardContent className="p-4">
                                  <Image
                                    src={item.image}
                                    alt={`穿搭方案 ${index + 1}`}
                                    width={150}
                                    height={200}
                                    className="rounded-lg shadow-md mb-2 mx-auto"
                                  />
                                  <p className="text-center text-sm text-gray-700">{item.description}</p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}