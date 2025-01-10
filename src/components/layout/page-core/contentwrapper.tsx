type ContentWrapperProps = {
    children: React.ReactNode,
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props

    return (
        <div className="container flex flex-col w-full max-w-7xl px-2 sm:px-4 justify-center">
            {children}
        </div>
    )
}

export default ContentWrapper