import Image from "next/image"

const Brand = ({ ...props }) => (
    <img
        src="https://bosu-identity.netlify.app/logo_fb.png"
        alt="Bosu Identity logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand