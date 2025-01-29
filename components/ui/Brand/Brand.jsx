import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/logo_fb.png"
        alt="Mailgo logo"
        {...props}
        width={110}
        height={50}
        priority
    />
)
export default Brand