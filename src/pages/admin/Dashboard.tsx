import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Mail, Phone, User, Trash2, Eye, Download } from 'lucide-react';

// Mock data - In production, this would come from an API
const mockContacts = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    phone: '+90 532 123 4567',
    message: 'Panjur sistemleri hakkında bilgi almak istiyorum.',
    subject: 'Ürün Bilgisi',
    status: 'new',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    email: 'ayse@example.com',
    phone: '+90 533 234 5678',
    message: 'Pergola fiyatlarınız hakkında bilgi alabilir miyim?',
    subject: 'Fiyat Bilgisi',
    status: 'read',
    createdAt: '2024-01-14T14:20:00Z',
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    phone: '+90 534 345 6789',
    message: 'Otomatik kapı montajı yapıyor musunuz?',
    subject: 'Montaj Hizmeti',
    status: 'replied',
    createdAt: '2024-01-13T09:15:00Z',
  },
];

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [contacts, setContacts] = useState(mockContacts);
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredContacts = contacts.filter((contact) => {
    if (selectedTab === 'all') return true;
    return contact.status === selectedTab;
  });

  const stats = {
    total: contacts.length,
    new: contacts.filter((c) => c.status === 'new').length,
    read: contacts.filter((c) => c.status === 'read').length,
    replied: contacts.filter((c) => c.status === 'replied').length,
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
      setContacts(contacts.filter((c) => c.id !== id));
    }
  };

  const handleMarkAsRead = (id: number) => {
    setContacts(
      contacts.map((c) => (c.id === id ? { ...c, status: 'read' as const } : c))
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="destructive">Yeni</Badge>;
      case 'read':
        return <Badge variant="secondary">Okundu</Badge>;
      case 'replied':
        return <Badge variant="default">Yanıtlandı</Badge>;
      default:
        return <Badge>Bilinmiyor</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Toz Yapı Yönetim Paneli</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Rapor İndir
              </Button>
              <Button>Yeni Ekle</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yeni</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.new}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Okundu</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.read}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yanıtlandı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.replied}</div>
            </CardContent>
          </Card>
        </div>

        {/* Contacts Table */}
        <Card>
          <CardHeader>
            <CardTitle>İletişim Formu Mesajları</CardTitle>
            <CardDescription>Tüm iletişim formu submissionslarını görüntüleyin</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">Tümü ({stats.total})</TabsTrigger>
                <TabsTrigger value="new">Yeni ({stats.new})</TabsTrigger>
                <TabsTrigger value="read">Okundu ({stats.read})</TabsTrigger>
                <TabsTrigger value="replied">Yanıtlandı ({stats.replied})</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedTab}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Durum</TableHead>
                      <TableHead>İsim</TableHead>
                      <TableHead>E-posta</TableHead>
                      <TableHead>Telefon</TableHead>
                      <TableHead>Konu</TableHead>
                      <TableHead>Tarih</TableHead>
                      <TableHead className="text-right">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell>{getStatusBadge(contact.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            {contact.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            {contact.email}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            {contact.phone}
                          </div>
                        </TableCell>
                        <TableCell>{contact.subject}</TableCell>
                        <TableCell>
                          {new Date(contact.createdAt).toLocaleDateString('tr-TR')}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleMarkAsRead(contact.id)}>
                                <Eye className="w-4 h-4 mr-2" />
                                Okundu İşaretle
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Mail className="w-4 h-4 mr-2" />
                                Yanıtla
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDelete(contact.id)}
                                className="text-red-600"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Sil
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
