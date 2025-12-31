import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2, RefreshCw } from "lucide-react";

interface SettingsPageProps {
  onResetProgress: () => void;
}

export function SettingsPage({ onResetProgress }: SettingsPageProps) {
  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8 text-gray-800">Tetapan</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-xl mb-4">Tetapan Umum</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium">Versi Aplikasi</h3>
                <p className="text-sm text-gray-600">v2.0.0</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium">Jumlah Perkataan</h3>
                <p className="text-sm text-gray-600">60 perkataan (20 setiap dialek)</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium">Jumlah Soalan Kuiz</h3>
                <p className="text-sm text-gray-600">75 soalan</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-red-200">
          <h2 className="text-xl mb-4 text-red-700">Zon Bahaya</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-medium">Reset Semua Progres</h3>
                <p className="text-sm text-gray-600">
                  Tindakan ini akan membuang semua progres pembelajaran dan kuiz anda
                </p>
              </div>
              <Button
                onClick={onResetProgress}
                variant="destructive"
                className="ml-4"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 mt-6 bg-teal-50 border-teal-200">
          <h2 className="text-xl mb-4 text-teal-700">Tentang Aplikasi</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Aplikasi Dialek Pantai Timur</strong> bertujuan memelihara dan
              mempopularkan warisan linguistik Melayu dari negeri Kelantan, Terengganu
              dan Pahang.
            </p>
            <p className="mt-4">
              Aplikasi ini menyediakan:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>60 perkataan autentik dengan sebutan IPA</li>
              <li>75 soalan kuiz interaktif</li>
              <li>Alat perbandingan dialek</li>
              <li>Sistem gamifikasi dan progress tracker</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
