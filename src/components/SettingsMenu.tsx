import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { ArrowLeft, Trash2, Download, Upload, Database, Info } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { exportUserData, importUserData, resetUserProgress } from "../utils/storage";

interface SettingsMenuProps {
  onBack: () => void;
  onDataReset: () => void;
}

export function SettingsMenu({ onBack, onDataReset }: SettingsMenuProps) {
  const handleExport = () => {
    const data = exportUserData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dialek-pantai-timur-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success("Data berjaya dieksport!", {
      description: "Fail JSON telah dimuat turun ke komputer anda.",
    });
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const jsonData = event.target?.result as string;
          const success = importUserData(jsonData);
          if (success) {
            toast.success("Data berjaya diimport!", {
              description: "Sila refresh halaman untuk melihat perubahan.",
            });
            setTimeout(() => window.location.reload(), 2000);
          } else {
            toast.error("Ralat mengimport data", {
              description: "Pastikan fail JSON adalah dalam format yang betul.",
            });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleReset = () => {
    resetUserProgress();
    onDataReset();
    toast.success("Data telah direset", {
      description: "Semua progres telah dipadam.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-3xl mb-2">Tetapan & Pengurusan Data</h1>
          <p className="text-white/90">
            Urus data pembelajaran dan tetapan aplikasi anda
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Data Storage Info */}
        <Card className="p-6 mb-6 bg-white/80 backdrop-blur-sm border-blue-200">
          <div className="flex items-start gap-4">
            <Database className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl mb-2">Maklumat Penyimpanan Data</h2>
              <p className="text-sm text-gray-700 mb-3">
                Aplikasi ini menggunakan <strong>localStorage</strong> pelayar untuk menyimpan
                progres pembelajaran anda secara tempatan. Data anda:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3 list-disc list-inside">
                <li>Disimpan di pelayar web pada peranti ini sahaja</li>
                <li>Tidak dihantar ke server atau cloud</li>
                <li>Akan kekal selagi anda tidak clear cache pelayar</li>
                <li>Boleh diexport untuk backup manual</li>
              </ul>
              <Badge variant="outline" className="bg-blue-50">
                💾 Data disimpan secara lokal
              </Badge>
            </div>
          </div>
        </Card>

        {/* Data Management */}
        <Card className="p-6 mb-6 bg-white/80 backdrop-blur-sm">
          <h2 className="text-xl mb-4">Pengurusan Data</h2>
          
          <div className="space-y-4">
            {/* Export Data */}
            <div className="flex items-center justify-between p-4 border-2 border-green-200 rounded-lg bg-green-50">
              <div>
                <h3>Export Data</h3>
                <p className="text-sm text-gray-600">
                  Muat turun data pembelajaran anda dalam format JSON
                </p>
              </div>
              <Button
                onClick={handleExport}
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-100"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Import Data */}
            <div className="flex items-center justify-between p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
              <div>
                <h3>Import Data</h3>
                <p className="text-sm text-gray-600">
                  Muat naik fail backup untuk restore data anda
                </p>
              </div>
              <Button
                onClick={handleImport}
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-100"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>

            {/* Reset Data */}
            <div className="flex items-center justify-between p-4 border-2 border-red-200 rounded-lg bg-red-50">
              <div>
                <h3>Reset Semua Data</h3>
                <p className="text-sm text-gray-600">
                  Padam semua progres dan mulakan semula dari awal
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Adakah anda pasti?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tindakan ini tidak boleh dibatalkan. Ini akan memadam semua progres
                      pembelajaran, skor kuiz, dan pencapaian anda secara kekal.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleReset}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Ya, Reset Semua
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="mt-6 p-6 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg mb-2">Maklumat Penting</h3>
              <p className="text-sm text-white/90 mb-3">
                Aplikasi ini dibangunkan untuk memelihara warisan linguistik Pantai Timur Malaysia.
                Untuk pengalaman terbaik:
              </p>
              <ul className="text-sm text-white/90 space-y-1 list-disc list-inside">
                <li>Export data anda secara berkala untuk backup</li>
                <li>Jangan clear cache pelayar jika mahu simpan data</li>
                <li>Gunakan headphone untuk pengalaman audio yang lebih baik</li>
                <li>Amalkan pembelajaran secara konsisten untuk hasil terbaik</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}