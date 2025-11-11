import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ArrowLeft, Search, Volume2, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { 
  kelantanPhrases, 
  terengganuPhrases, 
  pahangPhrases 
} from "../data/dialectData";

interface ComparisonData {
  standard: string;
  kelantan: string;
  terengganu: string;
  pahang: string;
  category: string;
}

interface ComparisonToolProps {
  onBack: () => void;
}

export function ComparisonTool({ onBack }: ComparisonToolProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Generate comparison data dari dialectData.ts
  // Kita ambil perkataan yang sama standard word dari 3 negeri
  const generateComparisonData = (): ComparisonData[] => {
    const comparisonMap = new Map<string, ComparisonData>();

    // Process Kelantan data
    kelantanPhrases.forEach(phrase => {
      if (!comparisonMap.has(phrase.standard)) {
        comparisonMap.set(phrase.standard, {
          standard: phrase.standard,
          kelantan: phrase.dialect,
          terengganu: "-",
          pahang: "-",
          category: phrase.category,
        });
      } else {
        const existing = comparisonMap.get(phrase.standard)!;
        existing.kelantan = phrase.dialect;
      }
    });

    // Process Terengganu data
    terengganuPhrases.forEach(phrase => {
      if (!comparisonMap.has(phrase.standard)) {
        comparisonMap.set(phrase.standard, {
          standard: phrase.standard,
          kelantan: "-",
          terengganu: phrase.dialect,
          pahang: "-",
          category: phrase.category,
        });
      } else {
        const existing = comparisonMap.get(phrase.standard)!;
        existing.terengganu = phrase.dialect;
      }
    });

    // Process Pahang data
    pahangPhrases.forEach(phrase => {
      if (!comparisonMap.has(phrase.standard)) {
        comparisonMap.set(phrase.standard, {
          standard: phrase.standard,
          kelantan: "-",
          terengganu: "-",
          pahang: phrase.dialect,
          category: phrase.category,
        });
      } else {
        const existing = comparisonMap.get(phrase.standard)!;
        existing.pahang = phrase.dialect;
      }
    });

    return Array.from(comparisonMap.values());
  };

  const comparisonData = generateComparisonData();

  const filteredData = comparisonData.filter(
    (item) =>
      item.standard.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kelantan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.terengganu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pahang.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(comparisonData.map((item) => item.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
          <h1 className="text-3xl mb-2">Alat Perbandingan Dialek</h1>
          <p className="text-white/90">
            Bandingkan perkataan dalam dialek Kelantan, Terengganu, Pahang dengan Bahasa Melayu standard
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <Card className="p-6 mb-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Cari perkataan dalam mana-mana dialek atau Bahasa Melayu standard..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border-gray-300"
            />
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Badge
            variant={searchTerm === "" ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setSearchTerm("")}
          >
            Semua
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer whitespace-nowrap hover:bg-gray-100"
              onClick={() => setSearchTerm(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Kelantan</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600" />
            </div>
            <p className="text-sm text-gray-700">
              Ciri khas: 'Tae', 'Nok', 'Gapo', 'Demo'
            </p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Terengganu</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600" />
            </div>
            <p className="text-sm text-gray-700">
              Ciri khas: 'Bakpe', 'Ganung', 'Mung'
            </p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Pahang</h3>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600" />
            </div>
            <p className="text-sm text-gray-700">
              Ciri khas: 'Hang', 'Doh', 'Mano'
            </p>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="bg-white/80 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-orange-100 to-yellow-100">
                  <TableHead className="w-[150px]">Bahasa Standard</TableHead>
                  <TableHead className="bg-red-50">Kelantan</TableHead>
                  <TableHead className="bg-blue-50">Terengganu</TableHead>
                  <TableHead className="bg-green-50">Pahang</TableHead>
                  <TableHead className="w-[120px]">Kategori</TableHead>
                  <TableHead className="w-[80px]">Audio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-orange-50/50">
                    <TableCell>{item.standard}</TableCell>
                    <TableCell className="bg-red-50/30">
                      {item.kelantan}
                    </TableCell>
                    <TableCell className="bg-blue-50/30">
                      {item.terengganu}
                    </TableCell>
                    <TableCell className="bg-green-50/30">
                      {item.pahang}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tiada hasil carian. Cuba cari dengan kata kunci lain.</p>
          </div>
        )}

        {/* Legend */}
        <Card className="mt-6 p-6 bg-white/80">
          <h3 className="mb-4">Panduan Penggunaan</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Gunakan kotak carian untuk mencari perkataan tertentu</p>
            <p>• Klik pada kategori untuk menapis berdasarkan jenis kata</p>
            <p>• Klik ikon audio untuk mendengar sebutan (simulasi)</p>
            <p>• Jadual menunjukkan perbandingan perkataan merentasi ketiga-tiga dialek</p>
          </div>
        </Card>
      </div>
    </div>
  );
}