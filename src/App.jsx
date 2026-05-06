import React, { useState } from 'react';
import { Home, Tv, Watch, CreditCard, User, MapPin, Search, ChevronRight, Star, Bell, Wifi, Battery, Signal, Share2, MessageCircle, X, ChevronLeft, Users, QrCode, Check, Minus, Plus, Calendar, UserCheck, Phone, Copy, Crown, Gift, Ticket, Wallet, ShoppingBag, ClipboardList, Truck, BadgeCheck, RotateCcw, MapPinned, Store, Headset, Settings, Compass, Hotel, PartyPopper, ThumbsUp, Flag, Grid2X2, ShoppingCart, HeartPulse, Moon, Activity, Footprints, Flame, Droplets, Thermometer, Wind, Bluetooth } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function handleImgError(e, fallbackSrc) {
  if (!fallbackSrc) return;
  if (e.currentTarget.src === fallbackSrc) return;
  e.currentTarget.src = fallbackSrc;
}

const EndReached = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-3 px-6 py-6 text-[12px] text-gray-300", className)}>
      <div className="h-px bg-gray-200 flex-1"></div>
      <span className="shrink-0">已经到底了</span>
      <div className="h-px bg-gray-200 flex-1"></div>
    </div>
  );
};

const ROUTES = [
  {
    id: 1,
    title: '云南大理+丽江5天4晚私家团',
    price: 2999,
    rating: 4.9,
    reviews: 1200,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800',
    tags: ['纯玩无购物', '高端酒店'],
    sales: '已售 3k+',
    duration: '5天4晚',
    departure: '上海出发',
    highlights: ['洱海海景酒店', '丽江古城特色客栈', '玉龙雪山冰川大索道', 'VIP专属导游服务', '全程商务车接送'],
    includes: ['全程豪华住宿', '景点门票全含', '全程专车接送', '专业导游讲解', '旅游意外险'],
    description: '逃离城市的喧嚣，踏上这场为期5天4晚的云南深度之旅。从大理的洱海日出到丽江古城的夜色，从苍山的巍峨到玉龙雪的壮丽，每一站都是一幅绝美的画卷。'
  },
  {
    id: 2,
    title: '四川九寨沟+黄龙3天2晚深度游',
    price: 1580,
    rating: 4.8,
    reviews: 850,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=800',
    tags: ['含门票', '深度摄影'],
    sales: '已售 1.5k',
    duration: '3天2晚',
    departure: '成都出发',
    highlights: ['九寨沟五花海', '黄龙五彩池', '原始森林栈道', '藏寨文化体验'],
    includes: ['景区门票', '2晚住宿', '全程交通', '导游服务'],
    description: '走进“童话世界”九寨沟，探寻人间仙境黄龙。三天的行程，带您领略彩池、雪山、峡谷、森林的完美融合。'
  },
  {
    id: 3,
    title: '三亚蜈支洲岛+亚龙湾5天豪华游',
    price: 3880,
    rating: 5.0,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&q=80&w=800',
    tags: ['海景房', '私家沙滩'],
    sales: '已售 5k+',
    duration: '5天4晚',
    departure: '全国出发',
    highlights: ['蜈支洲岛潜水', '亚龙湾海滩', '天堂森林公园', '南山寺祈福'],
    includes: ['5星海景酒店', '往返机票', '全程接送', '特色海鲜餐'],
    description: '阳光、沙滩、椰林、海浪。三亚给你的不仅是度假，更是一种生活方式。'
  },
  {
    id: 4,
    title: '西藏拉萨+林芝7天6晚净心之旅',
    price: 5200,
    rating: 4.9,
    reviews: 600,
    image: 'https://images.unsplash.com/photo-1524225875323-955677028f09?auto=format&fit=crop&q=80&w=800',
    imageFallback: 'https://picsum.photos/seed/tibet-lhasa/800/600',
    tags: ['氧气保障', '深度人文'],
    sales: '已售 800',
    duration: '7天6晚',
    departure: '拉萨集合',
    highlights: ['布达拉宫', '大昭寺', '雅鲁藏布江', '桃花节专享'],
    includes: ['全程供氧', '4星酒店', '越野车出行', '专业领队'],
    description: '洗涤心灵的圣地之旅。在世界屋脊，感受信仰的力量，见证雪域高原的绝世风光。'
  },
  {
    id: 5,
    title: '广西桂林+阳朔4天3晚山水画卷',
    price: 1980,
    rating: 4.7,
    reviews: 1500,
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=800',
    tags: ['遇龙河漂流', '印象刘三姐'],
    sales: '已售 2.2k',
    duration: '4天3晚',
    departure: '桂林出发',
    highlights: ['漓江竹筏', '遇龙河漂流', '银子岩', '阳朔西街'],
    includes: ['全程住宿', '景区门票', '竹筏费用', '特色啤酒鱼'],
    description: '舟行碧波上，人在画中游。桂林山水甲天下，阳朔风景甲桂林。'
  },
  {
    id: 6,
    title: '新疆喀纳斯+赛里木湖8天环线',
    price: 6800,
    rating: 5.0,
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1527585145-57994685970c?auto=format&fit=crop&q=80&w=800',
    imageFallback: 'https://picsum.photos/seed/xinjiang-kanas/800/600',
    tags: ['最美公路', '木屋住宿'],
    sales: '已售 1.1k',
    duration: '8天7晚',
    departure: '乌鲁木齐出发',
    highlights: ['喀纳斯湖怪', '赛里木湖', '禾木星空', '独库公路'],
    includes: ['景区门票', '小木屋住宿', '越野车出行', '全程早餐'],
    description: '深入疆地，探寻神秘喀纳斯。蓝天白云下，雪山草原间，感受新疆的壮美与辽阔。'
  },
  {
    id: 7,
    title: '北京故宫+长城4天经典地标游',
    price: 2200,
    rating: 4.8,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=800',
    tags: ['专家导览', '快速入园'],
    sales: '已售 8k+',
    duration: '4天3晚',
    departure: '北京出发',
    highlights: ['故宫深度游', '八达岭长城', '天坛公园', '京味美食'],
    includes: ['故宫门票', '长城门票', '3晚住宿', '全程交通', '专家讲解'],
    description: '京城时光，穿越千年。带孩子父母来北京，必走的经典线路。'
  },
  {
    id: 8,
    title: '内蒙古呼伦贝尔大草原5天深度游',
    price: 3500,
    rating: 4.9,
    reviews: 780,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    tags: ['骑马体验', '篝火晚会'],
    sales: '已售 1.3k',
    duration: '5天4晚',
    departure: '海拉尔集合',
    highlights: ['草原骑马', '蒙古包住宿', '篝火晚会', '挤牛奶体验'],
    includes: ['草原住宿', '马队费用', '三餐全含', '民俗活动'],
    description: '天苍苍，野茫茫，风吹草低见牛羊。驰骋在辽阔的呼伦贝尔大草原上。'
  },
  {
    id: 9,
    title: '福建厦门+鼓浪屿3天2晚文艺之旅',
    price: 1280,
    rating: 4.6,
    reviews: 1800,
    image: 'https://images.unsplash.com/photo-1516646255117-f9f933680173?auto=format&fit=crop&q=80&w=800',
    tags: ['漫步琴岛', '海鲜大餐'],
    sales: '已售 4k+',
    duration: '3天2晚',
    departure: '厦门出发',
    highlights: ['鼓浪屿', '厦门大学', '曾厝垵', '环岛路骑行'],
    includes: ['轮渡船票', '2晚住宿', '接送服务', '美食地图'],
    description: '一座文艺到骨子里的城市，遇见最美的海岛时光。'
  },
  {
    id: 10,
    title: '青海湖+茶卡盐湖4天环线游',
    price: 2600,
    rating: 4.8,
    reviews: 920,
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=800',
    tags: ['天空之镜', '经幡祈福'],
    sales: '已售 1.9k',
    duration: '4天3晚',
    departure: '西宁出发',
    highlights: ['青海湖日出', '茶卡盐湖', '塔尔寺', '金银滩草原'],
    includes: ['景区门票', '3晚住宿', '全程SUV', '高原备氧'],
    description: '在天空之镜照见最美的自己，在青海湖畔等待最圆的日出。'
  },
];

const ShareModal = ({ route, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/50 z-[200] flex flex-col justify-end" onClick={onClose}>
      <div className="bg-white rounded-t-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="h-1 w-10 bg-gray-300 rounded-full mx-auto mt-3 mb-2"></div>
        <div className="px-4 py-4">
          <div className="flex gap-8 justify-center py-2">
            <button className="flex flex-col items-center gap-2 active:opacity-80">
              <div className="w-14 h-14 bg-[#07C160] rounded-full flex items-center justify-center shadow-sm">
                <UserCheck size={24} className="text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">分享给好友</span>
            </button>
            <button className="flex flex-col items-center gap-2 active:opacity-80">
              <div className="w-14 h-14 bg-[#007AFF] rounded-full flex items-center justify-center shadow-sm">
                <Users size={24} className="text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">分享到群</span>
            </button>
            <button className="flex flex-col items-center gap-2 active:opacity-80">
              <div className="w-14 h-14 bg-[#FF9500] rounded-full flex items-center justify-center shadow-sm">
                <QrCode size={24} className="text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium">生成海报</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 mt-4 bg-gray-100 rounded-xl text-gray-600 font-medium"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

const ConsultModal = ({ onClose }) => {
  const storeName = '上海普陀真北路店';
  const phoneNumber = '021-6230-8899';
  const wecomQrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=%E4%B8%8A%E6%B5%B7%E6%99%AE%E9%99%80%E7%9C%9F%E5%8C%97%E8%B7%AF%E5%BA%97-%E4%BC%81%E5%BE%AE%E5%92%A8%E8%AF%A2';

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[200] flex flex-col justify-end" onClick={onClose}>
      <div className="bg-white/95 backdrop-blur-xl rounded-t-3xl overflow-hidden border border-black/5 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.35)]" onClick={(e) => e.stopPropagation()}>
        <div className="h-1 w-10 bg-gray-300 rounded-full mx-auto mt-3 mb-2"></div>
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[14px] font-bold text-gray-900 tracking-tight">立即咨询</div>
            <button onClick={onClose} className="p-2 -mr-2 active:opacity-50">
              <X size={16} className="text-gray-600" />
            </button>
          </div>

          <div className="bg-[#F2F2F7] rounded-2xl p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <MapPin size={14} className="text-[#FF9500]" />
              </div>
              <div className="flex-1">
                <div className="text-[12px] text-gray-400 font-medium">当前归属门店</div>
                <div className="text-[14px] font-semibold text-gray-900 mt-0.5">{storeName}</div>
              </div>
            </div>

            <div className="h-px bg-black/10 my-3"></div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <QrCode size={14} className="text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <div className="text-[12px] text-gray-400 font-medium">添加店长微信随时咨询</div>
                <div className="mt-2 w-full rounded-2xl p-2 flex items-center justify-center border border-black/10 shadow-sm">
                  <img src={wecomQrUrl} alt="企微二维码" className="w-[112px] h-[112px] rounded-lg" />
                </div>
                <div className="text-[11px] text-gray-400 mt-2 text-center">长按保存或使用微信扫一扫</div>
              </div>
            </div>

            <div className="h-px bg-black/10 my-3"></div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                <Phone size={14} className="text-[#34C759]" />
              </div>
              <div className="flex-1">
                <div className="text-[12px] text-gray-400 font-medium">门店联系电话</div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-1 inline-flex items-center justify-between w-full bg-white rounded-xl px-3 py-2 active:opacity-80 shadow-sm"
                >
                  <span className="text-[14px] font-semibold text-gray-900">{phoneNumber}</span>
                  <span className="text-[12px] font-semibold text-[#007AFF]">拨打</span>
                </a>
              </div>
            </div>
          </div>

          <button onClick={onClose} className="w-full py-2.5 mt-3 bg-gray-100 rounded-xl text-gray-700 font-semibold active:opacity-80">
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetailScreen = ({ route, onBack, onOrder }) => {
  const [showShare, setShowShare] = useState(false);
  const [showConsult, setShowConsult] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative flex flex-col h-full bg-white">
      {/* Header - Sticky at top */}
      <div className="shrink-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <span className="font-semibold text-gray-900">商品详情</span>
        <button onClick={() => setShowShare(true)} className="p-2 -mr-2 active:opacity-50">
          <Share2 size={22} className="text-gray-700" />
        </button>
      </div>

      {/* Content - Scrollable, fills remaining space */}
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
        {/* Main Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={route.image}
            alt={route.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => handleImgError(e, route.imageFallback)}
          />
          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs">
            1/{1 + 4}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 py-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-900 leading-tight mb-1">{route.title}</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 bg-[#FFF3E0] px-1.5 py-0.5 rounded">
                  <Star size={10} fill="#FF9500" className="text-[#FF9500]" />
                  <span className="text-[11px] font-semibold text-[#FF9500]">{route.rating}</span>
                </div>
                <span className="text-[11px] text-gray-400">{route.reviews}条点评</span>
                <span className="text-[11px] text-gray-400">|</span>
                <span className="text-[11px] text-gray-400">{route.sales}</span>
              </div>
            </div>
          </div>

          <div className="text-[#FF3B30] font-bold text-xl mt-2">
            ¥{route.price}<span className="text-sm text-gray-400 font-normal ml-1">起</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-5 bg-[#F5F5F5]"></div>

        {/* Trip Info */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">行程信息</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#007AFF]" />
              <div>
                <p className="text-[11px] text-gray-400">行程天数</p>
                <p className="text-[13px] font-medium text-gray-900">{route.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FF9500]" />
              <div>
                <p className="text-[11px] text-gray-400">出发地</p>
                <p className="text-[13px] font-medium text-gray-900">{route.departure}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E5E5] mx-4"></div>

        {/* Highlights */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">行程亮点</h3>
          <div className="flex flex-col gap-2">
            {route.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF]"></div>
                <span className="text-[13px] text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-5 bg-[#F5F5F5]"></div>

        {/* Includes */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">费用包含</h3>
          <div className="flex flex-wrap gap-2">
            {route.includes.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg">
                <Check size={12} className="text-[#34C759]" />
                <span className="text-[12px] text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#E5E5E5] mx-4"></div>

        {/* Description */}
        <div className="px-4 py-4 pb-24">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">产品介绍</h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">{route.description}</p>
        </div>
      </div>

      {/* Bottom Actions - Stays at bottom, inside the flex container */}
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-t border-black/10 px-4 py-3 flex gap-3 z-50">
        <button
          onClick={() => setShowConsult(true)}
          className="flex items-center justify-center gap-1.5 h-12 px-6 border border-[#E5E5EA] rounded-xl active:bg-gray-50 shrink-0"
        >
          <MessageCircle size={20} className="text-[#FF9500]" />
          <span className="text-[#1C1C1E] font-semibold text-[14px]">咨询</span>
        </button>
        <button
          onClick={onOrder}
          className="flex-1 h-12 bg-[#FF9500] rounded-xl text-white font-bold active:opacity-80 transition-opacity"
        >
          立即下单
        </button>
      </div>

      {showShare && <ShareModal route={route} onClose={() => setShowShare(false)} />}
      {showConsult && <ConsultModal onClose={() => setShowConsult(false)} />}
    </div>
  );
};

const OrderScreen = ({ route, onBack, onSubmit }) => {
  const [travelers, setTravelers] = useState(1);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const totalPrice = route.price * travelers;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Sticky at top */}
      <div className="shrink-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <span className="font-semibold text-gray-900">确认订单</span>
        <div className="w-10"></div>
      </div>

      {/* Content - Scrollable, fills remaining space */}
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
        {/* Route Summary */}
        <div className="px-4 py-4 bg-[#F8F8F8]">
          <div className="flex gap-3">
            <img
              src={route.image}
              alt={route.title}
              className="w-20 h-20 rounded-xl object-cover"
              onError={(e) => handleImgError(e, route.imageFallback)}
            />
            <div className="flex-1">
              <h3 className="text-[14px] font-semibold text-gray-900 line-clamp-2 mb-1">{route.title}</h3>
              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span>{route.duration}</span>
                <span>|</span>
                <span>{route.departure}</span>
              </div>
              <div className="text-[#FF3B30] font-bold mt-1">¥{route.price}<span className="text-[11px] text-gray-400 font-normal">/人</span></div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">联系人信息</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 border-b border-[#F0F0F0] pb-3">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="请输入联系人姓名"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="flex-1 text-[14px] outline-none placeholder:text-gray-300"
              />
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gray-400" />
              <input
                type="tel"
                placeholder="请输入手机号码"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="flex-1 text-[14px] outline-none placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="h-3 bg-[#F5F5F5]"></div>

        {/* Travelers */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">出游人数</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[14px] font-medium text-gray-900">成人</p>
              <p className="text-[12px] text-gray-400">¥{route.price}/人</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="w-9 h-9 rounded-full border border-[#E5E5EA] flex items-center justify-center active:bg-gray-50"
              >
                <Minus size={16} className="text-gray-600" />
              </button>
              <span className="text-[18px] font-bold text-gray-900 w-8 text-center">{travelers}</span>
              <button
                onClick={() => setTravelers(travelers + 1)}
                className="w-9 h-9 rounded-full border border-[#E5E5EA] flex items-center justify-center active:bg-gray-50"
              >
                <Plus size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="h-3 bg-[#F5F5F5]"></div>

        {/* Price Details */}
        <div className="px-4 py-4">
          <h3 className="text-[15px] font-bold text-gray-900 mb-3">费用明细</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500">成人 × {travelers}人</span>
              <span className="text-gray-900">¥{route.price * travelers}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500">门票+住宿+交通</span>
              <span className="text-gray-900">已含</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500">保险</span>
              <span className="text-[#34C759]">赠送</span>
            </div>
          </div>
        </div>

        <div className="h-3 bg-[#F5F5F5]"></div>

        {/* Store Info */}
        <div className="px-4 py-4 pb-24">
          <div className="flex items-center gap-2 text-[13px] text-gray-500">
            <MapPin size={14} className="text-[#FF9500]" />
            <span>服务门店：上海普陀真北路店</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions - Stays at bottom, inside the flex container */}
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-t border-black/10 px-4 py-3 z-50">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[12px] text-gray-500">合计</span>
            <div className="text-[#FF3B30] font-bold text-xl">¥{totalPrice}</div>
          </div>
          <button
            onClick={onSubmit}
            className="h-12 px-8 bg-[#FF9500] rounded-xl text-white font-bold active:opacity-80 transition-opacity"
          >
            提交订单
          </button>
        </div>
      </div>
    </div>
  );
};

const DeviceFrameWithTab = ({ children, tabBar, hideTabBar, lockOuterScroll }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D1D1D6] p-4 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <div className="relative">
        {/* Physical Buttons */}
        <div className="absolute -left-[3px] top-[96px] w-[3px] h-[32px] bg-[#1C1C1E] rounded-l-sm z-10 shadow-sm"></div>
        <div className="absolute -left-[3px] top-[150px] w-[3px] h-[55px] bg-[#1C1C1E] rounded-l-sm z-10 shadow-sm"></div>
        <div className="absolute -left-[3px] top-[220px] w-[3px] h-[55px] bg-[#1C1C1E] rounded-l-sm z-10 shadow-sm"></div>
        <div className="absolute -right-[3px] top-[170px] w-[3px] h-[85px] bg-[#1C1C1E] rounded-r-sm z-10 shadow-sm"></div>

        {/* iPhone Outer Shell - Frame */}
        <div className="relative bg-[#1C1C1E] rounded-[3rem] h-[760px] w-[352px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] p-[10px]">
          
          {/* Notch - AT THE VERY TOP EDGE OF THE SHELL */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[110] pointer-events-none">
            <div className="h-[32px] w-[160px] bg-[#1C1C1E] rounded-b-[1.8rem] flex items-center justify-center gap-3 pt-1 shadow-sm">
              <div className="w-[45px] h-[4px] bg-[#2C2C2E] rounded-full shadow-inner opacity-60"></div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#0A0A0C] border border-white/5 shadow-inner"></div>
            </div>
          </div>

          {/* Inner Screen - White display area with proper rounded corners */}
          <div className="w-full h-full bg-white rounded-[2.4rem] relative overflow-hidden flex flex-col shadow-inner">
            
            {/* Status Bar */}
            <div className="shrink-0 h-[40px] px-8 flex justify-between items-center bg-white/95 backdrop-blur-xl z-[100] text-black text-[12px] font-semibold pointer-events-none">
              <span className="mt-1">9:41</span>
              <div className="flex items-center gap-1.5 mt-1">
                <Signal size={14} strokeWidth={2.5} />
                <Wifi size={14} strokeWidth={2.5} />
                <div className="w-[22px] h-[11px] border border-black/30 rounded-[3px] p-[1px]">
                  <div className="bg-black h-full w-[85%] rounded-[1px]"></div>
                </div>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div
              className={cn(
                "flex-1 min-h-0 overscroll-contain scrollbar-hide relative z-0",
                lockOuterScroll ? "overflow-hidden" : "overflow-y-auto"
              )}
            >
              <div className={lockOuterScroll ? "h-full" : "min-h-full"}>{children}</div>
            </div>

            {/* Tab Bar - Hidden on detail/order screens */}
            {!hideTabBar && (
              <div className="shrink-0 z-[100]">
                {tabBar}
              </div>
            )}

            {/* Home Indicator */}
            <div className="shrink-0 h-[10px] flex justify-center items-center z-[100] pointer-events-none">
              <div className="w-[100px] h-[4px] bg-black/15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabBar = ({ activeTab, setActiveTab, onOpenOrders }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'live', label: '直播', icon: Tv },
    { id: 'bracelet', label: '手环', icon: Watch },
    { id: 'orders', label: '订单', icon: ClipboardList },
    { id: 'me', label: '我的', icon: User },
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur-xl border-t border-black/10 flex justify-around items-center h-[72px] px-1 pb-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              if (tab.id === 'orders') {
                onOpenOrders?.();
                return;
              }
              setActiveTab(tab.id);
            }}
            className={cn(
              "flex flex-col items-center justify-center gap-[2px] transition-all duration-200 flex-1 h-full",
              isActive ? "text-[#FF9500]" : "text-[#8E8E93]"
            )}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const HomeScreen = ({ onRouteClick, onOpenMember, onOpenPointsMall }) => {
  return (
    <div className="flex flex-col">
      {/* Search Bar Area - Sticky */}
      <div className="px-4 py-3 flex flex-col gap-3 bg-white sticky top-0 z-50 border-b border-black/5 shadow-sm">
        <div className="flex items-center gap-1.5 text-gray-900">
          <MapPin size={14} className="text-[#FF9500]" fill="currentColor" />
          <span className="text-[13px] font-semibold tracking-tight">服务您的门店：上海普陀真北路店</span>
        </div>
        <div className="flex items-center gap-2.5 w-full">
          {/* City Switcher */}
          <div className="flex items-center gap-1 shrink-0 bg-[#F2F2F7] h-9 px-3 rounded-xl cursor-pointer active:bg-[#E5E5EA] transition-colors">
            <span className="text-[14px] font-semibold text-gray-900">上海</span>
            <ChevronRight size={12} className="rotate-90 text-gray-400" strokeWidth={3} />
          </div>
          {/* Search Input */}
          <div className="flex-1 bg-[#F2F2F7] rounded-xl h-9 px-3 flex items-center gap-2 text-[#8E8E93]">
            <Search size={16} strokeWidth={2.5} />
            <span className="text-[13px] font-medium truncate">搜索目的地/酒店/景点</span>
          </div>
          {/* Notifications */}
          <div className="relative shrink-0 p-1 active:opacity-50 transition-opacity">
            <Bell size={24} className="text-gray-700" strokeWidth={2} />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FF3B30] rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 pt-4">
        <div className="relative h-40 rounded-[1rem] overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5">
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight">探索世界<br/>发现您的完美旅程</h2>
          </div>
        </div>
      </div>

      {/* Quick Nav - iOS Grid Style */}
      <div className="grid grid-cols-5 gap-2 px-4 py-5">
        {[
          { label: '旅游', color: 'bg-[#007AFF]', Icon: Compass },
          { label: '酒店', color: 'bg-[#FF9500]', Icon: Hotel },
          { label: '一日聚', color: 'bg-[#34C759]', Icon: PartyPopper },
          { label: '会员', color: 'bg-[#5856D6]', Icon: Crown },
          { label: '积分商城', color: 'bg-[#FF2D55]', Icon: Gift },
        ].map((item) => (
          <div
            key={item.label}
            onClick={item.label === '会员' ? onOpenMember : item.label === '积分商城' ? onOpenPointsMall : undefined}
            className="flex flex-col items-center gap-1.5 cursor-pointer active:opacity-60 transition-opacity"
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm", item.color)}>
              <item.Icon size={22} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold text-[#1C1C1E]">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Member Card Mini - Premium iOS Look */}
      <div className="mx-4 bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] rounded-xl p-4 flex justify-between items-center shadow-lg relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FCE38A] to-[#F38181] flex items-center justify-center font-bold text-[#1C1C1E] text-[11px] italic shadow-lg">8848</div>
          <div>
            <p className="text-[#FCE38A] text-[12px] font-bold italic tracking-wider">TOP MEMBER</p>
            <p className="text-white/50 text-[10px] font-medium">尊享全球 12 项顶级特权</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#FCE38A] to-[#F38181] text-[#1C1C1E] text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg relative z-10 active:scale-95 transition-transform">
          立即开通
        </button>
      </div>

      {/* Travel Routes - iOS Card List */}
      <div className="px-4 pt-5 pb-4">
        <div className="flex justify-between items-end mb-4 px-1">
          <h3 className="text-[17px] font-bold text-[#1C1C1E]">甄选旅行线路</h3>
          <span className="text-[13px] text-[#007AFF] font-semibold">查看更多</span>
        </div>

        <div className="flex flex-col gap-3">
          {ROUTES.map((route) => (
            <div
              key={route.id}
              onClick={() => onRouteClick(route)}
              className="bg-white rounded-xl overflow-hidden flex shadow-sm border border-[#E5E5EA] h-28 active:bg-[#F2F2F7] transition-colors cursor-pointer"
            >
              <div className="w-28 h-full relative shrink-0 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => handleImgError(e, route.imageFallback)}
                />
                <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md text-white px-1.5 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-0.5">
                  <Star size={8} fill="#FFCC00" className="text-[#FFCC00]" />
                  {route.rating}
                </div>
              </div>
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-[13px] text-[#1C1C1E] line-clamp-1 mb-1 leading-tight">{route.title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {route.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-medium bg-[#F2F2F7] text-[#8E8E93] px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-[#8E8E93] text-[10px] font-medium">{route.sales}</div>
                  <div className="text-right">
                    <span className="text-[#FF3B30] font-bold text-base">¥{route.price}</span>
                    <span className="text-[10px] text-[#8E8E93] font-medium ml-0.5">起</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <EndReached />
      </div>
    </div>
  );
};

const LiveScreen = ({ onOpenLive }) => {
  const liveHero = {
    id: 'live_now',
    title: '溯源全球特产-云南普洱茶基地',
    subtitle: '直播时间：2025-12-29 19:55:00',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=1200',
    imageFallback: 'https://picsum.photos/seed/live-hero/1200/700',
    isLive: true,
    schedule: '场直播，早9点、下午14点、晚20点。',
  };

  const upcoming = [
    {
      id: 'u1',
      title: '溯源全球特产—小兴安岭寒地蓝莓返场12.29—老友福利',
      time: '直播时间：2025-12-29 13:55:00',
      image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-upcoming-1/800/600',
      isLive: false,
      schedule: '场直播，早9点、下午14点、晚20点。',
    },
    {
      id: 'u2',
      title: '溯源全球特产—东北黑木耳溯源专场12.29—福利加码',
      time: '直播时间：2025-12-29 15:35:00',
      image: 'https://images.unsplash.com/photo-1604908554261-09e9979b9a2a?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-upcoming-2/800/600',
      isLive: false,
      schedule: '场直播，早9点、下午14点、晚20点。',
    },
  ];

  const history = [
    {
      id: 'h1',
      title: '溯源全球特产—小兴安岭寒地蓝莓返场12.29—老友福利',
      time: '直播时间：2025-12-29 13:55:00',
      image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-history-1/800/600',
      isLive: false,
      isReplay: true,
      schedule: '场直播，早9点、下午14点、晚20点。',
    },
    {
      id: 'h2',
      title: '溯源全球特产—峨山散养鸡基地12.28—老友福利',
      time: '直播时间：2025-12-28 15:55:00',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc5007?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-history-2/800/600',
      isLive: false,
      isReplay: true,
      schedule: '场直播，早9点、下午14点、晚20点。',
    },
    {
      id: 'h3',
      title: '夜惠万家—溯源全球特产—新春好物提前特卖12.28',
      time: '直播时间：2025-12-28 19:55:00',
      image: 'https://images.unsplash.com/photo-1471253387723-35c53c9f97ca?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-history-3/800/600',
      isLive: false,
      isReplay: true,
      schedule: '场直播，早9点、下午14点、晚20点。',
    },
  ];

  const goods = [
    {
      id: 'g1',
      title: '超补膳食营养补充食品2盒装…',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1585238342028-4a6937ad1f2f?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/goods-1/800/700',
      soldOut: false,
    },
    {
      id: 'g2',
      title: '超补膳食营养补充食品2盒装…',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/goods-2/800/700',
      soldOut: false,
    },
    {
      id: 'g3',
      title: '超补膳食营养补充食品2盒装…',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/goods-3/800/700',
      soldOut: false,
    },
    {
      id: 'g4',
      title: '超补膳食营养补充食品2盒装…',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1615486364023-03c6bb77d7ce?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/goods-4/800/700',
      soldOut: true,
    },
  ];

  return (
    <div className="bg-[#F2F2F7] min-h-full">
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center justify-center h-10">
          <div className="text-[16px] font-semibold text-gray-900">邻家优选</div>
        </div>

        <div className="mt-2 rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-white">
          <button onClick={() => onOpenLive?.(liveHero)} className="relative h-44 w-full text-left active:opacity-95 transition-opacity">
            <img
              src={liveHero.image}
              alt="直播封面"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => handleImgError(e, liveHero.imageFallback)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF3B30] text-white text-[11px] font-bold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90"></span>
              直播中…
            </div>
            <div className="absolute left-0 right-0 bottom-0 px-4 pb-3">
              <div className="text-white text-[14px] font-bold line-clamp-2 leading-snug">{liveHero.title}</div>
              <div className="mt-1 text-white/80 text-[11px] font-semibold">{liveHero.subtitle}</div>
            </div>
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between px-1">
            <div className="text-[15px] font-bold text-gray-900">直播预告</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">更多</div>
          </div>

          <div className="mt-3 flex flex-col gap-3">
            {upcoming.map((item) => (
              <button key={item.id} onClick={() => onOpenLive?.(item)} className="bg-white rounded-2xl p-3 shadow-sm border border-black/5 text-left active:bg-black/[0.02] transition-colors">
                <div className="flex gap-3">
                  <div className="w-[78px] h-[58px] rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => handleImgError(e, item.imageFallback)}
                    />
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-md bg-[#FF3B30] text-white text-[10px] font-bold">
                      预约
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2">{item.title}</div>
                    <div className="mt-1 text-[11px] text-gray-500 font-medium">{item.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between px-1">
            <div className="text-[15px] font-bold text-gray-900">历史直播记录</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">更多</div>
          </div>

          <div className="mt-3 flex flex-col gap-3">
            {history.map((item) => (
              <button key={item.id} onClick={() => onOpenLive?.(item)} className="bg-white rounded-2xl p-3 shadow-sm border border-black/5 text-left active:bg-black/[0.02] transition-colors">
                <div className="flex gap-3">
                  <div className="w-[78px] h-[58px] rounded-xl overflow-hidden bg-gray-100 shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => handleImgError(e, item.imageFallback)}
                    />
                    <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-bold">
                      回放
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2">{item.title}</div>
                    <div className="mt-1 text-[11px] text-gray-500 font-medium">{item.time}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-end justify-between px-1">
            <div>
              <div className="text-[15px] font-bold text-gray-900">今日好物</div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">可在门店购买</div>
            </div>
            <div className="text-[12px] text-[#007AFF] font-semibold">更多</div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {goods.map((g) => (
              <div key={g.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <div className="relative h-[118px] bg-gray-100">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => handleImgError(e, g.imageFallback)}
                  />
                  {g.soldOut && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-full bg-black/70 text-white text-[12px] font-bold">
                        已售罄
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <div className="text-[12px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[34px]">{g.title}</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-[#FF3B30] font-extrabold text-[16px]">¥{g.price}</div>
                    <div className="text-[11px] text-gray-400 line-through">¥{g.original}</div>
                  </div>
                  <button
                    disabled={g.soldOut}
                    className={cn(
                      "mt-2 w-full h-9 rounded-xl text-[13px] font-bold active:opacity-85",
                      g.soldOut ? "bg-gray-200 text-gray-400" : "bg-[#FF9500] text-white"
                    )}
                  >
                    立即购买
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EndReached className="pt-6 pb-2" />
      </div>
    </div>
  );
};

const LiveWatchScreen = ({ live, onBack }) => {
  const products = [
    {
      id: 'lp1',
      title: '【自提】亿而…',
      price: 19.9,
      image: 'https://images.unsplash.com/photo-1585238342028-4a6937ad1f2f?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-product-1/800/700',
      hot: '热卖 x7999',
    },
    {
      id: 'lp2',
      title: '【自提】亿而…',
      price: 19.9,
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/live-product-2/800/700',
      hot: '热卖 x7999',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div className="min-w-0 flex-1 text-center px-2">
          <div className="text-[14px] font-semibold text-gray-900 line-clamp-1">{live?.title}</div>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 min-h-0 relative overflow-hidden">
        <img
          src={live?.image}
          alt="直播画面"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => handleImgError(e, live?.imageFallback)}
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute top-3 left-3 right-3">
          <div className="bg-black/35 backdrop-blur-xl rounded-2xl px-3 py-2 text-white/90 text-[12px] font-semibold flex items-center justify-between">
            <div className="line-clamp-1">{live?.schedule || '场直播，早9点、下午14点、晚20点。'}</div>
            <ChevronRight size={16} className="text-white/80" />
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <div className="flex-1 bg-[#FF9500]/95 backdrop-blur-xl rounded-2xl px-3 py-2 text-white text-[12px] font-bold line-clamp-1 shadow-sm">
              {live?.isReplay ? '您正在观看直播回放，不会发放兑换券哦' : '直播进行中，福利不断哦'}
            </div>
            <button className="shrink-0 bg-white/25 backdrop-blur-xl rounded-2xl px-3 py-2 text-white text-[12px] font-bold flex items-center gap-1.5 active:opacity-80">
              <Flag size={14} className="text-white" />
              投诉
            </button>
          </div>
        </div>

        <div className="absolute top-28 right-3 flex flex-col gap-3">
          <button className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-xl flex items-center justify-center shadow-sm border border-black/5 active:opacity-80">
            <Grid2X2 size={18} className="text-[#FF9500]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-xl flex items-center justify-center shadow-sm border border-black/5 active:opacity-80">
            <ShoppingCart size={18} className="text-[#FF9500]" />
          </button>
        </div>

        <div className="absolute top-40 right-3 w-[142px] flex flex-col gap-3">
          {products.map((p) => (
            <div key={p.id} className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-black/5">
              <div className="relative h-[92px] bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => handleImgError(e, p.imageFallback)}
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#FF9500] text-white text-[10px] font-extrabold">
                  {p.hot}
                </div>
              </div>
              <div className="p-2.5">
                <div className="text-[12px] font-bold text-gray-900 line-clamp-1">{p.title}</div>
                <div className="mt-1.5 flex items-center justify-between">
                  <div className="text-[#FF3B30] font-extrabold text-[16px]">¥{p.price}</div>
                  <button className="h-7 px-3 rounded-xl bg-[#FF3B30] text-white text-[12px] font-extrabold active:opacity-85">
                    抢
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-3 bottom-24 flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40 shadow-sm bg-white/20 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200"
              alt="主播"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="bg-black/35 backdrop-blur-xl rounded-full px-3 py-2 flex items-center gap-2">
            <ThumbsUp size={14} className="text-white" />
            <div className="text-white text-[12px] font-semibold">👍 👍 👍 👍 👍</div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 px-3 pb-3">
          <div className="bg-black/35 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white/20 rounded-2xl px-3 py-2 text-white/80 text-[12px] font-semibold">
                跟大家聊聊…
              </div>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center active:opacity-80">
                <MessageCircle size={18} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center active:opacity-80">
                <Gift size={18} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center active:opacity-80">
                <ShoppingBag size={18} className="text-white" />
              </button>
            </div>
          </div>
          <div className="h-3"></div>
        </div>
      </div>
    </div>
  );
};

const BraceletScreen = () => {
  const day = '2026-04-30';
  const connectStatus = '已连接';

  const rings = [
    { label: '心率', value: '72', unit: 'bpm', pct: 0.72, color: '#FF3B30', Icon: HeartPulse },
    { label: '睡眠', value: '7h36', unit: '', pct: 0.84, color: '#5856D6', Icon: Moon },
    { label: '运动', value: '8420', unit: '步', pct: 0.66, color: '#34C759', Icon: Footprints },
  ];

  const sleep = {
    score: 86,
    duration: '7小时36分',
    deep: '2小时10分',
    light: '4小时50分',
    rem: '0小时36分',
    segments: [
      { label: '深睡', pct: 0.28, color: 'bg-[#5856D6]' },
      { label: '浅睡', pct: 0.64, color: 'bg-[#007AFF]' },
      { label: 'REM', pct: 0.08, color: 'bg-[#AF52DE]' },
    ],
  };

  const activity = {
    steps: 8420,
    calories: 486,
    distance: 5.6,
    minutes: 58,
  };

  const metrics = [
    { label: '静息心率', value: '61', unit: 'bpm', Icon: HeartPulse, color: 'text-[#FF3B30]' },
    { label: '血氧', value: '98', unit: '%', Icon: Droplets, color: 'text-[#007AFF]' },
    { label: '呼吸率', value: '15', unit: '次/分', Icon: Wind, color: 'text-[#34C759]' },
    { label: '体表温度', value: '36.5', unit: '℃', Icon: Thermometer, color: 'text-[#FF9500]' },
    { label: '压力', value: '24', unit: '/100', Icon: Activity, color: 'text-[#AF52DE]' },
    { label: '睡眠心率', value: '58', unit: 'bpm', Icon: Moon, color: 'text-[#5856D6]' },
  ];

  return (
    <div className="bg-[#F2F2F7] min-h-full">
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center justify-center h-10 relative">
          <div className="text-[16px] font-semibold text-gray-900">手环</div>
          <div className="absolute right-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/5 shadow-sm">
            <Bluetooth size={14} className="text-[#007AFF]" />
            <span className="text-[11px] font-bold text-gray-900">{connectStatus}</span>
          </div>
        </div>
        <div className="mt-1 text-center text-[11px] text-gray-500 font-medium">{day} 健康日报</div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-bold text-gray-900">今日概览</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">查看详情</div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {rings.map((r) => {
              const Icon = r.Icon;
              const deg = Math.round(r.pct * 360);
              return (
                <div key={r.label} className="flex flex-col items-center">
                  <div
                    className="w-[74px] h-[74px] rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(${r.color} 0deg ${deg}deg, #E5E5EA ${deg}deg 360deg)`,
                    }}
                  >
                    <div className="w-[58px] h-[58px] rounded-full bg-white flex flex-col items-center justify-center shadow-sm border border-black/5">
                      <Icon size={16} className="text-gray-700" />
                      <div className="mt-1 text-[14px] font-extrabold text-gray-900 leading-none">{r.value}</div>
                      <div className="text-[10px] text-gray-400 font-semibold leading-none mt-0.5">{r.unit}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-[11px] text-gray-600 font-semibold">{r.label}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 bg-[#F2F2F7] rounded-2xl p-3 flex gap-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-sm shrink-0">
              <Activity size={16} className="text-[#007AFF]" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] font-bold text-gray-900">健康建议</div>
              <div className="mt-1 text-[12px] text-gray-600 leading-snug line-clamp-2">
                状态良好：心率平稳、睡眠达标、步数接近目标。建议睡前放松10分钟，明天快走30分钟+拉伸补水。
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-bold text-gray-900">昨晚睡眠</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">睡眠分析</div>
          </div>
          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <div className="text-[12px] text-gray-500 font-semibold">睡眠评分</div>
              <div className="mt-1 text-[28px] font-extrabold text-[#5856D6] tracking-tight">{sleep.score}</div>
            </div>
            <div className="text-right">
              <div className="text-[12px] text-gray-500 font-semibold">总时长</div>
              <div className="mt-1 text-[14px] font-extrabold text-gray-900">{sleep.duration}</div>
            </div>
          </div>

          <div className="mt-3 h-3 rounded-full overflow-hidden bg-[#F2F2F7] flex">
            {sleep.segments.map((s) => (
              <div key={s.label} className={cn("h-full", s.color)} style={{ width: `${s.pct * 100}%` }}></div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="text-[11px] text-gray-500 font-semibold">深睡</div>
              <div className="mt-1 text-[12px] font-extrabold text-gray-900">{sleep.deep}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="text-[11px] text-gray-500 font-semibold">浅睡</div>
              <div className="mt-1 text-[12px] font-extrabold text-gray-900">{sleep.light}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="text-[11px] text-gray-500 font-semibold">REM</div>
              <div className="mt-1 text-[12px] font-extrabold text-gray-900">{sleep.rem}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-bold text-gray-900">今日运动</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">运动记录</div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="flex items-center gap-1.5">
                <Footprints size={14} className="text-[#34C759]" />
                <div className="text-[11px] text-gray-500 font-semibold">步数</div>
              </div>
              <div className="mt-1 text-[13px] font-extrabold text-gray-900">{activity.steps}</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="flex items-center gap-1.5">
                <Flame size={14} className="text-[#FF3B30]" />
                <div className="text-[11px] text-gray-500 font-semibold">消耗</div>
              </div>
              <div className="mt-1 text-[13px] font-extrabold text-gray-900">{activity.calories}</div>
              <div className="text-[10px] text-gray-400 font-semibold -mt-0.5">kcal</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="flex items-center gap-1.5">
                <Activity size={14} className="text-[#007AFF]" />
                <div className="text-[11px] text-gray-500 font-semibold">距离</div>
              </div>
              <div className="mt-1 text-[13px] font-extrabold text-gray-900">{activity.distance}</div>
              <div className="text-[10px] text-gray-400 font-semibold -mt-0.5">km</div>
            </div>
            <div className="bg-[#F2F2F7] rounded-2xl p-3">
              <div className="flex items-center gap-1.5">
                <Watch size={14} className="text-[#FF9500]" />
                <div className="text-[11px] text-gray-500 font-semibold">活跃</div>
              </div>
              <div className="mt-1 text-[13px] font-extrabold text-gray-900">{activity.minutes}</div>
              <div className="text-[10px] text-gray-400 font-semibold -mt-0.5">分钟</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="flex items-center justify-between">
            <div className="text-[15px] font-bold text-gray-900">监测数据</div>
            <div className="text-[12px] text-[#007AFF] font-semibold">全部数据</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {metrics.map((m) => {
              const Icon = m.Icon;
              return (
                <div key={m.label} className="bg-[#F2F2F7] rounded-2xl p-3 border border-black/5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-black/5">
                        <Icon size={18} className={cn("text-gray-600", m.color)} />
                      </div>
                      <div className="text-[12px] font-bold text-gray-900">{m.label}</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-end gap-1.5">
                    <div className="text-[18px] font-extrabold text-gray-900 leading-none">{m.value}</div>
                    <div className="text-[11px] text-gray-400 font-semibold">{m.unit}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <EndReached className="pt-6 pb-2" />
      </div>
    </div>
  );
};

const MemberCenterScreen = ({ onBack }) => {
  const savings = 128.54;
  const heroImg = 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=1200';
  const heroFallback = 'https://picsum.photos/seed/member-hero/1200/700';

  const perks = [
    { icon: Crown, label: '黑钻身份' },
    { icon: Ticket, label: '专属券包' },
    { icon: Wallet, label: '购物折扣' },
    { icon: Gift, label: '生日礼遇' },
    { icon: Headset, label: '专属客服' },
    { icon: Truck, label: '极速发货' },
    { icon: BadgeCheck, label: '正品保障' },
    { icon: Star, label: '积分加倍' },
  ];

  const giftChoices = [
    {
      id: 'c1',
      title: '黑钻专享礼包（二选一）',
      leftTitle: '精品好茶体验装',
      leftDesc: '普洱生茶/熟茶随机',
      rightTitle: '门店代金券包',
      rightDesc: '满减券 ×3 张',
    },
  ];

  const goods = [
    {
      id: 'mg1',
      title: '云南普洱·熟茶饼（357g）',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/member-goods-1/800/700',
      soldOut: false,
      tag: '会员价',
    },
    {
      id: 'mg2',
      title: '古树生茶·尝鲜礼盒（4袋）',
      price: 39.9,
      original: 199,
      image: 'https://images.unsplash.com/photo-1518977956815-dee006a3f25c?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/member-goods-2/800/700',
      soldOut: false,
      tag: '限时抢',
    },
    {
      id: 'mg3',
      title: '云南原叶·冷泡茶（12瓶装）',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1528826194825-2c6e0d79db29?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/member-goods-3/800/700',
      soldOut: false,
      tag: '爆款',
    },
    {
      id: 'mg4',
      title: '黑钻专属·高山茶礼（已售罄）',
      price: 29.9,
      original: 140,
      image: 'https://images.unsplash.com/photo-1527169402691-a3fb4e1b6c2b?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/member-goods-4/800/700',
      soldOut: true,
      tag: '已售罄',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F2F2F7]">
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div className="text-[16px] font-semibold text-gray-900">会员中心</div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
        <div className="bg-gradient-to-b from-[#FCE6C8] via-[#F6EDE3] to-[#F2F2F7]">
          <div className="px-4 pt-3 pb-4">
            <div className="mt-2 bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] rounded-2xl p-4 shadow-lg relative overflow-hidden border border-white/5">
              <img
                src={heroImg}
                alt="会员背景"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
                loading="lazy"
                onError={(e) => handleImgError(e, heroFallback)}
              />
              <div className="absolute inset-0 bg-black/45"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-[11px] font-semibold px-2 py-1 rounded-full border border-white/15">
                      <Crown size={12} className="text-[#FCE38A]" />
                      黑钻会员
                    </div>
                    <div className="mt-2 text-white/80 text-[12px] font-semibold">累计已省</div>
                    <div className="mt-1 text-white font-extrabold text-[26px] tracking-tight">¥{savings.toFixed(2)}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-white/80 text-[11px] font-semibold">当前门店</div>
                    <div className="mt-1 inline-flex items-center gap-1.5 text-white text-[12px] font-bold">
                      <MapPin size={14} className="text-[#FF9500]" />
                      上海普陀真北路店
                    </div>
                  </div>
                </div>

                <div className="mt-3 bg-white/10 rounded-2xl p-3 border border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-white/85 text-[12px] font-semibold">黑钻特权已为您开启</div>
                    <button className="h-8 px-3 rounded-xl bg-[#FF9500] text-white text-[12px] font-bold active:opacity-85">
                      立即续费
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
              <div className="flex items-center justify-between">
                <div className="text-[15px] font-bold text-gray-900">开通黑钻会员享 8 大权益</div>
                <div className="text-[12px] text-[#007AFF] font-semibold">查看详情</div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {perks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.label} className="flex flex-col items-center gap-1.5">
                      <div className="w-10 h-10 rounded-2xl bg-[#F2F2F7] flex items-center justify-center shadow-sm border border-black/5">
                        <Icon size={18} className="text-[#FF9500]" />
                      </div>
                      <div className="text-[11px] text-gray-600 font-semibold text-center leading-tight">{p.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

          <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
            <div className="flex items-center justify-between">
              <div className="text-[15px] font-bold text-gray-900">黑钻专属礼包（二选一）</div>
              <div className="text-[12px] text-[#FF9500] font-bold">限时</div>
            </div>

            {giftChoices.map((c) => (
              <div key={c.id} className="mt-3 rounded-2xl border border-[#FF9500]/20 bg-[#FFF7ED] p-3">
                <div className="flex items-stretch gap-3">
                  <div className="flex-1 bg-white rounded-2xl p-3 border border-black/5">
                    <div className="text-[12px] font-bold text-gray-900">{c.leftTitle}</div>
                    <div className="mt-1 text-[11px] text-gray-500 font-medium">{c.leftDesc}</div>
                    <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full bg-[#FF9500]/10 text-[#FF9500] text-[10px] font-bold">
                      任选其一
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-3 border border-black/5">
                    <div className="text-[12px] font-bold text-gray-900">{c.rightTitle}</div>
                    <div className="mt-1 text-[11px] text-gray-500 font-medium">{c.rightDesc}</div>
                    <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full bg-[#FF3B30]/10 text-[#FF3B30] text-[10px] font-bold">
                      门店可用
                    </div>
                  </div>
                </div>
                <button className="mt-3 w-full h-10 rounded-2xl bg-[#FF3B30] text-white text-[13px] font-extrabold active:opacity-85">
                  立即领取
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="flex items-end justify-between px-1">
              <div>
                <div className="text-[15px] font-bold text-gray-900">今日好物</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">可在门店购买</div>
              </div>
              <div className="text-[12px] text-[#007AFF] font-semibold">更多</div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {goods.map((g) => (
                <div key={g.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <div className="relative h-[118px] bg-gray-100">
                    <img
                      src={g.image}
                      alt={g.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => handleImgError(e, g.imageFallback)}
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/55 text-white text-[10px] font-bold">
                      {g.tag}
                    </div>
                    {g.soldOut && (
                      <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                        <div className="px-3 py-1.5 rounded-full bg-black/70 text-white text-[12px] font-bold">
                          已售罄
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="text-[12px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[34px]">{g.title}</div>
                    <div className="mt-2 flex items-end gap-2">
                      <div className="text-[#FF3B30] font-extrabold text-[16px]">¥{g.price}</div>
                      <div className="text-[11px] text-gray-400 line-through">¥{g.original}</div>
                    </div>
                    <button
                      disabled={g.soldOut}
                      className={cn(
                        "mt-2 w-full h-9 rounded-xl text-[13px] font-bold active:opacity-85",
                        g.soldOut ? "bg-gray-200 text-gray-400" : "bg-[#FF9500] text-white"
                      )}
                    >
                      立即购买
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

            <EndReached className="pt-6 pb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PointsMallScreen = ({ onBack }) => {
  const [tab, setTab] = useState('gift');
  const points = 48;

  const tabs = [
    { id: 'gift', label: '积分好礼' },
    { id: 'discount', label: '打折天天兑' },
  ];

  const items = [
    {
      id: 'p1',
      title: '【积分兑】云南普洱·熟茶饼（357g）',
      points: 180,
      badge: '爆款',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-1/800/700',
      action: '去兑换',
    },
    {
      id: 'p2',
      title: '【积分兑】门店代金券（满299减30）',
      points: 120,
      badge: '门店可用',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-2/800/700',
      action: '去兑换',
    },
    {
      id: 'p3',
      title: '【限时兑】古树生茶·尝鲜礼盒（4袋）',
      points: 250,
      badge: '限时',
      image: 'https://images.unsplash.com/photo-1518977956815-dee006a3f25c?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-3/800/700',
      action: '去兑换',
    },
    {
      id: 'p4',
      title: '【积分兑】云南原叶·冷泡茶（12瓶装）',
      points: 90,
      badge: '新品',
      image: 'https://images.unsplash.com/photo-1528826194825-2c6e0d79db29?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-4/800/700',
      action: '去兑换',
    },
    {
      id: 'p5',
      title: '【打折兑】精品茶具·随手杯（黑）',
      points: 40,
      badge: '打折',
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-5/800/700',
      action: '去兑换',
    },
    {
      id: 'p6',
      title: '【打折兑】旅行收纳袋套装（3件）',
      points: 60,
      badge: '热销',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-6/800/700',
      action: '去兑换',
    },
    {
      id: 'p7',
      title: '【积分兑】精致礼盒（空盒）',
      points: 20,
      badge: '低门槛',
      image: 'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-7/800/700',
      action: '去兑换',
    },
    {
      id: 'p8',
      title: '【积分兑】黑钻专属·高山茶礼（已售罄）',
      points: 120,
      badge: '已售罄',
      image: 'https://images.unsplash.com/photo-1527169402691-a3fb4e1b6c2b?auto=format&fit=crop&q=80&w=800',
      imageFallback: 'https://picsum.photos/seed/points-8/800/700',
      action: '已售罄',
      soldOut: true,
    },
  ];

  const visibleItems = tab === 'gift' ? items.slice(0, 6) : items.slice(2);

  const badgeStyle = (text) => {
    if (text === '已售罄') return 'bg-black/60 text-white';
    if (text === '限时') return 'bg-[#FF9500] text-white';
    if (text === '门店可用') return 'bg-[#34C759] text-white';
    if (text === '打折') return 'bg-[#5856D6] text-white';
    return 'bg-black/55 text-white';
  };

  return (
    <div className="flex flex-col h-full bg-[#F2F2F7]">
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div className="text-[16px] font-semibold text-gray-900">积分商城</div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] border border-black/5">
          <Star size={14} className="text-[#FF9500]" />
          <span className="text-[12px] font-bold text-gray-900">{points}</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pb-6">
        <div className="pt-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[12px] text-gray-500 font-semibold">我的积分</div>
                <div className="mt-1 text-[26px] font-extrabold text-gray-900 tracking-tight">{points}</div>
              </div>
              <button className="h-10 px-4 rounded-2xl bg-[#FF9500] text-white text-[13px] font-extrabold active:opacity-85">
                赚积分
              </button>
            </div>
          </div>

          <div className="mt-3 bg-white rounded-2xl p-1 flex gap-1 shadow-sm border border-black/5">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex-1 h-9 rounded-xl text-[13px] font-semibold transition-colors",
                  tab === t.id ? "bg-[#F2F2F7] text-gray-900" : "text-gray-500"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {visibleItems.map((it) => (
              <div key={it.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                <div className="relative h-[132px] bg-gray-100">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => handleImgError(e, it.imageFallback)}
                  />
                  <div className={cn("absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold", badgeStyle(it.badge))}>
                    {it.badge}
                  </div>
                  {it.soldOut && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-full bg-black/70 text-white text-[12px] font-bold">
                        已售罄
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <div className="text-[12px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[34px]">{it.title}</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-[#FF3B30] font-extrabold text-[16px]">{it.points}</div>
                    <div className="text-[11px] text-gray-500 font-semibold">积分</div>
                  </div>
                  <button
                    disabled={it.soldOut}
                    className={cn(
                      "mt-2 w-full h-9 rounded-xl text-[13px] font-bold active:opacity-85",
                      it.soldOut ? "bg-gray-200 text-gray-400" : "bg-[#FF9500] text-white"
                    )}
                  >
                    {it.soldOut ? "已售罄" : it.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <EndReached className="pt-6 pb-2" />
        </div>
      </div>
    </div>
  );
};

const MyScreen = ({ onOpenOrders, onOpenStore, onOpenMember }) => {
  const menuItems = [
    { label: '我的门店', icon: Store, value: '上海普陀真北路店' },
    { label: '我的地址', icon: MapPinned },
    { label: '售后服务', icon: Headset, value: '400-850-8980' },
    { label: '设置', icon: Settings },
  ];

  return (
    <div className="bg-[#F2F2F7] min-h-full">
      <div className="bg-gradient-to-b from-[#FCE6C8] via-[#F6EDE3] to-[#F2F2F7]">
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-center h-10">
            <div className="text-[16px] font-semibold text-gray-900">我的</div>
          </div>

          <div className="mt-3 flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-white/70 border border-white/50 overflow-hidden shadow-sm shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-[#FF9500]/30 to-[#007AFF]/20"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="text-[18px] font-bold text-gray-900">闲云野鹤</div>
                <div className="inline-flex items-center gap-1 bg-[#1C1C1E] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
                  <Crown size={12} className="text-[#FCE38A]" />
                  黑钻会员
                </div>
              </div>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-500">
                <span>ID：69475400c6feab0063d325cd</span>
                <button className="p-1 -ml-1 active:opacity-60">
                  <Copy size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-gradient-to-br from-[#1E2B7B] to-[#0E1A4F] rounded-2xl p-4 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <Crown size={14} className="text-[#FCE38A]" />
                </div>
                <div className="text-white font-bold text-[16px]">黑钻会员</div>
              </div>
              <button onClick={onOpenMember} className="bg-white/15 text-white text-[12px] font-semibold px-3 py-1.5 rounded-full active:opacity-80">
                会员中心
              </button>
            </div>
            <div className="mt-3 text-white/80 text-[12px] relative z-10">
              已为您累计省钱 <span className="text-[#FCE38A] font-bold">128.54</span> 元，您共兑换了 <span className="text-[#FCE38A] font-bold">0</span> 次礼包，价值 <span className="text-[#FCE38A] font-bold">0</span> 元
            </div>
          </div>

          <div className="mt-3 bg-white rounded-2xl px-3 py-4 shadow-sm">
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: '全部订单', icon: ClipboardList },
                { label: '待出行/收货', icon: Truck, badge: '1' },
                { label: '已完成', icon: BadgeCheck },
                { label: '退款/售后', icon: RotateCcw },
              ].map((item) => {
                const Icon = item.icon;
                const isAllOrders = item.label === '全部订单';
                return (
                  <button
                    key={item.label}
                    onClick={isAllOrders ? onOpenOrders : undefined}
                    className={cn(
                      "flex flex-col items-center gap-2 relative active:opacity-70 transition-opacity",
                      isAllOrders ? "cursor-pointer" : "cursor-default"
                    )}
                  >
                    <div className="relative">
                      <Icon size={22} className="text-gray-800" />
                      {item.badge && (
                        <div className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-[#FF3B30] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                          {item.badge}
                        </div>
                      )}
                    </div>
                    <div className="text-[11px] text-gray-600 font-medium whitespace-nowrap">{item.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 bg-white rounded-2xl px-2 py-3 shadow-sm">
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { num: '49', label: '礼品兑换券', icon: Gift },
                { num: '0', label: '赠品券', icon: Ticket },
                { num: '3', label: '抵扣红包', icon: Wallet },
                { num: '48', label: '积分', icon: Star },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <div className="text-[18px] font-bold text-gray-900">{item.num}<span className="text-[11px] font-medium text-gray-500">张</span></div>
                  <div className="text-[11px] text-gray-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF9500]/20 to-[#FF2D55]/10 flex items-center justify-center">
                <ShoppingBag size={18} className="text-[#FF9500]" />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-gray-900">积分商城</div>
                <div className="text-[12px] text-gray-500 mt-0.5">
                  您有 <span className="text-[#FF9500] font-bold">10</span> 积分7天后过期，快去使用吧
                </div>
              </div>
            </div>
            <button className="text-[#FF9500] text-[12px] font-bold inline-flex items-center gap-1 active:opacity-70 whitespace-nowrap shrink-0">
              去兑换
              <ChevronRight size={14} className="text-[#FF9500]" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="mt-3 bg-white rounded-2xl overflow-hidden shadow-sm">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            const isStore = item.label === '我的门店';
            const content = (
              <>
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-gray-500" />
                  <div className="text-[15px] font-semibold text-gray-900">{item.label}</div>
                </div>
                <div className="flex items-center gap-2">
                  {item.value && <div className="text-[13px] text-gray-500 font-medium">{item.value}</div>}
                  <ChevronRight size={18} className="text-gray-300" />
                </div>
              </>
            );

            if (isStore) {
              return (
                <button
                  key={item.label}
                  onClick={onOpenStore}
                  className={cn("w-full flex items-center justify-between px-4 py-4 active:bg-black/[0.02]", idx !== menuItems.length - 1 && "border-b border-black/5")}
                >
                  {content}
                </button>
              );
            }

            return (
              <div
                key={item.label}
                className={cn("flex items-center justify-between px-4 py-4", idx !== menuItems.length - 1 && "border-b border-black/5")}
              >
                {content}
              </div>
            );
          })}
        </div>

        <button className="w-full mt-4 mb-6 h-12 bg-[#FF3B30] text-white font-bold rounded-2xl active:opacity-85 shadow-sm">
          退出登录
        </button>
      </div>
    </div>
  );
};

const StoreManageScreen = ({ onBack }) => {
  const actions = [
    {
      title: '切换门店',
      desc: '已绑定门店时，可切换为其他门店继续服务。',
      color: 'bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20',
    },
    {
      title: '解绑门店',
      desc: '解除当前绑定门店关系，后续可重新绑定门店。',
      color: 'bg-[#FF3B30]/10 text-[#FF3B30] border-[#FF3B30]/20',
    },
    {
      title: '绑定门店',
      desc: '首次使用或解绑后，可选择门店进行绑定。',
      color: 'bg-[#34C759]/10 text-[#34C759] border-[#34C759]/20',
    },
  ];

  return (
    <div className="bg-[#F2F2F7] h-full flex flex-col">
      <div className="shrink-0 px-4 pt-3 pb-3 bg-white/90 backdrop-blur-xl border-b border-black/5">
        <div className="flex items-center justify-between h-10">
          <button onClick={onBack} className="w-10 h-10 -ml-2 flex items-center justify-center active:opacity-60">
            <ChevronLeft size={20} className="text-gray-900" />
          </button>
          <div className="text-[16px] font-semibold text-gray-900">我的门店</div>
          <div className="w-10 h-10"></div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 pb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[12px] text-gray-500 font-medium">当前绑定门店</div>
          <div className="mt-1 text-[16px] font-bold text-gray-900">上海普陀真北路店</div>
        </div>

        <div className="mt-3 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
          {actions.map((a, i) => (
            <div key={a.title} className={cn("px-4 py-4", i !== actions.length - 1 && "border-b border-black/5")}>
              <div className="flex items-center justify-between gap-3">
                <div className="text-[15px] font-semibold text-gray-900">{a.title}</div>
                <div className={cn("shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", a.color)}>
                  功能
                </div>
              </div>
              <div className="mt-1 text-[12px] text-gray-500 leading-relaxed">{a.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-[12px] text-gray-500 text-center">
          此3个功能不会同时出现。
        </div>
      </div>
    </div>
  );
};

const OrderListScreen = ({ onBack, onPayBalance }) => {
  const [orderTab, setOrderTab] = useState('travel');

  const tabs = [
    { id: 'travel', label: '酒旅订单' },
    { id: 'ecom', label: '电商订单' },
    { id: 'member', label: '会员订单' },
  ];

  const travelOrders = [
    {
      id: 't1',
      source: '直播间订单',
      title: '云南大理+丽江5天4晚私家团',
      store: '上海普陀真北路店',
      status: '待出行',
      date: '2026-05-01 13:54:12',
      people: 2,
      amount: 2999,
    },
    {
      id: 't1_paid',
      source: '直播间订单',
      title: '云南大理+丽江5天4晚私家团',
      store: '上海普陀真北路店',
      status: '尾款已支付',
      date: '2026-05-01 14:06:38',
      people: 2,
      amount: 2999,
    },
    {
      id: 't2',
      source: '门店订单',
      title: '西藏拉萨+林芝7天6晚净心之旅',
      store: '上海普陀真北路店',
      status: '已付款',
      date: '2026-05-18 09:12:05',
      people: 1,
      amount: 5200,
    },
    {
      id: 't3',
      source: '平台订单',
      title: '三亚蜈支洲岛+亚龙湾5天豪华游',
      store: '上海普陀真北路店',
      status: '已完成',
      date: '2026-04-10 20:43:51',
      people: 3,
      amount: 3880,
    },
  ];

  const ecomOrders = [
    {
      id: 'e1',
      title: '旅行收纳套装（7件套）',
      status: '待收货',
      date: '2026-04-28',
      amount: 199,
    },
    {
      id: 'e2',
      title: '便携颈枕+眼罩套装',
      status: '已完成',
      date: '2026-04-03',
      amount: 99,
    },
  ];

  const memberOrders = [
    {
      id: 'm1',
      title: '黑钻会员 - 年卡',
      status: '已开通',
      date: '2026-03-01',
      amount: 999,
    },
  ];

  const getSourcePill = (source) => {
    if (source === '直播间订单') return { bg: 'bg-[#AF52DE]/10', text: 'text-[#AF52DE]', border: 'border-[#AF52DE]/20' };
    if (source === '门店订单') return { bg: 'bg-[#34C759]/10', text: 'text-[#34C759]', border: 'border-[#34C759]/20' };
    return { bg: 'bg-[#007AFF]/10', text: 'text-[#007AFF]', border: 'border-[#007AFF]/20' };
  };

  return (
    <div className="flex flex-col h-full bg-[#F2F2F7]">
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div className="text-[16px] font-semibold text-gray-900">全部订单</div>
        <div className="w-10"></div>
      </div>

      <div className="shrink-0 bg-white px-4 pt-3 pb-3">
        <div className="bg-[#F2F2F7] rounded-2xl p-1 flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setOrderTab(t.id)}
              className={cn(
                "flex-1 h-9 rounded-xl text-[13px] font-semibold transition-colors",
                orderTab === t.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pb-6">
        {orderTab === 'travel' && (
          <div className="flex flex-col gap-3 pt-3">
            {travelOrders.map((o) => {
              const pill = getSourcePill(o.source);
              return (
                <div key={o.id} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-[14px] font-bold text-gray-900 leading-snug line-clamp-2">{o.title}</div>
                      {o.source !== '平台订单' && (
                        <div className="mt-1.5 flex items-center gap-2 text-[12px] text-gray-500">
                          <MapPin size={14} className="text-[#FF9500]" />
                          <span className="font-medium">{o.store}</span>
                        </div>
                      )}
                    </div>
                    <div className={cn("shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", pill.bg, pill.text, pill.border)}>
                      {o.source}
                    </div>
                  </div>

                  <div className="mt-3 h-px bg-black/5"></div>

                  <div className="mt-3 flex items-end justify-between gap-3">
                    <div className="text-[12px] text-gray-500 leading-snug">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-500">下单时间</span>
                        <span className="font-semibold text-gray-700">{o.date}</span>
                        <span className="text-gray-300">|</span>
                        <span>{o.people}人</span>
                      </div>
                      <div className="mt-1 text-[12px] text-gray-500 font-semibold">{o.status}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[16px] font-bold text-[#FF3B30]">¥{o.amount}</div>
                      {o.source === '直播间订单' && o.status !== '尾款已支付' && (
                        <button
                          onClick={() => onPayBalance?.(o)}
                          className="mt-2 h-8 px-3 bg-[#FF9500] text-white text-[12px] font-bold rounded-lg active:opacity-80"
                        >
                          支付尾款
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <EndReached className="pt-4 pb-2" />
          </div>
        )}

        {orderTab === 'ecom' && (
          <div className="flex flex-col gap-3 pt-3">
            {ecomOrders.map((o) => (
              <div key={o.id} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-gray-900 leading-snug">{o.title}</div>
                    <div className="mt-2 text-[12px] text-gray-500">下单时间：{o.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] text-gray-500 font-semibold">{o.status}</div>
                    <div className="text-[16px] font-bold text-[#FF3B30] mt-0.5">¥{o.amount}</div>
                  </div>
                </div>
              </div>
            ))}
            <EndReached className="pt-4 pb-2" />
          </div>
        )}

        {orderTab === 'member' && (
          <div className="flex flex-col gap-3 pt-3">
            {memberOrders.map((o) => (
              <div key={o.id} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-gray-900 leading-snug">{o.title}</div>
                    <div className="mt-2 text-[12px] text-gray-500">开通时间：{o.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] text-gray-500 font-semibold">{o.status}</div>
                    <div className="text-[16px] font-bold text-[#FF3B30] mt-0.5">¥{o.amount}</div>
                  </div>
                </div>
              </div>
            ))}
            <EndReached className="pt-4 pb-2" />
          </div>
        )}
      </div>
    </div>
  );
};

const PayBalanceScreen = ({ order, onBack, onPaid }) => {
  const [method, setMethod] = useState('wechat');
  const totalAmount = Number(order?.amount || 0);
  const deposit = Math.max(0, Math.round(totalAmount * 0.3));
  const remaining = Math.max(0, totalAmount - deposit);

  const methodItems = [
    { id: 'wechat', label: '微信支付', icon: QrCode },
    { id: 'alipay', label: '支付宝', icon: Wallet },
    { id: 'card', label: '银行卡', icon: CreditCard },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F2F2F7]">
      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-b border-black/5 px-4 py-3 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 active:opacity-50">
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div className="text-[16px] font-semibold text-gray-900">支付尾款</div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-4 pb-28">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[14px] font-bold text-gray-900 leading-snug">{order?.title}</div>
          {order?.source && (
            <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20">
              {order.source}
            </div>
          )}
          {order?.store && (
            <div className="mt-2 flex items-center gap-2 text-[12px] text-gray-500">
              <MapPin size={14} className="text-[#FF9500]" />
              <span className="font-medium">{order.store}</span>
            </div>
          )}
          {(order?.date || order?.people) && (
            <div className="mt-2 text-[12px] text-gray-500">
              {order?.date && <span className="font-semibold text-gray-700">{order.date}</span>}
              {order?.date && order?.people ? <span className="mx-2 text-gray-300">|</span> : null}
              {order?.people ? <span>{order.people}人</span> : null}
            </div>
          )}
        </div>

        <div className="mt-3 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[13px] font-bold text-gray-900 mb-3">金额明细</div>
          <div className="flex justify-between text-[13px] text-gray-600">
            <span>订单总额</span>
            <span className="font-semibold text-gray-900">¥{totalAmount}</span>
          </div>
          <div className="flex justify-between text-[13px] text-gray-600 mt-2">
            <span>已付定金</span>
            <span className="font-semibold text-gray-900">¥{deposit}</span>
          </div>
          <div className="h-px bg-black/5 my-3"></div>
          <div className="flex justify-between text-[14px]">
            <span className="font-bold text-gray-900">需支付尾款</span>
            <span className="font-extrabold text-[#FF3B30]">¥{remaining}</span>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-2xl p-4 shadow-sm border border-black/5">
          <div className="text-[13px] font-bold text-gray-900 mb-3">选择支付方式</div>
          <div className="flex flex-col gap-2">
            {methodItems.map((m) => {
              const Icon = m.icon;
              const active = method === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-3 rounded-xl border active:opacity-80",
                    active ? "border-[#007AFF]/30 bg-[#007AFF]/5" : "border-black/5 bg-[#F2F2F7]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center">
                      <Icon size={18} className={active ? "text-[#007AFF]" : "text-gray-600"} />
                    </div>
                    <div className="text-[14px] font-semibold text-gray-900">{m.label}</div>
                  </div>
                  <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", active ? "border-[#007AFF]" : "border-gray-300")}>
                    {active && <div className="w-2.5 h-2.5 rounded-full bg-[#007AFF]"></div>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="shrink-0 bg-white/95 backdrop-blur-xl border-t border-black/10 px-4 py-3 z-50">
        <button
          onClick={onPaid}
          className="w-full h-12 bg-[#FF9500] rounded-xl text-white font-bold active:opacity-80 transition-opacity"
        >
          确认支付尾款 ¥{remaining}
        </button>
      </div>
    </div>
  );
};

const PlaceholderScreen = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center h-full text-gray-300 pb-20">
    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
      <Icon size={32} />
    </div>
    <h2 className="text-sm font-bold text-gray-500">{title} 模块</h2>
    <p className="text-[10px]">COMING SOON</p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [screen, setScreen] = useState('home');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedLive, setSelectedLive] = useState(null);
  const [tabBeforeOrders, setTabBeforeOrders] = useState('home');

  const openOrders = () => {
    if (activeTab !== 'orders') setTabBeforeOrders(activeTab);
    setActiveTab('orders');
    setScreen('myOrders');
  };

  const openLive = (live) => {
    setSelectedLive(live);
    setScreen('liveWatch');
  };

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
    setScreen('detail');
  };

  const handleOrder = () => {
    setScreen('order');
  };

  const handleBackFromDetail = () => {
    setScreen('home');
    setSelectedRoute(null);
  };

  const handleBackFromOrder = () => {
    setScreen('detail');
  };

  const handleSubmitOrder = () => {
    alert('订单提交成功！我们将尽快与您联系。');
    setScreen('home');
    setSelectedRoute(null);
  };

  const renderContent = () => {
    if (screen === 'storeManage') {
      return <StoreManageScreen onBack={() => setScreen('home')} />;
    }

    if (screen === 'memberCenter') {
      return (
        <MemberCenterScreen
          onBack={() => {
            setActiveTab('home');
            setScreen('home');
          }}
        />
      );
    }

    if (screen === 'liveWatch' && selectedLive) {
      return (
        <LiveWatchScreen
          live={selectedLive}
          onBack={() => {
            setSelectedLive(null);
            setActiveTab('live');
            setScreen('home');
          }}
        />
      );
    }

    if (screen === 'pointsMall') {
      return (
        <PointsMallScreen
          onBack={() => {
            setActiveTab('home');
            setScreen('home');
          }}
        />
      );
    }

    if (screen === 'myOrders') {
      return (
        <OrderListScreen
          onBack={() => {
            setScreen('home');
            setActiveTab(tabBeforeOrders === 'orders' ? 'home' : tabBeforeOrders);
          }}
          onPayBalance={(order) => {
            setSelectedOrder(order);
            setScreen('payBalance');
          }}
        />
      );
    }

    if (screen === 'payBalance' && selectedOrder) {
      return (
        <PayBalanceScreen
          order={selectedOrder}
          onBack={() => setScreen('myOrders')}
          onPaid={() => {
            alert('尾款支付成功！');
            setScreen('myOrders');
          }}
        />
      );
    }

    if (screen === 'detail' && selectedRoute) {
      return (
        <ProductDetailScreen
          route={selectedRoute}
          onBack={handleBackFromDetail}
          onOrder={handleOrder}
        />
      );
    }

    if (screen === 'order' && selectedRoute) {
      return (
        <OrderScreen
          route={selectedRoute}
          onBack={handleBackFromOrder}
          onSubmit={handleSubmitOrder}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeScreen
            onRouteClick={handleRouteClick}
            onOpenMember={() => setScreen('memberCenter')}
            onOpenPointsMall={() => setScreen('pointsMall')}
          />
        );
      case 'live':
        return <LiveScreen onOpenLive={openLive} />;
      case 'bracelet':
        return <BraceletScreen />;
      case 'member':
        return <PlaceholderScreen title="会员中心" icon={CreditCard} />;
      case 'me':
        return <MyScreen onOpenOrders={openOrders} onOpenStore={() => setScreen('storeManage')} onOpenMember={() => setScreen('memberCenter')} />;
      default:
        return (
          <HomeScreen
            onRouteClick={handleRouteClick}
            onOpenMember={() => setScreen('memberCenter')}
            onOpenPointsMall={() => setScreen('pointsMall')}
          />
        );
    }
  };

  const shouldHideTabBar = screen === 'detail' || screen === 'order' || screen === 'payBalance' || screen === 'storeManage' || screen === 'pointsMall' || screen === 'memberCenter' || screen === 'liveWatch';
  const shouldLockOuterScroll = screen === 'detail' || screen === 'order' || screen === 'myOrders' || screen === 'payBalance' || screen === 'storeManage' || screen === 'pointsMall' || screen === 'memberCenter' || screen === 'liveWatch';

  return (
    <DeviceFrameWithTab
      tabBar={
        <TabBar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setScreen('home');
          }}
          onOpenOrders={openOrders}
        />
      }
      hideTabBar={shouldHideTabBar}
      lockOuterScroll={shouldLockOuterScroll}
    >
      {renderContent()}
    </DeviceFrameWithTab>
  );
}

export default App;
