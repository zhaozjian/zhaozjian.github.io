// 移动端菜单切换
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 抽屉式菜单控制
function openDrawer(drawerId) {
    document.getElementById(drawerId).classList.add('open');
    document.getElementById('overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function closeAllDrawers() {
    document.querySelectorAll('.drawer').forEach(drawer => {
        drawer.classList.remove('open');
    });
    document.getElementById('overlay').classList.add('hidden');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 联系我们
document.getElementById('contact-btn').addEventListener('click', () => openDrawer('contact-drawer'));
document.getElementById('mobile-contact-btn').addEventListener('click', () => {
    openDrawer('contact-drawer');
    document.getElementById('mobile-menu').classList.add('hidden');
});
document.getElementById('contact-card').addEventListener('click', () => openDrawer('contact-drawer'));

// 基地简介
document.getElementById('intro-btn').addEventListener('click', () => openDrawer('intro-drawer'));
document.getElementById('mobile-intro-btn').addEventListener('click', () => {
    openDrawer('intro-drawer');
    document.getElementById('mobile-menu').classList.add('hidden');
});
document.getElementById('intro-card').addEventListener('click', () => openDrawer('intro-drawer'));

// 喇叭基地制造
document.getElementById('products-btn').addEventListener('click', () => openDrawer('products-drawer'));
document.getElementById('mobile-products-btn').addEventListener('click', () => {
    openDrawer('products-drawer');
    document.getElementById('mobile-menu').classList.add('hidden');
});
document.getElementById('products-card').addEventListener('click', () => openDrawer('products-drawer'));

// 关闭抽屉
document.querySelectorAll('.close-drawer').forEach(button => {
    button.addEventListener('click', closeAllDrawers);
});

document.getElementById('overlay').addEventListener('click', closeAllDrawers);

// 点击页面其他地方关闭移动端菜单
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});