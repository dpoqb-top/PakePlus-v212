// 页面跳转（避免使用 <a> 标签，防止浏览器默认行为）
function navigate(page) {
  window.location.href = page;
}

// 全屏切换（兼容主流浏览器/WebView2）
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`全屏请求失败: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// 阻止右键菜单（防调试）
document.addEventListener('contextmenu', e => e.preventDefault());

// 阻止常见退出快捷键（Alt+F4, F11, Esc 等）
document.addEventListener('keydown', e => {
  if (
    e.key === 'F11' ||
    e.key === 'Escape' ||
    (e.altKey && e.key === 'F4') ||
    (e.ctrlKey && e.key === 'r') ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'u')
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});