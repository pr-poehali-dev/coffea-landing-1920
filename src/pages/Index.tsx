import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за бронирование! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-[1920px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Jazz Café</h1>
            <div className="flex gap-8">
              {["Главная", "Меню", "Афиша", "Атмосфера", "Бронирование", "Контакты"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/c04c2bd5-b496-463d-977e-43918f10a5cd/files/530452cf-be50-4828-8a65-6fc73a41e857.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl px-8">
          <h2 className="text-7xl font-bold mb-6 animate-fade-in">
            Вечера джаза и кофейных коктейлей
          </h2>
          <p className="text-xl mb-8 text-secondary animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Живая музыка, изысканные напитки и неповторимая атмосфера
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#бронирование">Забронировать столик</a>
          </Button>
        </div>
      </section>

      <section id="меню" className="py-24 px-8 max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Наше меню</h2>
          <p className="text-xl text-muted-foreground">Авторские кофейные коктейли и классические напитки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Кофе Амаретто",
              description: "Эспрессо, ликёр амаретто, взбитые сливки",
              price: "450₽",
            },
            {
              title: "Ирландский кофе",
              description: "Кофе, ирландский виски, сахар, сливки",
              price: "520₽",
            },
            {
              title: "Кофе с ромом",
              description: "Двойной эспрессо, темный ром, корица",
              price: "480₽",
            },
            {
              title: "Бейлиз-латте",
              description: "Латте, ликёр Бейлиз, карамельный топпинг",
              price: "490₽",
            },
            {
              title: "Классический капучино",
              description: "Эспрессо, молочная пенка, какао",
              price: "280₽",
            },
            {
              title: "Авторский флэт-уайт",
              description: "Двойной ристретто, бархатная пенка",
              price: "320₽",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-card hover:bg-card/80 transition-all hover:scale-105 border-border"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-xl font-bold text-primary">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="афиша" className="py-24 px-8 bg-card/30">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Афиша выступлений</h2>
            <p className="text-xl text-muted-foreground">Живая музыка каждый вечер</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                date: "15 ноября",
                time: "20:00",
                artist: "Трио Михаила Соколова",
                genre: "Modern Jazz",
              },
              {
                date: "18 ноября",
                time: "21:00",
                artist: "Анна Волкова Quartet",
                genre: "Vocal Jazz",
              },
              {
                date: "22 ноября",
                time: "20:30",
                artist: "Swing Brothers",
                genre: "Swing & Blues",
              },
              {
                date: "25 ноября",
                time: "20:00",
                artist: "Джем-сейшн",
                genre: "Open Mic Night",
              },
            ].map((event, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-center min-w-[80px]">
                      <div className="text-4xl font-bold text-primary">{event.date.split(" ")[0]}</div>
                      <div className="text-sm text-muted-foreground">{event.date.split(" ")[1]}</div>
                      <div className="text-sm text-secondary mt-2">{event.time}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{event.artist}</h3>
                      <p className="text-muted-foreground">{event.genre}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="атмосфера" className="py-24 px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Атмосфера</h2>
            <p className="text-xl text-muted-foreground">Погрузитесь в мир джаза и уюта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              style={{
                backgroundImage: "url('https://cdn.poehali.dev/projects/c04c2bd5-b496-463d-977e-43918f10a5cd/files/bd226121-ded8-45dc-8016-9ffd2c782ecf.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="h-96 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              style={{
                backgroundImage: "url('https://cdn.poehali.dev/projects/c04c2bd5-b496-463d-977e-43918f10a5cd/files/5f2aa0ce-3084-44df-974b-fb3dd42046a8.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-24 px-8 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Бронирование</h2>
            <p className="text-xl text-muted-foreground">Забронируйте столик на вечер</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Дата</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Количество гостей</label>
                    <Input
                      type="number"
                      placeholder="2"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Пожелания</label>
                  <Textarea
                    placeholder="Особые пожелания к бронированию..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Забронировать
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-24 px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                ул. Арбат, 12
                <br />
                Москва, 119019
              </p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">
                +7 (495) 123-45-67
                <br />
                Ежедневно 10:00-02:00
              </p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@jazzcafe.ru
                <br />
                booking@jazzcafe.ru
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 py-12 px-8 border-t border-border">
        <div className="max-w-[1920px] mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Jazz Café</h3>
          <p className="text-muted-foreground mb-6">Вечера джаза и кофейных коктейлей</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Music" size={24} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Jazz Café. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
