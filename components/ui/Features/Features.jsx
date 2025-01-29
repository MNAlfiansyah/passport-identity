import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"
import { motion } from "framer-motion"
import Image from 'next/image'

const Features = () => {

    const teamMembers = [
        {
            discordTag: "jimii.nft",
            twitterTag: "@Jimidesuuu",
            twitterUrl: "https://x.com/Jimidesuuu",
            role: "Founder",
            useTwitterAvatar: true
        },
        {
            discordTag: "0x1ndigo",
            twitterTag: "@0x1ndigo",
            twitterUrl: "https://x.com/0x1ndigo",
            role: "Marketer",
            useTwitterAvatar: true
        },
        {
            discordTag: "topahadzi",
            twitterTag: "@topahadzi",
            twitterUrl: "https://x.com/topahadzi",
            role: "Developer",
            useTwitterAvatar: false,
            customImage: "/images/shiba.gif"
        },
        {
            discordTag: "dolpin7",
            twitterTag: "@dolpandolpin",
            twitterUrl: "https://twitter.com/dolpandolpin",
            role: "Developer",
            useTwitterAvatar: true
        }
    ];

    return (
        <SectionWrapper>
            <div id="credits" className="custom-screen text-gray-300">
                
                <LayoutEffect
                    className="duration-1000 delay-700"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="">
                        <h2 className="text-3xl font-bold sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            Credits
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative p-6 rounded-xl border border-gray-800/50 backdrop-blur-sm"
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
                                    style={{
                                        background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                    }}
                                >
                                    <div className="flex flex-col space-y-4">
                                        <div className="w-20 h-20 mx-auto ring-2 ring-offset-2 ring-blue-500/50 ring-offset-gray-900 rounded-full">
                                            {member.useTwitterAvatar ? (
                                                <img 
                                                    src={`https://unavatar.io/x/${member.twitterTag.replace('@', '')}`}
                                                    alt={`${member.twitterTag} avatar`}
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            ) : (
                                                <Image 
                                                    src={member.customImage}
                                                    alt={`${member.twitterTag} avatar`}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-50 font-bold text-lg">
                                                {member.discordTag}
                                            </p>
                                            <p className="text-gray-400">
                                                {member.twitterTag}
                                            </p>
                                            <p className="text-blue-400 text-sm font-medium mt-1">
                                                {member.role}
                                            </p>
                                        </div>
                                        <a
                                            href={member.twitterUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-500/25"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                            Follow on X
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Features