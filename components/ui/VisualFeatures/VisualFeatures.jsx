"use client"

import { motion, AnimatePresence } from "framer-motion"
import html2canvas from 'html2canvas'
import { useState } from "react"
import Image from 'next/image'
import localFont from '@next/font/local'

const brigends = localFont({ src: '../../../public/fonts/Akira-Expanded.otf',  display: 'swap',
    variable: '--font-custom' })

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;
      
        return (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={onClose}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative transform scale-2000"
                onClick={e => e.stopPropagation()}
              >
                {children}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        );
      };
      
      const PassportCard = ({ template, config, data, onClick }) => {
        return (
          <motion.div 
            id="passport-card"
            className="relative w-[564.5px] h-[300px] cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            onClick={onClick}
          >
            <img 
              src={template}
              alt="Card Background"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0">
              <div className={`absolute ${config.photoSize} ${config.photoPosition}`}>
                <img 
                  src={`https://unavatar.io/x/${data.xTag.replace('@', '')}`}
                  alt="Profile Picture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-mono text-white">
                <p className={`absolute whitespace-nowrap ${brigends.className}`} style={config.name}>
                  <span className="ml-8"><b>{data.name}</b></span>
                </p>
                <p className="absolute whitespace-nowrap" style={{
                  ...config.xTag,
                  fontFamily: brigends.style.fontFamily,
                }}>
                  <span className="ml-8">{data.xTag}</span>
                </p>
                <p className="absolute whitespace-nowrap" style={{
                  ...config.discord,
                  fontFamily: brigends.style.fontFamily,
                }}>
                  <span className="ml-8">{data.discordTag}</span>
                </p>
              </div>
              <p 
                className="absolute text-white text-center uppercase w-full"
                style={{
                  ...config.status,
                  fontFamily: brigends.style.fontFamily,
                }}
              >
                {data.status || "Everything happens for a reason"}
              </p>
            </div>
          </motion.div>
        );
      };

const VisualFeatures = () => {
    const [passportData, setPassportData] = useState({
        name: '',
        xTag: '',
        discordTag: '',
        status: ''
    });

    const [selectedTemplate, setSelectedTemplate] = useState('template1');

    const templateConfigs = {
        template1: {
            name: { top: '31%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            xTag: { top: '42.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            discord: { top: '51.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            status: { bottom: '17%', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '0.1em' },
            photoSize: 'w-32 h-32',
            photoPosition: 'left-[11.5%] top-[23.1%]'
        },
        template2: {
            name: { top: '31%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            xTag: { top: '42.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            discord: { top: '51.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            status: { bottom: '17%', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '0.1em' },
            photoSize: 'w-32 h-32',
            photoPosition: 'left-[11.5%] top-[23.1%]'
        },
        template3: {    
            name: { top: '31%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            xTag: { top: '42.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            discord: { top: '51.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            status: { bottom: '17%', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '0.1em' },
            photoSize: 'w-32 h-32',
            photoPosition: 'left-[11.5%] top-[23.1%]'
        },
        template4: {
            name: { top: '31%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            xTag: { top: '42.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            discord: { top: '51.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            status: { bottom: '17%', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '0.1em' },
            photoSize: 'w-32 h-32',
            photoPosition: 'left-[11.5%] top-[23.1%]'
        },
        template5: {
            name: { top: '31%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            xTag: { top: '42.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            discord: { top: '51.5%', left: '60%', fontSize: '11px', letterSpacing: '0.05em' },
            status: { bottom: '17%', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', letterSpacing: '0.1em' },
            photoSize: 'w-32 h-32',
            photoPosition: 'left-[11.5%] top-[23.1%]'
        },
    };

    const templates = {
        template1: 'https://bosu-identity.netlify.app/templates/template1.png',
        template2: 'https://bosu-identity.netlify.app/templates/template2.png',
        template3: 'https://bosu-identity.netlify.app/templates/template3.png',
        template4: 'https://bosu-identity.netlify.app/templates/template4.png',
        template5: 'https://bosu-identity.netlify.app/templates/template5.png'
    };


    const handleInputChange = (e) => {
        setPassportData({
            ...passportData,
            [e.target.name]: e.target.value
        });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleCardClick = () => {
        setIsModalOpen(true);
      };

    const handleDownload = async () => {
        // Add validation check
        if (!passportData.name || !passportData.xTag || !passportData.discordTag) {
            alert('Please fill in all required fields (Name, X Tag, and Discord Tag)');
            return;
        }

        const element = document.querySelector("#passport-card");
        
        try {
            // Temporarily remove hover effects and animations
            element.style.transform = 'none';
            
            const canvas = await html2canvas(element, {
                useCORS: true,
                scale: window.devicePixelRatio,
                backgroundColor: null,
                allowTaint: true,
                width: 564.5,
                height: 300,
                imageTimeout: 15000,
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.querySelector("#passport-card");
                    if (clonedElement) {
                        clonedElement.style.transform = 'none';
                        clonedElement.style.transition = 'none';
                        
                        // Adjust background image
                        const bgImage = clonedElement.querySelector('img');
                        if (bgImage) {
                            bgImage.style.objectFit = 'contain';
                            bgImage.style.width = '100%';
                            bgImage.style.height = '100%';
                        }

                        // Adjust text positions for capture
                        const nameText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].name.top}"]`);
                        const xTagText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].xTag.top}"]`);
                        const discordText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].discord.top}"]`);
                        const statusText = clonedElement.querySelector(`p[style*="bottom"]`);

                        if (nameText) nameText.style.top = `calc(${templateConfigs[selectedTemplate].name.top} - 2%)`;
                        if (xTagText) xTagText.style.top = `calc(${templateConfigs[selectedTemplate].xTag.top} - 2%)`;
                        if (discordText) discordText.style.top = `calc(${templateConfigs[selectedTemplate].discord.top} - 2%)`;
                        if (statusText) statusText.style.bottom = `calc(${templateConfigs[selectedTemplate].status.bottom} + 2%)`;
                    }
                }
            });

            const link = document.createElement('a');
            link.download = `bosu-passport-${passportData.name || 'user'}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Restore the original transform
            element.style.transform = '';
        } catch (error) {
            console.error('Error generating passport:', error);
            alert('There was an error generating your passport. Please try again.');
        }
    };

    const handleShare = async () => {
        // Validate required fields
        if (!passportData.name || !passportData.xTag || !passportData.discordTag) {
            alert('Please fill in all required fields (Name, X Tag, and Discord Tag)');
            return;
        }

        try {
            const element = document.querySelector("#passport-card");
            
            // Temporarily remove hover effects and animations
            element.style.transform = 'none';
            
            const canvas = await html2canvas(element, {
                useCORS: true,
                scale: window.devicePixelRatio,
                backgroundColor: null,
                allowTaint: true,
                width: 564.5,
                height: 300,
                imageTimeout: 15000,
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.querySelector("#passport-card");
                    if (clonedElement) {
                        clonedElement.style.transform = 'none';
                        clonedElement.style.transition = 'none';
                        
                        // Adjust background image
                        const bgImage = clonedElement.querySelector('img');
                        if (bgImage) {
                            bgImage.style.objectFit = 'contain';
                            bgImage.style.width = '100%';
                            bgImage.style.height = '100%';
                        }

                        // Adjust text positions for capture
                        const nameText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].name.top}"]`);
                        const xTagText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].xTag.top}"]`);
                        const discordText = clonedElement.querySelector(`p[style*="${templateConfigs[selectedTemplate].discord.top}"]`);
                        const statusText = clonedElement.querySelector(`p[style*="bottom"]`);

                        if (nameText) nameText.style.top = `calc(${templateConfigs[selectedTemplate].name.top} - 2%)`;
                        if (xTagText) xTagText.style.top = `calc(${templateConfigs[selectedTemplate].xTag.top} - 2%)`;
                        if (discordText) discordText.style.top = `calc(${templateConfigs[selectedTemplate].discord.top} - 2%)`;
                        if (statusText) statusText.style.bottom = `calc(${templateConfigs[selectedTemplate].status.bottom} + 2%)`;
                    }
                }
            });

            // Get the image as a blob
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png', 1.0));
            
            // Create object URL for the blob
            const imageUrl = URL.createObjectURL(blob);

            // Download the image first
            const link = document.createElement('a');
            link.download = `bosu-passport-${passportData.name || 'user'}.png`;
            link.href = imageUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Construct tweet text
            const text = `Check out my Bosu Identity Passport!\n\nName: ${passportData.name}\nX: ${passportData.xTag}\nDiscord: ${passportData.discordTag}\n\n @finalbosuX #BOSUIDENTITY #AGAINSTALLODDS\n`;
            const url = window.location.href;
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

            // Show instructions to user
            alert('Your passport has been downloaded. Please attach it manually to your tweet when the Twitter window opens.');
            
            // Open Twitter in new window
            window.open(twitterUrl, '_blank');

            // Cleanup
            URL.revokeObjectURL(imageUrl);
            element.style.transform = '';
        } catch (error) {
            console.error('Error generating passport for sharing:', error);
            alert('There was an error generating your passport. Please try again.');
        }
    };

    return (
        <div className="custom-screen text-gray-300">
           <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Bosu Identity
                </h2>
                
                <div className="space-y-6 leading-relaxed">
                    <motion.p 
                        className="text-lg sm:text-xl text-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Connect with passionate individuals in the FinalBosu community through your unique digital identity. Express yourself, showcase your personality, and become part of something extraordinary.
                    </motion.p>

                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 text-sm sm:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                            Express Yourself
                        </span>
                        <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                            Build Connections
                        </span>
                        <span className="px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20">
                            Join the Community
                        </span>
                    </motion.div>

                    <motion.p 
                        className="text-lg font-semibold text-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        #AgainstAllOdds
                    </motion.p>
                </div>
            </div>
            <div id="passport-generator" className="mt-12 pt-2">
                <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                    {/* Input Form */}
                    <li className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                        style={{
                            background: "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"
                        }}
                    >
                        <div className="p-8">
                            <h3 className="text-gray-50 text-xl font-semibold mb-6">
                                Enter Your Details
                            </h3>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name *"
                                    value={passportData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
                                />
                                <input 
                                    type="text" 
                                    name="xTag"
                                    placeholder="X Tag *"
                                    value={passportData.xTag}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
                                />
                                <input 
                                    type="text" 
                                    name="discordTag"
                                    placeholder="Discord Tag *"
                                    value={passportData.discordTag}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
                                />
                                <input 
                                    type="text" 
                                    name="status"
                                    placeholder="Mantra"
                                    value={passportData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
                                />
                              
                                <select
                                    value={selectedTemplate}
                                    onChange={(e) => setSelectedTemplate(e.target.value)}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500"
                                >
                                    <option value="template1">Template 1</option>
                                    <option value="template2">Template 2</option>
                                    <option value="template3">Template 3</option>
                                    <option value="template4">Template 4</option>
                                    <option value="template5">Template 5</option>
                                </select>
                                <div className="flex gap-2">
                                    <button 
                                        type="button"
                                        onClick={handleDownload}
                                        className="flex-1 px-4 py-2 bg-[#fbf002] text-black rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Download Passport
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={handleShare}
                                        className="px-4 py-2 bg-[#e11749] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                                    >
                                        Share on X
                                    </button>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* Passport Card */}
                   

                    <div className="flex items-center justify-center">
                        <PassportCard
                        template={templates[selectedTemplate]}
                        config={templateConfigs[selectedTemplate]}
                        data={passportData}
                        onClick={handleCardClick}
                        />
                    </div>

                    {/* Modal */}
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <PassportCard
                            template={templates[selectedTemplate]}
                            config={templateConfigs[selectedTemplate]}
                            data={passportData}
                            onClick={() => setIsModalOpen(false)}
                        />
                    </Modal>
                </ul>
            </div>
        </div>
    )
}

export default VisualFeatures