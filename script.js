const container = document.getElementById('danmakuContainer');
const messages = [
    // 基础称赞
    'Lucy 👑', 'Lucy is amazing ✨', 'Hello Lucy 🌟', 'Lucy 真棒 💖', 'Lucy! 🎉', 'Go Lucy 💪',
    'Lucy ❤️', 'Lucy 加油 ⭐️', 'Lucy 最棒 🏆', 'I love Lucy 💝', 'Lucy 666 🔥',
    
    // 可爱系列
    'Lucy 太可爱了 🥰', 'Cute Lucy 🌸', 'Lucy 软萌萌 🍬', 'Lucy 是小天使 👼', 
    'Lucy 萌萌哒 🎀', 'Lucy 可爱爆表 💕', 'Lucy 是我的最爱 💗',
    
    // 励志系列
    'Lucy 太强了 👏', 'Lucy 好厉害 ✌️', 'Lucy 牛逼 🎯', 'Lucy 真酷 😎',
    'Lucy 永远的神 ⚡️', 'Lucy 无敌 💎', 'Lucy 天下第一 🥇',
    
    // 应援系列
    'Lucy 我们永远支持你 💪', 'Lucy 加油加油 ⛽️', 'Lucy 必胜 🌈',
    'Lucy 前途无量 🌠', 'Lucy 未来可期 🎆', 'Lucy 闪闪发光 ✨',
    
    // 表情包系列
    'Lucy 太棒了 🤩', 'Lucy 好开心 🥳', 'Lucy 超赞 🙌', 'Lucy 我爱你 🥺',
    'Lucy 太优秀了 🏅', 'Lucy 最美 👸', 'Lucy 是宝藏 💎',
    
    // 特效文字
    '✧*｡٩(ˊωˋ*)و✧*｡ Lucy', '♪(^∇^*)Lucy♪', '★⌒ヽ(˘⌒˘*)Lucy',
    'Lucy ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡', 'Lucy (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
    
    // 中英混合
    'Lucy 是 No.1 🥇', 'Lucy is the BEST 💫', 'Lucy 永远滴神 👑',
    'Super Lucy 💫', 'Amazing Lucy ⭐️', 'Wonderful Lucy 🌟',
    
    // 额外的表情组合
    'Lucy 🌟✨💫', 'Lucy 💖💝💕', 'Lucy 👑🏆⭐️',
    'Lucy 🎉🎊🎆', 'Lucy 🌈🌸✨', 'Lucy 💪💎🔥'
];

// 扩展颜色数组
const colors = [
    // 粉色系
    '#ff69b4', '#ff1493', '#db7093', '#ffc0cb',
    // 蓝色系
    '#00ffff', '#1e90ff', '#87ceeb', '#4169e1',
    // 紫色系
    '#ba55d3', '#9370db', '#8a2be2', '#9400d3',
    // 金色系
    '#ffd700', '#daa520', '#ffa500', '#ff8c00',
    // 其他亮色
    '#ff0000', '#00ff00', '#ffff00', '#ff00ff',
    // 渐变色（使用CSS渐变）
    'linear-gradient(45deg, #ff69b4, #ff1493)',
    'linear-gradient(45deg, #00ffff, #1e90ff)',
    'linear-gradient(45deg, #ffd700, #ff8c00)'
];

function createDanmaku() {
    const danmaku = document.createElement('div');
    danmaku.className = 'danmaku';
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    danmaku.textContent = message;
    
    // 处理渐变色
    if (color.includes('gradient')) {
        danmaku.style.background = color;
        danmaku.style.webkitBackgroundClip = 'text';
        danmaku.style.webkitTextFillColor = 'transparent';
    } else {
        danmaku.style.color = color;
    }
    
    // 随机字体大小（稍微增加范围）
    const fontSize = Math.random() * (28 - 16) + 16;
    danmaku.style.fontSize = `${fontSize}px`;
    
    // 随机位置
    const left = Math.random() * (container.offsetWidth - 150);
    const top = Math.random() * (container.offsetHeight - fontSize);
    danmaku.style.left = `${left}px`;
    danmaku.style.top = `${top}px`;
    
    // 扩展动画效果
    const animations = [
        'fadeIn',
        'scaleIn',
        'rotateIn',
        'slideIn',
        'bounceIn',
        'swingIn',
        'pulseIn'
    ];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    danmaku.style.animation = `${randomAnimation} 2s`;
    
    container.appendChild(danmaku);
    
    setTimeout(() => {
        danmaku.style.animation = 'fadeOut 1s';
        danmaku.addEventListener('animationend', () => {
            danmaku.remove();
        });
    }, 2000);
}

// 稍微加快弹幕生成速度
setInterval(createDanmaku, 40); 