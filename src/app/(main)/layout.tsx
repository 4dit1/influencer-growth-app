import { Navigation } from "@/components/layout/Navigation";
import { Header } from "@/components/layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-background">
            <Navigation />
            <div className="flex-1 md:pl-64 flex flex-col min-h-screen pb-20 md:pb-0 transition-all duration-300">
                <Header />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto w-full max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
