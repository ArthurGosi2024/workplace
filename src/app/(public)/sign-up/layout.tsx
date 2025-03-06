export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="flex justify-center items-center p-14">
        h-full
        {children}
    </div>
}