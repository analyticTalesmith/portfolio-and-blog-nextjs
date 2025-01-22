type GradientHeadingProps = {
    children: React.ReactNode
}

const GradientHeading: React.FC<GradientHeadingProps> = ({children}) => (
    <h2 className="max-w-sm bg-gradient-to-br from-secondary-vibrant via-tertiary-vibrant to-secondary-vibrant bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-7xl sm:text-5xl">
        {children}
    </h2>
)

export default GradientHeading