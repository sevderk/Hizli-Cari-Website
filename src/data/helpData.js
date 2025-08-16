import {
  UserRoundPlus,
  ReceiptText,
  Trash2,
  TurkishLira,
  BarChart3,
  CloudUpload
} from "lucide-react";

export default [
  {
    icon: UserRoundPlus,
    question: 'Cari kaydı nasıl eklenir?',
    answer:
      "Ana ekran > Cari Listesi > + Cari Ekle butonuna dokunun. Ad, telefon ve zorunlu alanları doldurup kaydedin."
  },
  {
    icon: ReceiptText,
    question: 'Masraf kaydı nasıl eklenir?',
    answer:
      "Ana ekran > Masraflar > + Masraf Ekle butonuna dokunun. Masraf türü, tutar ve açıklamayı girip kaydedin."
  },
  {
    icon: Trash2,
    question: 'Cari hareket nasıl silinir?',
    answer:
      "Ana ekran > Hareket Listesi'ne girin. Silmek istediğiniz hareketin üzerine dokunarak detayını açın, ardından Sil seçeneğini kullanın."
  },
  {
    icon: TurkishLira,
    question: 'Para birimi nasıl değiştirilir?',
    answer:
      "Ana ekran > Ayarlar > Para Birimi'ne girin. Listeden kullanmak istediğiniz para birimini (örneğin Türk Lirası) seçerek onaylayın."
  },
  {
    icon: BarChart3,
    question: 'Raporlar nasıl görüntülenir?',
    answer:
      "Ana ekran > Raporlar'a girin. Buradan görüntülemek istediğiniz rapor tipini açarak tarih aralığı seçip raporları inceleyin."
  },
  {
    icon: CloudUpload,
    question: 'Veri yedekleme nasıl yapılır?',
    answer:
      "Ana ekran > Ayarlar menüsünden Yedekleme seçeneğini kullanarak verilerinizi güvenli bir şekilde bulut depolamaya yedekleyebilirsiniz."
  }
];
