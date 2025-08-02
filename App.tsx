
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { ScrollDownArrow } from './components/Icons';
import { useScrollFadeIn } from './hooks/useScrollFadeIn';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary">{children}</h2>
);

const TimelineItem: React.FC<{ year: string; title: string; description: string; align: 'left' | 'right' }> = ({ year, title, description, align }) => {
    const itemFade = useScrollFadeIn<HTMLDivElement>();
    const alignmentClass = align === 'left' ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8';
    const orderClass = align === 'left' ? '' : 'lg:order-3';

    return (
        <div ref={itemFade.ref} className={`mb-8 flex justify-between items-center w-full ${itemFade.className}`}>
            <div className={`hidden lg:block w-5/12 ${align === 'left' ? '' : 'order-3'}`}></div>
            <div className="z-10 flex items-center order-1 bg-accent-primary shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-background-primary">{year}</h1>
            </div>
            <div className={`order-2 bg-background-primary lg:bg-background-secondary rounded-lg shadow-xl w-full lg:w-5/12 p-6 ${alignmentClass} ${orderClass}`}>
                <h3 className="font-bold text-text-primary text-xl font-serif">{title}</h3>
                <p className="text-sm leading-snug tracking-wide text-text-secondary mt-2">{description}</p>
            </div>
        </div>
    );
};

const SpaceCard: React.FC<{ imageSrc: string; altText: string; title: string; capacity: string; description: string; reverse?: boolean; }> = ({ imageSrc, altText, title, capacity, description, reverse = false }) => {
    const cardFade = useScrollFadeIn<HTMLDivElement>();
    const imageOrder = reverse ? 'lg:order-last' : '';
    const textOrder = reverse ? 'lg:order-first' : '';

    return (
        <div ref={cardFade.ref} className={`grid lg:grid-cols-2 items-center gap-12 ${cardFade.className}`}>
            <div className={imageOrder}>
                <img src={imageSrc} alt={altText} className="rounded-lg shadow-2xl object-cover w-full h-[500px]" />
            </div>
            <div className={`text-center lg:text-left ${textOrder}`}>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary">{title}</h2>
                <p className="mt-2 text-text-primary font-semibold">{capacity}</p>
                <p className="mt-6 text-text-secondary leading-[1.7]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const InfoItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="flex flex-col sm:flex-row mb-6">
        <dt className="w-full sm:w-1/3 md:w-1/4 font-serif text-accent-primary text-lg">{title}</dt>
        <dd className="w-full sm:w-2/3 md:w-3/4 text-text-secondary leading-[1.7]">{children}</dd>
    </div>
);


const App: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const conceptSection = useScrollFadeIn<HTMLDivElement>();
  const bartenderSection = useScrollFadeIn<HTMLDivElement>();
  const cocktailsSection = useScrollFadeIn<HTMLDivElement>();
  const philosophyHeroFade = useScrollFadeIn<HTMLDivElement>();
  const storyFade = useScrollFadeIn<HTMLDivElement>();
  const menuHeaderFade = useScrollFadeIn<HTMLHeadingElement>();
  const cocktailsMenuSection = useScrollFadeIn<HTMLDivElement>();
  const spiritsMenuSection = useScrollFadeIn<HTMLDivElement>();
  const foodMenuSection = useScrollFadeIn<HTMLDivElement>();
  const priceMenuSection = useScrollFadeIn<HTMLDivElement>();
  const spaceHeaderFade = useScrollFadeIn<HTMLHeadingElement>();
  const infoHeaderFade = useScrollFadeIn<HTMLHeadingElement>();
  const infoDetailsFade = useScrollFadeIn<HTMLDivElement>();
  const mapFade = useScrollFadeIn<HTMLDivElement>();
  const philosophyJourneyFade = useScrollFadeIn<HTMLDivElement>();

  return (
    <Layout>
      <main>
        {/* Home: Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=1"
            alt="Bar Eight Rabbit counter"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          />
          <div className="relative z-20 p-4">
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] leading-tight drop-shadow-lg">
              ここは三郷ではない。
              <br />
              <span className="block mt-2">日本一のバーテンダーが創る、</span>
              <span className="block mt-2">一夜の隠れ家へ。</span>
            </h1>
          </div>
          <ScrollDownArrow />
        </section>

        {/* Home: Concept Section */}
        <section id="concept" ref={conceptSection.ref} className={`py-20 md:py-32 bg-background-primary ${conceptSection.className}`}>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <SectionTitle>三郷に、文化を創造する。</SectionTitle>
            <p className="mt-8 text-text-secondary text-[clamp(1rem,1.6vw,1.1rem)] leading-[1.7]">
              「三郷にいるとは思えない」— それは私たちが最も誇りに思う言葉です。
              Bar Eight Rabbitは、ただお酒を飲む場所ではありません。
              扉を開けた瞬間から始まる非日常的な体験。
              定番に独自の解釈を加えたツイストカクテル。
              静謐な空間で、グラスを傾け、自分と向き合う時間。
              私たちはこの街に、新しいバーの文化を創造します。
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="bg-background-secondary pt-20 md:pt-32 pb-20 md:pb-24">
            <header ref={philosophyHeroFade.ref} className={`container mx-auto px-4 text-center ${philosophyHeroFade.className}`}>
                <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] text-accent-primary">バーテンダー、そして開拓者</h1>
                <p className="mt-4 max-w-3xl mx-auto text-text-secondary leading-[1.7]">
                    一杯のカクテルが人生を変えることがある。伊藤博之の物語は、その信念の証明です。
                </p>
            </header>
            <div ref={storyFade.ref} className={`py-20 md:py-24 ${storyFade.className}`}>
              <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-5 gap-12 items-center">
                      <div className="lg:col-span-2">
                            <img src="https://picsum.photos/800/1000?grayscale&random=5" alt="Hiroyuki Ito in action" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
                      </div>
                      <div className="lg:col-span-3">
                          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary">故郷への想い、グラスに込めて</h2>
                          <p className="mt-6 text-text-secondary leading-[1.7]">
                              バーテンダーとしてのキャリアは、都心の華やかな舞台から始まりました。しかし、心の奥底には常に故郷・三郷の風景がありました。「なぜ、自分の愛する街に、心から誇れるオーセンティックバーがないのだろう？」その問いが、すべての原動力となりました。
                          </p>
                          <p className="mt-4 text-text-secondary leading-[1.7]">
                              「BARの無い街にBARの文化を創る」—それは挑戦であり、開拓者としての使命でした。技術を磨き、知識を深め、そして2023年、カンパリグループ主催のカクテルコンペティションで日本一の栄光を手にしました。この称号は、私の哲学が間違っていなかったことの証です。Bar Eight Rabbitは、私の夢そのものです。
                          </p>
                      </div>
                  </div>
              </div>
            </div>
            <div ref={philosophyJourneyFade.ref} className={`bg-background-primary py-20 md:py-24 ${philosophyJourneyFade.className}`}>
                 <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary">The Journey</h2>
                </div>
                <div className="container mx-auto px-4 w-full h-full mt-12">
                    <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
                        <div className="hidden lg:block absolute border-opacity-20 border-accent-primary h-full border-2" style={{left: '50%'}}></div>
                        <TimelineItem year="22歳" title="BARコンサルタントとして始動" description="都内のバーでキャリアをスタート。若干22歳でコンサルタントとして店舗の立ち上げや運営に携わり、業界のノウハウを学ぶ。" align="left"/>
                        <TimelineItem year="28歳" title="故郷・三郷で独立" description="長年の夢であった自身の店「Bar Eight Rabbit」をオープン。郊外でオーセンティックバーを成功させるという挑戦を開始する。" align="right"/>
                        <TimelineItem year="2023" title="日本チャンピオンへ" description="カンパリグループ主催のカクテルグランプリで見事優勝。その技術と創造性が全国に認められ、日本一のバーテンダーとなる。" align="left"/>
                        <TimelineItem year="現在" title="文化の創造" description="Bar Eight Rabbitを拠点に、三郷に新たなバー文化を根付かせるべく、日々カウンターに立ち続ける。" align="right"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="bg-background-primary text-text-primary pt-20 md:pt-32 pb-20 md:pb-32">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20">
                    <h1 ref={menuHeaderFade.ref} className={`font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] text-accent-primary ${menuHeaderFade.className}`}>
                        グラスの中の芸術
                    </h1>
                </header>
                <div className="max-w-4xl mx-auto">
                    <div ref={cocktailsMenuSection.ref} className={`mb-16 ${cocktailsMenuSection.className}`}>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary border-b-2 border-accent-primary pb-4 mb-8 inline-block">Twist & Bespoke Cocktails</h2>
                        <p className="text-text-secondary leading-[1.7]">定番に独自の解釈を加えたツイストカクテル。そして、メニューにない一杯を。<br />あなたの好みを、ただお聞かせください。日本チャンピオンの技術と感性で、あなただけの特別なカクテルを創造します。</p>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <img src="https://picsum.photos/600/800?random=11&grayscale" alt="Cocktail" className="rounded shadow-lg object-cover w-full h-80"/>
                            <img src="https://picsum.photos/600/800?random=12&grayscale" alt="Cocktail" className="rounded shadow-lg object-cover w-full h-80"/>
                            <img src="https://picsum.photos/600/800?random=13&grayscale" alt="Cocktail" className="rounded shadow-lg object-cover w-full h-80"/>
                        </div>
                    </div>
                    <div ref={spiritsMenuSection.ref} className={`mb-16 ${spiritsMenuSection.className}`}>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary border-b-2 border-accent-primary pb-4 mb-8 inline-block">Spirits Selection</h2>
                         <p className="text-text-secondary leading-[1.7]">入手困難なジャパニーズウイスキーをはじめ、世界中から厳選した蒸留酒を取り揃えています。その日の気分や好みに合わせて、最高の一杯をご提案いたします。</p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <img src="https://picsum.photos/600/800?random=21&grayscale" alt="Whisky bottle" className="rounded shadow-lg object-cover w-full h-64"/>
                            <img src="https://picsum.photos/600/800?random=22&grayscale" alt="Whisky bottle" className="rounded shadow-lg object-cover w-full h-64"/>
                            <img src="https://picsum.photos/600/800?random=23&grayscale" alt="Whisky bottle" className="rounded shadow-lg object-cover w-full h-64"/>
                            <img src="https://picsum.photos/600/800?random=24&grayscale" alt="Whisky bottle" className="rounded shadow-lg object-cover w-full h-64"/>
                        </div>
                    </div>
                    <div ref={foodMenuSection.ref} className={`mb-16 ${foodMenuSection.className}`}>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary border-b-2 border-accent-primary pb-4 mb-8 inline-block">Homemade Food</h2>
                        <p className="text-text-secondary leading-[1.7]">カクテルやウイスキーとのペアリングを考えた、自家製の軽食をご用意しております。</p>
                    </div>
                    <div ref={priceMenuSection.ref} className={priceMenuSection.className}>
                        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent-primary border-b-2 border-accent-primary pb-4 mb-8 inline-block">Price</h2>
                        <p className="text-text-secondary text-lg">Charge: ¥500</p>
                        <p className="text-text-secondary text-lg">Service fee: 10%</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Space Section */}
        <section id="space" className="bg-background-secondary text-text-primary pt-20 md:pt-32 pb-20 md:pb-32">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20 md:mb-32">
                    <h1 ref={spaceHeaderFade.ref} className={`font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] text-accent-primary ${spaceHeaderFade.className}`}>
                        日常を置き去る場所
                    </h1>
                </header>
                <div className="space-y-20 md:space-y-32">
                    <SpaceCard imageSrc="https://picsum.photos/1200/800?random=31&grayscale" altText="重厚なカウンター席" title="カウンター席" capacity="10席" description="一枚板の重厚なカウンター。バーテンダーとの会話を愉しんだり、目の前で繰り広げられるカクテルメイキングを眺めたり。お一人様でも、大切な方と二人でも、特別な時間を過ごせます。" />
                    <SpaceCard imageSrc="https://picsum.photos/1200/800?random=32&grayscale" altText="親密なテーブル席" title="テーブル席" capacity="3名様 × 2席" description="親密な会話を楽しむのに最適なテーブル席。デートや記念日など、二人だけの世界に浸りたい夜にぴったりです。柔らかな照明が、心地よい雰囲気を演出します。" reverse={true} />
                    <SpaceCard imageSrc="https://picsum.photos/1200/800?random=33&grayscale" altText="寛ぎのソファ席" title="ソファ席" capacity="5名様 × 1席" description="ゆったりと寛げるソファ席は、少人数のグループでのご利用に最適です。仲間と語り合いながら、希少なウイスキーを心ゆくまでお楽しみください。" />
                </div>
            </div>
        </section>

        {/* Information Section */}
        <section id="info" className="bg-background-primary text-text-primary pt-20 md:pt-32 pb-20 md:pb-32">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20">
                    <h1 ref={infoHeaderFade.ref} className={`font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] text-accent-primary ${infoHeaderFade.className}`}>
                        Information
                    </h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div ref={infoDetailsFade.ref} className={infoDetailsFade.className}>
                        <dl>
                            <InfoItem title="営業時間">月～土 19:00～翌4:00 (L.O. 翌3:00)</InfoItem>
                            <InfoItem title="定休日">日曜日</InfoItem>
                            <InfoItem title="電話番号"><a href="tel:048-954-7970" className="hover:text-accent-primary transition-colors">048-954-7970</a></InfoItem>
                            <InfoItem title="ご予約">お電話にて承ります。</InfoItem>
                            <InfoItem title="お支払い">クレジットカード (VISA, Master, JCB, AMEX, Diners), PayPay</InfoItem>
                            <InfoItem title="喫煙">全席喫煙可</InfoItem>
                            <InfoItem title="アクセス">埼玉県三郷市早稲田2-17-13 早稲田ビル1F<br/>JR武蔵野線 三郷駅北口 徒歩5分<br/>建物の真裏にコインパーキング有り</InfoItem>
                        </dl>
                    </div>
                    <div ref={mapFade.ref} className={mapFade.className}>
                         <div className="aspect-w-16 aspect-h-9 h-full min-h-[450px]">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.9189917523177!2d139.88219501526218!3d35.80231648016624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601891f745501861%3A0xe5495832a26c48f!2z44CSMzQxLTAwMTgg5ZWG5YuL55yM5LiD6YOo5biC5pep56iy55S677yS5LiB55uu77yR77yX4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1684300000000!5m2!1sja!2sjp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bar Eight Rabbit Location" className="rounded-lg shadow-2xl"></iframe>
                         </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default App;