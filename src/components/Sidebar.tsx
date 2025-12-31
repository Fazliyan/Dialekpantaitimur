import { Home, BookOpen, Trophy, BookText, Settings } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const menuItems = [
    {
      id: "home",
      label: "Utama",
      icon: Home,
    },
    {
      id: "learn",
      label: "Belajar",
      icon: BookOpen,
    },
    {
      id: "quiz",
      label: "Kuiz",
      icon: Trophy,
    },
    {
      id: "padanan_kata",
      label: "Padanan Kata",
      icon: BookText,
    },
    {
      id: "settings",
      label: "Tetapan",
      icon: Settings,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl text-teal-600">Suara Timur</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id || 
                           (item.id === "learn" && (currentView.includes("learn-") || currentView.includes("learning-"))) ||
                           (item.id === "quiz" && currentView.includes("quiz-")) ||
                           (item.id === "padanan_kata" && currentView.includes("padanan-kata"));
            
            return (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    isActive
                      ? "bg-teal-50 text-teal-600 hover:bg-teal-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer - Optional */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Aplikasi Dialek Pantai Timur
        </p>
      </div>
    </div>
  );
}