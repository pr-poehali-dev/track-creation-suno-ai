import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Track {
  id: string;
  title: string;
  style: string;
  duration: string;
  createdAt: string;
}

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [style, setStyle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [voiceFile, setVoiceFile] = useState<File | null>(null);
  
  const [myTracks] = useState<Track[]>([
    { id: '1', title: 'Летний вайб', style: 'Pop', duration: '3:24', createdAt: '2024-12-15' },
    { id: '2', title: 'Ночной драйв', style: 'Synthwave', duration: '4:12', createdAt: '2024-12-14' },
    { id: '3', title: 'Энергия утра', style: 'Electronic', duration: '2:58', createdAt: '2024-12-13' },
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVoiceFile(e.target.files[0]);
    }
  };

  const handleCreateTrack = () => {
    console.log('Creating track:', { style, lyrics, voiceFile });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="Music" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">MusicGen AI</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'home' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Home" size={20} />
              <span>Главная</span>
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'studio' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Mic" size={20} />
              <span>Студия</span>
            </button>
            <button
              onClick={() => setActiveTab('tracks')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'tracks' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Library" size={20} />
              <span>Мои треки</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === 'profile' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="User" size={20} />
              <span>Профиль</span>
            </button>
          </div>

          <Avatar className="w-10 h-10 border-2 border-primary/50 cursor-pointer hover-glow">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
              ВП
            </AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <h1 className="text-6xl md:text-7xl font-bold gradient-text leading-tight">
                Создавай музыку
                <br />
                своим голосом
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Генерируй треки в любом стиле, используй свой голос и полный контроль над текстом
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => setActiveTab('studio')}
                  className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 hover-glow px-8 py-6 text-lg"
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Создать трек
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Примеры
                </Button>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Популярные треки</h2>
                <Button variant="ghost" className="text-primary">
                  Смотреть все
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="glass-effect overflow-hidden group cursor-pointer hover-glow">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <div
                              key={idx}
                              className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full animate-wave"
                              style={{
                                height: `${30 + Math.random() * 40}px`,
                                animationDelay: `${idx * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="icon" className="w-16 h-16 rounded-full bg-white/90 hover:bg-white">
                          <Icon name="Play" size={28} className="text-black ml-1" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg">Трек #{i}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                          {['Pop', 'Rock', 'Electronic', 'Hip-Hop', 'Jazz', 'Classical'][i - 1]}
                        </Badge>
                        <span className="text-sm text-muted-foreground">3:24</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="glass-effect rounded-3xl p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Возможности платформы</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                    <Icon name="Mic2" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Свой голос</h3>
                  <p className="text-muted-foreground">
                    Загрузи образец своего голоса и используй его для вокала
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto">
                    <Icon name="FileText" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Свой текст</h3>
                  <p className="text-muted-foreground">
                    Напиши текст песни и контролируй каждое слово трека
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto">
                    <Icon name="Palette" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Любой стиль</h3>
                  <p className="text-muted-foreground">
                    От поп-музыки до рока - создавай треки в любом жанре
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold gradient-text">Студия создания</h1>
              <p className="text-xl text-muted-foreground">
                Создай свой уникальный трек за несколько шагов
              </p>
            </div>

            <Card className="glass-effect p-8 space-y-8">
              <div className="space-y-4">
                <Label htmlFor="style" className="text-lg font-semibold flex items-center gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  Стиль музыки
                </Label>
                <Input
                  id="style"
                  placeholder="Например: поп, рок, электроника, джаз..."
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="bg-input/50 border-white/10 text-lg py-6"
                />
                <p className="text-sm text-muted-foreground">
                  Опиши желаемый стиль, настроение и темп трека
                </p>
              </div>

              <div className="space-y-4">
                <Label htmlFor="lyrics" className="text-lg font-semibold flex items-center gap-2">
                  <Icon name="FileText" size={20} className="text-secondary" />
                  Текст песни
                </Label>
                <Textarea
                  id="lyrics"
                  placeholder="Напиши текст своей песни..."
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  rows={8}
                  className="bg-input/50 border-white/10 text-lg resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  Введи текст, который будет озвучен в треке
                </p>
              </div>

              <div className="space-y-4">
                <Label className="text-lg font-semibold flex items-center gap-2">
                  <Icon name="Mic" size={20} className="text-accent" />
                  Образец голоса
                </Label>
                <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
                  {voiceFile ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                        <Icon name="CheckCircle" size={32} className="text-primary" />
                      </div>
                      <p className="text-lg font-medium">{voiceFile.name}</p>
                      <Button
                        variant="outline"
                        onClick={() => setVoiceFile(null)}
                        className="border-destructive/50 text-destructive hover:bg-destructive/10"
                      >
                        <Icon name="X" size={16} className="mr-2" />
                        Удалить
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                        <Icon name="Upload" size={32} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-lg font-medium mb-2">Загрузи образец своего голоса</p>
                        <p className="text-sm text-muted-foreground">
                          MP3, WAV или M4A до 10 МБ
                        </p>
                      </div>
                      <div>
                        <input
                          type="file"
                          id="voice-upload"
                          accept="audio/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Button asChild variant="outline" className="border-accent/50 hover:bg-accent/10">
                          <label htmlFor="voice-upload" className="cursor-pointer">
                            <Icon name="Upload" size={16} className="mr-2" />
                            Выбрать файл
                          </label>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Загрузи короткий аудио-файл с твоим голосом (10-30 секунд)
                </p>
              </div>

              <Button
                size="lg"
                onClick={handleCreateTrack}
                disabled={!style || !lyrics}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 hover-glow py-6 text-lg"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Создать трек
              </Button>
            </Card>
          </div>
        )}

        {activeTab === 'tracks' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold gradient-text">Мои треки</h1>
                <p className="text-xl text-muted-foreground mt-2">
                  {myTracks.length} треков создано
                </p>
              </div>
              <Button
                onClick={() => setActiveTab('studio')}
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 hover-glow"
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Создать новый
              </Button>
            </div>

            <div className="grid gap-4">
              {myTracks.map((track) => (
                <Card key={track.id} className="glass-effect p-6 hover-glow cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative">
                      <Icon name="Music" size={32} className="text-primary" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        <Icon name="Play" size={24} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-semibold">{track.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                          {track.style}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {track.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {new Date(track.createdAt).toLocaleDateString('ru-RU')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost" className="hover:bg-primary/10">
                        <Icon name="Download" size={20} className="text-primary" />
                      </Button>
                      <Button size="icon" variant="ghost" className="hover:bg-secondary/10">
                        <Icon name="Share2" size={20} className="text-secondary" />
                      </Button>
                      <Button size="icon" variant="ghost" className="hover:bg-destructive/10">
                        <Icon name="Trash2" size={20} className="text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {myTracks.length === 0 && (
              <div className="glass-effect rounded-3xl p-16 text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Music" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Пока нет треков</h3>
                <p className="text-muted-foreground">
                  Начни создавать музыку прямо сейчас
                </p>
                <Button
                  onClick={() => setActiveTab('studio')}
                  className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90"
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать первый трек
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Avatar className="w-32 h-32 mx-auto border-4 border-primary/50">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-4xl font-bold">
                  ВП
                </AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold gradient-text">Ваш Профиль</h1>
              <p className="text-muted-foreground">Музыкальный творец</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="glass-effect p-6 text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">{myTracks.length}</div>
                <p className="text-sm text-muted-foreground">Треков создано</p>
              </Card>
              <Card className="glass-effect p-6 text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">24</div>
                <p className="text-sm text-muted-foreground">Часов музыки</p>
              </Card>
              <Card className="glass-effect p-6 text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">6</div>
                <p className="text-sm text-muted-foreground">Стилей освоено</p>
              </Card>
            </div>

            <Card className="glass-effect p-8 space-y-6">
              <h2 className="text-2xl font-semibold">Настройки аккаунта</h2>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    defaultValue="Ваше Имя"
                    className="bg-input/50 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="your@email.com"
                    className="bg-input/50 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Любимые стили</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Pop', 'Rock', 'Electronic', 'Hip-Hop', 'Jazz'].map((genre) => (
                      <Badge
                        key={genre}
                        variant="secondary"
                        className="bg-primary/20 text-primary border-0 cursor-pointer hover:bg-primary/30"
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90">
                Сохранить изменения
              </Button>
            </Card>
          </div>
        )}
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-effect border-t border-white/10 p-4">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'home' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Home" size={24} />
            <span className="text-xs">Главная</span>
          </button>
          <button
            onClick={() => setActiveTab('studio')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'studio' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Mic" size={24} />
            <span className="text-xs">Студия</span>
          </button>
          <button
            onClick={() => setActiveTab('tracks')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'tracks' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Library" size={24} />
            <span className="text-xs">Треки</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="User" size={24} />
            <span className="text-xs">Профиль</span>
          </button>
        </div>
      </div>
    </div>
  );
}
