// 获取所有需要的HTML元素
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('game-over');

let score = 0;
let isJumping = false;
let isGameOver = false;

// --- 核心功能 1: 跳跃 ---
function jump() {
    // 如果正在跳跃中，或者游戏已经结束，就不能再跳了
    if (isJumping || isGameOver) return; 

    isJumping = true;
    dino.classList.add('jump'); // 添加jump样式，播放跳跃动画

    // 动画结束后，把jump样式移除，并标记为“未在跳跃”
    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500); // 这个时间必须和CSS中的动画时间一致
}

// 监听用户的操作：按下空格键或点击屏幕
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});
document.addEventListener('click', jump);


// --- 核心功能 2: 碰撞检测和游戏循环 ---
let gameLoop = setInterval(() => {
    if (isGameOver) {
        clearInterval(gameLoop); // 游戏结束，停止循环
        return;
    }

    // 获取小恐龙和仙人掌的实时位置
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // 判断是否碰撞
    // 条件1: 仙人掌移动到小恐龙的范围内 (cactusLeft < 70 且 > 0)
    // 条件2: 小恐龙在地面上，没有跳起来 (dinoBottom < 40)
    if (cactusLeft < 70 && cactusLeft > 0 && dinoBottom < 40) {
        isGameOver = true;
        
        // 显示“游戏结束”
        gameOverDisplay.classList.remove('hidden');

        // 停止仙人掌的动画，让它停在原地
        cactus.style.animation = 'none';
        cactus.style.left = `${cactusLeft}px`; 

        // 弹出提示
        alert("游戏结束! 你的分数是: " + score);
    }
}, 10); // 每10毫秒检查一次，保证检测的灵敏度

// --- 核心功能 3: 计分 ---
let scoreInterval = setInterval(() => {
    if (isGameOver) {
        clearInterval(scoreInterval); // 游戏结束，停止计分
        return;
    }
    score++;
    scoreDisplay.textContent = "分数: " + score;
}, 200); // 每200毫秒加一分
