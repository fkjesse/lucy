const container = document.getElementById('danmakuContainer');
// 将原始弹幕和用户添加的弹幕分开存储
const originalMessages = [
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
    // ... 其他原始弹幕内容保持不变 ...
];

// 用户添加的弹幕数组
const userMessages = [];

// 获取当前所有弹幕（原始 + 用户添加的）
function getAllMessages() {
    return [...originalMessages, ...userMessages];
}

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
    
    // 从所有弹幕中随机选择一条
    const allMessages = getAllMessages();
    const message = allMessages[Math.floor(Math.random() * allMessages.length)];
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

// 获取DOM元素
const input = document.getElementById('danmakuInput');
const sendButton = document.getElementById('sendButton');

// 发送弹幕函数
function sendDanmaku() {
    const text = input.value.trim();
    if (text) {
        // 创建新弹幕
        const danmaku = document.createElement('div');
        danmaku.className = 'danmaku';
        danmaku.textContent = text;
        
        // 将新弹幕添加到用户弹幕数组
        if (!userMessages.includes(text)) {
            userMessages.push(text);
            // 可以选择将用户弹幕保存到localStorage
            localStorage.setItem('userDanmaku', JSON.stringify(userMessages));
        }
        
        // 使用随机颜色
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // 处理渐变色
        if (color.includes('gradient')) {
            danmaku.style.background = color;
            danmaku.style.webkitBackgroundClip = 'text';
            danmaku.style.webkitTextFillColor = 'transparent';
        } else {
            danmaku.style.color = color;
        }
        
        // 随机字体大小
        const fontSize = Math.random() * (28 - 16) + 16;
        danmaku.style.fontSize = `${fontSize}px`;
        
        // 随机位置
        const left = Math.random() * (container.offsetWidth - 150);
        const top = Math.random() * (container.offsetHeight - fontSize);
        danmaku.style.left = `${left}px`;
        danmaku.style.top = `${top}px`;
        
        // 随机动画
        const animations = ['fadeIn', 'scaleIn', 'rotateIn', 'slideIn', 'bounceIn', 'swingIn', 'pulseIn'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        danmaku.style.animation = `${randomAnimation} 2s`;
        
        container.appendChild(danmaku);
        
        // 清空输入框
        input.value = '';
        
        // 动画结束后删除
        setTimeout(() => {
            danmaku.style.animation = 'fadeOut 1s';
            danmaku.addEventListener('animationend', () => {
                danmaku.remove();
            });
        }, 2000);
    }
}

// 页面加载时从localStorage加载用户弹幕
window.addEventListener('load', () => {
    const savedDanmaku = localStorage.getItem('userDanmaku');
    if (savedDanmaku) {
        const savedMessages = JSON.parse(savedDanmaku);
        userMessages.push(...savedMessages);
    }
});

// 点击发送按钮发送弹幕
sendButton.addEventListener('click', sendDanmaku);

// 按回车键发送弹幕
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendDanmaku();
    }
}); 
